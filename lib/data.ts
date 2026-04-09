export type AvatarColor = "purple" | "green" | "orange" | "blue" | "pink";
export type BadgeType = "live" | "hot" | "soon";
export type MarketCategory = "All" | "Crypto" | "X posts" | "SOL gains" | "Livestream" | "Followers";

export interface Market {
  id: string;
  kolInitials: string;
  kolColor: AvatarColor;
  kolName: string;
  kolHandle: string;
  badge: BadgeType;
  question: string;
  yesPct: number;
  noPct: number;
  pool: string;
  timerId?: string;
  initialTime?: [number, number];
  startsIn?: string;
  isHot?: boolean;
  category: MarketCategory;
}

export interface KOL {
  initials: string;
  color: AvatarColor;
  name: string;
  handle: string;
  followers: string;
  markets: number;
  badge: BadgeType;
  volume: string;
  accuracy: string;
  bettors: number;
}

export interface TrendingKOL {
  rank: number;
  initials: string;
  color: AvatarColor;
  name: string;
  activeMarkets: number;
  volume: string;
}

export interface LeaderEntry {
  rank: number;
  address: string;
  gain: string;
}

export interface Bet {
  id: string;
  kol: string;
  question: string;
  side: "YES" | "NO";
  pct: string;
  sol: string;
}

export const MARKETS: Market[] = [
  {
    id: "m1", kolInitials: "AJ", kolColor: "purple", kolName: "Reljoo", kolHandle: "@reljoo",
    badge: "hot", question: "Will Reljoo make 100 SOL today?",
    yesPct: 64, noPct: 36, pool: "182 SOL", timerId: "t1", initialTime: [14, 32], isHot: true, category: "SOL gains",
  },
  {
    id: "m2", kolInitials: "SB", kolColor: "green", kolName: "Euris", kolHandle: "@Euris_x",
    badge: "live", question: "Will Euris's next post hit 100 likes?",
    yesPct: 71, noPct: 29, pool: "96 SOL", timerId: "t2", initialTime: [8, 17], category: "X posts",
  },
  {
    id: "m3", kolInitials: "CK", kolColor: "orange", kolName: "OgAnt", kolHandle: "@OgAnt",
    badge: "live", question: "Will OgAnt post 3+ times today?",
    yesPct: 45, noPct: 55, pool: "54 SOL", timerId: "t3", initialTime: [22, 5], category: "X posts",
  },
  {
    id: "m4", kolInitials: "DG", kolColor: "blue", kolName: "Gake", kolHandle: "@Gake",
    badge: "soon", question: "Will Gake's call 10x in 24h?",
    yesPct: 22, noPct: 78, pool: "210 SOL", startsIn: "Starts in 5m", category: "Crypto",
  },
  {
    id: "m5", kolInitials: "NF", kolColor: "pink", kolName: "Profit", kolHandle: "@Flipping Profit",
    badge: "hot", question: "Will Profit gain 500 followers today?",
    yesPct: 58, noPct: 42, pool: "77 SOL", timerId: "t5", initialTime: [31, 44], isHot: true, category: "Followers",
  },
  {
    id: "m6", kolInitials: "SW", kolColor: "purple", kolName: "Socharo", kolHandle: "@socharo",
    badge: "live", question: "Will Socharo's tweet get 500 views?",
    yesPct: 83, noPct: 17, pool: "130 SOL", timerId: "t6", initialTime: [3, 58], category: "X posts",
  },
  {
    id: "m7", kolInitials: "AJ", kolColor: "purple", kolName: "AlphaJeet", kolHandle: "@alphajeet",
    badge: "live", question: "Will AlphaJeet go live on X today?",
    yesPct: 55, noPct: 45, pool: "44 SOL", timerId: "t7", initialTime: [18, 0], category: "Livestream",
  },
  {
    id: "m8", kolInitials: "DG", kolColor: "blue", kolName: "DegenGuru", kolHandle: "@degenguru",
    badge: "hot", question: "Will DegenGuru's SOL bag flip 2x this week?",
    yesPct: 39, noPct: 61, pool: "310 SOL", timerId: "t8", initialTime: [45, 10], isHot: true, category: "SOL gains",
  },
];

export const KOLS: KOL[] = [
  { initials: "AJ", color: "purple", name: "AlphaJeet", handle: "@alphajeet", followers: "48.2k", markets: 4, badge: "live", volume: "182 SOL", accuracy: "68%", bettors: 142 },
  { initials: "DG", color: "blue", name: "DegenGuru", handle: "@degenguru", followers: "92.1k", markets: 2, badge: "hot", volume: "210 SOL", accuracy: "54%", bettors: 89 },
  { initials: "CK", color: "orange", name: "CryptoKing", handle: "@cryptoking", followers: "31.4k", markets: 3, badge: "live", volume: "98 SOL", accuracy: "71%", bettors: 63 },
  { initials: "NF", color: "pink", name: "NFTqueen", handle: "@nftqueen", followers: "18.9k", markets: 2, badge: "hot", volume: "77 SOL", accuracy: "61%", bettors: 44 },
];

export const TRENDING_KOLS: TrendingKOL[] = [
  { rank: 1, initials: "AJ", color: "purple", name: "AlphaJeet", activeMarkets: 4, volume: "182 SOL" },
  { rank: 2, initials: "DG", color: "blue", name: "DegenGuru", activeMarkets: 2, volume: "210 SOL" },
  { rank: 3, initials: "CK", color: "orange", name: "CryptoKing", activeMarkets: 3, volume: "98 SOL" },
];

export const LEADERBOARD: LeaderEntry[] = [
  { rank: 1, address: "solpunk.sol", gain: "+48.3 SOL" },
  { rank: 2, address: "degenape.sol", gain: "+31.7 SOL" },
  { rank: 3, address: "moon.sol", gain: "+19.2 SOL" },
  { rank: 4, address: "whalewatcher.sol", gain: "+14.8 SOL" },
  { rank: 5, address: "alphahunter.sol", gain: "+11.2 SOL" },
];

export const FILTER_CHIPS: MarketCategory[] = [
  "All", "Crypto", "X posts", "SOL gains", "Livestream", "Followers",
];