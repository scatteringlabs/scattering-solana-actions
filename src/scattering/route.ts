import { createRoute, OpenAPIHono, z } from '@hono/zod-openapi';
import {
  actionSpecOpenApiPostRequestBody,
  actionsSpecOpenApiGetResponse,
} from '../openapi';

import { getCollectionBySlug } from './scattering-api';
import { ActionsSpecGetResponse, ActionsSpecPostRequestBody, ActionsSpecPostResponse } from '../../spec/actions-spec';
import jupiterApi from '../jupiter-swap/jupiter-api';
import { ActionPostRequest } from '@solana/actions';

const app = new OpenAPIHono();
const SWAP_AMOUNT_USD_OPTIONS = [{ lable: '0.1SOL', amount: 0.1 }, { lable: '0.5SOL', amount: 0.5 }, { lable: '1SOL', amount: 1 }];

app.options('buy/{slug}', async (c) => {
  c.header('Access-Control-Allow-Origin', '*');
  c.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  c.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return c.text('OK');
});

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
      const description = collectionInfo?.data?.item?.description;
      const truncatedDescription = description?.length > 180
      ? `${description.substring(0, 180)}...`
      : description;
      const response: ActionsSpecGetResponse = {
        // icon: `https://scattering.io/api/og?slug=${slug}`,
        icon: `https://d2oiecgevbfxbl.cloudfront.net/images/550x550/freeze=false/https://static.crystalvault.io/logo/solana/assets/${collectionInfo?.data?.item?.erc20_address}/logo.png`,
        label: collectionInfo?.data?.item?.name,
        title: collectionInfo?.data?.item?.name,
        description: truncatedDescription,
        links: {
          actions: [
            ...SWAP_AMOUNT_USD_OPTIONS.map(({ lable, amount }) => ({
              label: `${lable}`,
              href: `/blink-api/buy/${slug}/${amount}`,
            })),
            {
              href: `/blink-api/buy/${slug}/{amount}`,
              label: `Buy ${collectionInfo?.data?.item?.symbol}`,
              parameters: [
                {
                  name: 'amount',
                  label: 'Enter a custom SOL amount',
                },
              ],
            },

          ],
        },
      };
      return c.json(response);
    } catch (error) {
      console.error('error', error);

      return c.json({});
    }

  },
);
app.openapi(
  createRoute({
    method: 'post',
    path: 'buy/{slug}/{amount}',
    tags: ['Scattering Swap'],
    request: {
      params: z.object({
        slug: z.string().optional().openapi({
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
      const amountInLamports = Math.floor(parseFloat(amount) * 1000000000);

      const { account } = (await c.req.json()) as ActionPostRequest;
      const quote = await jupiterApi.quoteGet({
        inputMint: 'So11111111111111111111111111111111111111112',
        outputMint: collectionInfo?.data?.item?.erc20_address,
        amount: Number(amountInLamports),
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

export default app;
