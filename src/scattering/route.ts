import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import {
  actionSpecOpenApiPostRequestBody,
  actionsSpecOpenApiGetResponse,
} from '../openapi';

import { getCollectionBySlug } from './scattering-api';
import { ActionsSpecGetResponse, ActionsSpecPostRequestBody, ActionsSpecPostResponse } from '../../spec/actions-spec';
import jupiterApi from '../jupiter-swap/jupiter-api';
import { ActionPostRequest } from '@solana/actions';
import puppeteer from 'puppeteer';

const app = new OpenAPIHono();
const SWAP_AMOUNT_USD_OPTIONS = [{ lable: '0.1SOL', amount: 100000000 }, { lable: '0.5SOL', amount: 500000000 }, { lable: '1SOL', amount: 1000000000 }];
app.openapi(
  createRoute({
    method: 'get',
    path: 'buy/{slug}',
    tags: ['Scattering Swap'],
    request: {
      params: z.object({
        slug: z.string().openapi({
          param: {
            name: 'slug',
            in: 'path',
          },
          type: 'string',
          example: 'abble_spl404',
        }),
      }),
    },
    body: actionSpecOpenApiPostRequestBody,
    responses: actionsSpecOpenApiGetResponse,
  }),
  async (c) => {
    try {
      const slug = c.req.param('slug');
      const collectionInfo = await getCollectionBySlug({ slug })
      const response: ActionsSpecGetResponse = {
        icon: `https://d2oiecgevbfxbl.cloudfront.net/images/550x550/freeze=false/https://static.crystalvault.io/logo/solana/assets/${collectionInfo?.data?.item?.erc20_address}/logo.png`,
        label: collectionInfo?.data?.item?.name,
        title: collectionInfo?.data?.item?.name,
        description: collectionInfo?.data?.item?.description,
        links: {
          actions: [
            ...SWAP_AMOUNT_USD_OPTIONS.map(({ lable, amount }) => ({
              label: `${lable}`,
              href: `/blink-api/buy/${slug}/${amount}`,
            })),
            // {
            //   href: `/api/buy/usdt/amount`,
            //   label: `Buy ${collectionInfo?.data?.item?.symbol}`,
            //   parameters: [
            //     {
            //       name: 'amount',
            //       label: 'Enter a custom USD amount',
            //     },
            //   ],
            // },

          ],
        },
      };
      return c.json(response);
    } catch (error) {
      console.error('error', error);

      return c.json({});
    }

    // if (!inputTokenMeta || !outputTokenMeta) {
    //   return Response.json({
    //     icon: 'https://scattering.io/assets/images/media/twitter-card.png',
    //     label: 'Not Available',
    //     title: `Title`,
    //     description: `description`,
    //     disabled: true,
    //     error: {
    //       message: `Token metadata not found.`,
    //     },
    //   } satisfies ActionsSpecGetResponse);
    // }

    // const amountParameterName = 'amount';
    // const response: ActionsSpecGetResponse = {
    //   icon: JUPITER_LOGO,
    //   label: `Label`,
    //   title: `Title`,
    //   description: `description`,
    //   links: {
    //     actions: [
    //       ...SWAP_AMOUNT_USD_OPTIONS.map((amount) => ({
    //         label: `${amount}`,
    //         href: `/api/test/${tokenPair}/${amount}`,
    //       })),

    //     ],
    //   },
    // };


  },
);
app.openapi(
  createRoute({
    method: 'post',
    path: 'buy/{slug}/{amount}',
    tags: ['Scattering Swap'],
    request: {
      params: z.object({
        slug: z.string().openapi({
          param: {
            name: 'slug',
            in: 'path',
          },
          type: 'string',
          example: 'abble_spl404',
        }),
      }),
    },
    responses: actionsSpecOpenApiGetResponse,
  }),
  async (c) => {
    try {
      const slug = c.req.param('slug');
      const collectionInfo = await getCollectionBySlug({ slug })
      const amount = c.req.param('amount');
      const { account } = (await c.req.json()) as ActionPostRequest;
      const quote = await jupiterApi.quoteGet({
        inputMint: 'So11111111111111111111111111111111111111112',
        outputMint: collectionInfo?.data?.item?.erc20_address,
        amount: Number(amount),
        autoSlippage: true,
        swapMode: 'ExactIn',
        maxAutoSlippageBps: 500, // 5%,
      });
      console.log('swap ', amount, 'sol => ', slug);
      console.log('quote', quote);
      const swapResponse = await jupiterApi.swapPost({
        swapRequest: {
          quoteResponse: quote,
          userPublicKey: account,
          prioritizationFeeLamports: 'auto',
        },
      });
      const response: ActionsSpecPostResponse = {
        transaction: swapResponse.swapTransaction,
      };
      return c.json(response, 200);

    } catch (error) {
      console.log('error', error, 200);

      return c.json({ error });
    }
  },
);
// app.openapi(
//   createRoute({
//     method: 'post',
//     path: '/api/buy/{slug}/usdt/{amount}',
//     tags: ['Scattering Swap'],
//     request: {
//       params: z.object({
//         slug: z.string().openapi({
//           param: {
//             name: 'slug',
//             in: 'path',
//           },
//           type: 'string',
//           example: 'abble_spl404',
//         }),
//       }),
//     },
//     responses: actionsSpecOpenApiGetResponse,
//   }),
//   async (c) => {
//     try {
//       const slug = c.req.param('slug');
//       // const collectionInfo = await getCollectionBySlug({ slug })
//       // const { amount, account } = (await c.req.json());
//       // const quote = await jupiterApi.quoteGet({
//       //   inputMint: 'So11111111111111111111111111111111111111112',
//       //   outputMint: collectionInfo?.data?.item?.erc20_address,
//       //   amount: Number(amount),
//       //   autoSlippage: true,
//       //   swapMode:'ExactIn',
//       //   maxAutoSlippageBps: 500, // 5%,
//       // });
//       // console.log('swap ',amount ,'sol => ',slug );
//       // console.log('quote',quote);


//       const swapResponse = await jupiterApi.swapPost({
//         swapRequest: {
//           quoteResponse: quote,
//           userPublicKey: account,
//           prioritizationFeeLamports: 'auto',
//         },
//       });
//       const response: ActionsSpecPostResponse = {
//         transaction: swapResponse.swapTransaction,
//       };
//       return c.json(response, 200);

//     } catch (error) {
//       console.log('error', error, 200);

//       return c.json({ error });
//     }
//   },
// );

app.openapi(
  createRoute({
    method: 'post',
    path: 'generate-og-image',
    tags: ['Og Image'],
    responses: actionsSpecOpenApiGetResponse,
  }),
  async (c) => {
    try {
      const {
        logoUrl,
        title,
        subtitle,
        price,
        change,
        volume,
        liquidity,
        marketCap,
        totalSupply
      } = await c.req.json();

      if (!title) {
        return c.json({ error: 'title is required' }, 400);
      }
      const htmlContent = `
     <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Data Card</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: auto;
          margin: 0;
          background-color: #1a1a2e;
        }
        .card {
          width: 800px;
          border-radius: 16px;
          background-color: #0f0f1a;
          color: white;
          padding: 20px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          box-sizing: border-box;
        }
        .card .header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .card .header img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
        }
        .card .header .info {
          margin-left: 16px;
        }
        .card .header .info h1 {
          font-size: 32px;
          margin: 0;
        }
        .card .header .info p {
          font-size: 24px;
          margin: 0;
        }
        .card .content {
          display: flex;
          justify-content: space-between;
        }
        .card .content .item {
          text-align: center;
          flex: 1;
        }
        .card .content .item:not(:last-child) {
          margin-right: 20px;
        }
        .card .content .item p {
          margin: 4px 0;
        }
        .card .content .item .value {
          font-size: 20px;
          font-weight: bold;
        }
        .card .content .item .label {
          font-size: 14px;
          color: #999;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <img src="${logoUrl}" alt="Logo">
          <div class="info">
            <h1>${title}</h1>
            <p>${subtitle}</p>
          </div>
        </div>
        <div class="content">
          <div class="item">
            <p class="value">${price}</p>
            <p class="label">Price</p>
          </div>
          <div class="item">
            <p class="value">${change}</p>
            <p class="label">24h Change</p>
          </div>
          <div class="item">
            <p class="value">${volume}</p>
            <p class="label">24h Volume</p>
          </div>
          <div class="item">
            <p class="value">${liquidity}</p>
            <p class="label">Liquidity</p>
          </div>
          <div class="item">
            <p class="value">${marketCap}</p>
            <p class="label">Market Cap</p>
          </div>
          <div class="item">
            <p class="value">${totalSupply}</p>
            <p class="label">Total Supply</p>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;


      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.setContent(htmlContent);

      const screenshot = await page.screenshot({ type: 'jpeg' });
      await browser.close();

      return c.body(screenshot, 200, { 'Content-Type': 'image/jpeg' });

    } catch (error) {
      console.log('error', error, 200);

      return c.json({ error });
    }
  },
);
export default app;
