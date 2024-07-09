"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCollectionBySlug = exports.BASE_URL_DEV = void 0;
exports.BASE_URL_DEV = "https://api.scattering.io/dev-api/v2";
const getCollectionBySlug = async ({ slug, }) => {
    const response = await fetch(`${exports.BASE_URL_DEV}/collection/slug/${slug}`);
    if (!response.ok) {
        return {
            "code": 0,
            "data": {
                "item": {
                    "chain_id": 10000,
                    "erc20_address": "HACK8WdQNJdvBrKExA7tP7WAMaNKYugQ8H7qKSxRQrpy",
                    "erc721_address": "HACK8WdQNJdvBrKExA7tP7WAMaNKYugQ8H7qKSxRQrpy",
                    "name": "Hakoiri Collection",
                    "symbol": "HACK",
                    "create_time": '1718799100',
                    "description": "The official token of Hakoiri: the ultimate japanese-themed battle royale experience. Wishlist on Steam: https://store.steampowered.com/app/2546570/Hakoiri/",
                    "price_in_usd": "0.003099789567004445",
                    "volume": "200730.675127544",
                    "price_change": "14.910000",
                    "total_supply": "888791937.429207402",
                    "market_cap": "2755067.9748807247",
                    "liquidity": "134932.1252",
                    "slug": "hakoiri_collection",
                    "is_verified": true,
                    "has_logo": true,
                    "pool_address": "CWied5KX9DFq2drNuffDeJw3No3XWTxr2UnDMiv7ojYg",
                    // "base_asset_address": "HACK8WdQNJdvBrKExA7tP7WAMaNKYugQ8H7qKSxRQrpy",
                    "base_asset_symbol": "HACK",
                    "base_asset_decimals": 9,
                    // "quote_asset_address": "So11111111111111111111111111111111111111112",
                    "quote_asset_symbol": "SOL",
                    "nft_items": "0",
                    "nft_owners": 0,
                    "unique_own": "0",
                    "logo_url": "",
                    "banner_url": "",
                    "mobile_banner_url": "",
                    "project_url": "https://hakoiri.xyz",
                    "discord_url": "",
                    "opensea_url": "",
                    "telegram_url": "https://t.me/officialhakoiri",
                    "twitter_username": "https://x.com/HakoiriOfficial",
                    // "instagram_url": "",
                    "medium_url": "",
                    "facebook_url": "",
                    "tiktok_url": "",
                    "reddit_url": "",
                    // "warpcast_url": "",
                    "magiceden_url": "",
                    // "okxmarket_url": "",
                    // "coinmarketcap_url": "",
                    "coingecko_url": "",
                    "dexscreener_url": "",
                    "dextools_url": "",
                    // "birdeye_url": "",
                    "github_url": "",
                    "collection_type": {
                        "id": 12,
                        "name": "Hybrid DeFi"
                    },
                    "status": 1
                }
            },
            "msg": "success"
        };
        // throw new Error("Network response was not ok");
    }
    return response.json();
};
exports.getCollectionBySlug = getCollectionBySlug;
