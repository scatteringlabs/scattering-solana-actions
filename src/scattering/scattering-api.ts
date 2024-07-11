export const BASE_URL_DEV = "https://api.scattering.io/dev-api/v2";
// import { HttpsProxyAgent } from 'https-proxy-agent';
// const proxyAgent = new HttpsProxyAgent('https://127.0.0.1:7890');
interface CollectionBySlugParams {
  slug?: string;
}
export interface CollectionType {
  id: number;
  name: string;
}
export interface CollectionDetails {
  chain_id: number;
  erc20_address: string;
  erc721_address: string;
  name: string;
  symbol: string;
  description: string;
  price_in_usd: string;
  volume: string;
  price_change: string;
  total_supply: string;
  market_cap: string;
  liquidity: string;
  slug: string;
  has_logo: boolean;
  is_verified: boolean;
  nft_items: string;
  nft_owners: number;
  status: number; // 1 uin pool 2 no pool 3 other pool
  unique_own: string;
  logo_url: string;
  banner_url: string;
  mobile_banner_url: string;
  project_url: string;
  discord_url: string;
  telegram_url: string;
  twitter_username: string;
  collection_type: CollectionType;
  create_time: string;
  medium_url: string;
  facebook_url: string;
  tiktok_url: string;
  reddit_url: string;
  coingecko_url: string;
  okx_url: string;
  opensea_url: string;
  magiceden_url: string;
  cmc_url: string;
  dexscreener_url: string;
  dextools_url: string;
  github_url: string;
  pool_address: string;
  base_asset_symbol: string;
  base_asset_decimals: number;
  quote_asset_symbol: string;
}

export interface CollectionSlugResponse {
  data: { item: CollectionDetails };
}
export const getCollectionBySlug = async ({
  slug,
}: CollectionBySlugParams): Promise<CollectionSlugResponse> => {
  const response = await fetch(`${BASE_URL_DEV}/collection/slug/${slug}`);

  if (!response.ok) {
    // throw new Error("Network response was not ok");
    return {
      "code": 0,
      "data": {
        "item": {
          "chain_id": 10000,
          "erc20_address": "HACK8WdQNJdvBrKExA7tP7WAMaNKYugQ8H7qKSxRQrpy",
          "erc721_address": "HACK8WdQNJdvBrKExA7tP7WAMaNKYugQ8H7qKSxRQrpy",
          "name": "Hakoiri Collection",
          "symbol": "HACK",
          "create_time": 1718765268,
          "description": "The official token of Hakoiri: the ultimate japanese-themed battle royale experience. Wishlist on Steam: https://store.steampowered.com/app/2546570/Hakoiri/",
          "price_in_usd": "0.003781043000138398",
          "volume": "309747.965674568",
          "price_change": "-9.350000",
          "total_supply": "888791937.429207402",
          "market_cap": "3360560.53359615",
          "liquidity": "152653.4545",
          "slug": "hakoiri_collection",
          "is_verified": true,
          "has_logo": true,
          "pool_address": "CWied5KX9DFq2drNuffDeJw3No3XWTxr2UnDMiv7ojYg",
          "base_asset_address": "HACK8WdQNJdvBrKExA7tP7WAMaNKYugQ8H7qKSxRQrpy",
          "base_asset_symbol": "HACK",
          "base_asset_decimals": 9,
          "quote_asset_address": "So11111111111111111111111111111111111111112",
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
          "instagram_url": "",
          "medium_url": "",
          "facebook_url": "",
          "tiktok_url": "",
          "reddit_url": "",
          "warpcast_url": "",
          "magiceden_url": "",
          "okxmarket_url": "",
          "coinmarketcap_url": "",
          "coingecko_url": "",
          "dexscreener_url": "",
          "dextools_url": "",
          "birdeye_url": "",
          "github_url": "",
          "collection_type": {
            "id": 12,
            "name": "Hybrid DeFi"
          },
          "status": 1
        }
      },
      "msg": "success"
    }
  }

  return response.json();
};

