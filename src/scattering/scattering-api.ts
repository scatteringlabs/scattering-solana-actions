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
    throw new Error("Network response was not ok");
  }

  return response.json();
};

