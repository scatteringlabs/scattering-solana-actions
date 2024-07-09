"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_openapi_1 = require("@hono/zod-openapi");
const openapi_1 = require("../openapi");
const scattering_api_1 = require("./scattering-api");
const jupiter_api_1 = __importDefault(require("../jupiter-swap/jupiter-api"));
const app = new zod_openapi_1.OpenAPIHono();
const SWAP_AMOUNT_USD_OPTIONS = [{ lable: '0.1SOL', amount: 100000000 }, { lable: '0.5SOL', amount: 500000000 }, { lable: '1SOL', amount: 1000000000 }];
app.openapi((0, zod_openapi_1.createRoute)({
    method: 'get',
    path: 'buy/{slug}',
    tags: ['Scattering Swap'],
    request: {
        params: zod_openapi_1.z.object({
            slug: zod_openapi_1.z.string().openapi({
                param: {
                    name: 'slug',
                    in: 'path',
                },
                type: 'string',
                example: 'abble_spl404',
            }),
        }),
    },
    body: openapi_1.actionSpecOpenApiPostRequestBody,
    responses: openapi_1.actionsSpecOpenApiGetResponse,
}), async (c) => {
    try {
        const slug = c.req.param('slug');
        const collectionInfo = await (0, scattering_api_1.getCollectionBySlug)({ slug });
        const response = {
            icon: `https://d2oiecgevbfxbl.cloudfront.net/images/550x550/freeze=false/https://static.crystalvault.io/logo/solana/assets/${collectionInfo?.data?.item?.erc20_address}/logo.png`,
            label: collectionInfo?.data?.item?.name,
            title: collectionInfo?.data?.item?.name,
            description: collectionInfo?.data?.item?.description,
            links: {
                actions: [
                    ...SWAP_AMOUNT_USD_OPTIONS.map(({ lable, amount }) => ({
                        label: `${lable}`,
                        href: `/api/buy/${slug}/${amount}`,
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
    }
    catch (error) {
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
});
app.openapi((0, zod_openapi_1.createRoute)({
    method: 'post',
    path: 'buy/{slug}/{amount}',
    tags: ['Scattering Swap'],
    request: {
        params: zod_openapi_1.z.object({
            slug: zod_openapi_1.z.string().openapi({
                param: {
                    name: 'slug',
                    in: 'path',
                },
                type: 'string',
                example: 'abble_spl404',
            }),
        }),
    },
    responses: openapi_1.actionsSpecOpenApiGetResponse,
}), async (c) => {
    try {
        const slug = c.req.param('slug');
        const collectionInfo = await (0, scattering_api_1.getCollectionBySlug)({ slug });
        const amount = c.req.param('amount');
        const { account } = (await c.req.json());
        const quote = await jupiter_api_1.default.quoteGet({
            inputMint: 'So11111111111111111111111111111111111111112',
            outputMint: collectionInfo?.data?.item?.erc20_address,
            amount: Number(amount),
            autoSlippage: true,
            swapMode: 'ExactIn',
            maxAutoSlippageBps: 500, // 5%,
        });
        console.log('swap ', amount, 'sol => ', slug);
        console.log('quote', quote);
        const swapResponse = await jupiter_api_1.default.swapPost({
            swapRequest: {
                quoteResponse: quote,
                userPublicKey: account,
                prioritizationFeeLamports: 'auto',
            },
        });
        const response = {
            transaction: swapResponse.swapTransaction,
        };
        return c.json(response, 200);
    }
    catch (error) {
        console.log('error', error, 200);
        return c.json({ error });
    }
});
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
exports.default = app;
