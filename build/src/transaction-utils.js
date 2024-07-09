"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
exports.prepareTransaction = prepareTransaction;
const web3_js_1 = require("@solana/web3.js");
const environment = process.env.ENVIRONMENT || 'development';
const rpcUrl = environment === 'production'
    ? process.env.RPC_URL || (0, web3_js_1.clusterApiUrl)('mainnet-beta')
    : process.env.RPC_URL || (0, web3_js_1.clusterApiUrl)('devnet');
exports.connection = new web3_js_1.Connection(rpcUrl);
async function prepareTransaction(instructions, payer) {
    const blockhash = await exports.connection
        .getLatestBlockhash({ commitment: 'max' })
        .then((res) => res.blockhash);
    const messageV0 = new web3_js_1.TransactionMessage({
        payerKey: payer,
        recentBlockhash: blockhash,
        instructions
    }).compileToV0Message();
    return new web3_js_1.VersionedTransaction(messageV0);
}
