export type AvatarColor = "purple" | "green" | "orange" | "blue" | "pink";
export type BadgeType = "live" | "hot" | "soon";

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
  initialTime?: [number, number]; // [min, sec]
  startsIn?: string;
  isHot?: boolean;
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
    id: "m1",
    kolInitials: "Reljoo",
    kolColor: "purple",
    kolName: "Reljoo",
    kolHandle: "@reljoo",
    badge: "hot",
    question: "Will Reljoo make 100 SOL today?",
    yesPct: 64,
    noPct: 36,
    pool: "182 SOL",
    timerId: "t1",
    initialTime: [14, 32],
    isHot: true,
  },
  {
    id: "m2",
    kolInitials: "SB",
    kolColor: "green",
    kolName: "FlippingProfit",
    kolHandle: "@flippingprofit",
    badge: "live",
    question: "Will FlippingProfit's next post hit 100 likes?",
    yesPct: 71,
    noPct: 29,
    pool: "96 SOL",
    timerId: "t2",
    initialTime: [8, 17],
  },
  {
    id: "m3",
    kolInitials: "CK",
    kolColor: "orange",
    kolName: "Orangie",
    kolHandle: "@orangie",
    badge: "live",
    question: "Will Orangie post 3+ times today?",
    yesPct: 45,
    noPct: 55,
    pool: "54 SOL",
    timerId: "t3",
    initialTime: [22, 5],
  },
  {
    id: "m4",
    kolInitials: "DG",
    kolColor: "blue",
    kolName: "Euris",
    kolHandle: "@Euris",
    badge: "soon",
    question: "Will Euris's call 10x in 24h?",
    yesPct: 22,
    noPct: 78,
    pool: "210 SOL",
    startsIn: "Starts in 5m",
  },
  {
    id: "m5",
    kolInitials: "NF",
    kolColor: "pink",
    kolName: "NFTqueen",
    kolHandle: "@nftqueen",
    badge: "hot",
    question: "Will NFTqueen gain 500 followers today?",
    yesPct: 58,
    noPct: 42,
    pool: "77 SOL",
    timerId: "t5",
    initialTime: [31, 44],
    isHot: true,
  },
  {
    id: "m6",
    kolInitials: "SW",
    kolColor: "purple",
    kolName: "SolWhale",
    kolHandle: "@solwhale",
    badge: "live",
    question: "Will SolWhale's tweet get 500 views?",
    yesPct: 83,
    noPct: 17,
    pool: "130 SOL",
    timerId: "t6",
    initialTime: [3, 58],
  },
    {
    id: "m6",
    kolInitials: "SW",
    kolColor: "purple",
    kolName: "SolWhale",
    kolHandle: "@solwhale",
    badge: "live",
    question: "Will SolWhale's tweet get 500 views?",
    yesPct: 83,
    noPct: 17,
    pool: "130 SOL",
    timerId: "t6",
    initialTime: [3, 58],
  },
    {
    id: "m6",
    kolInitials: "SW",
    kolColor: "purple",
    kolName: "SolWhale",
    kolHandle: "@solwhale",
    badge: "live",
    question: "Will SolWhale's tweet get 500 views?",
    yesPct: 83,
    noPct: 17,
    pool: "130 SOL",
    timerId: "t6",
    initialTime: [3, 58],
  },
];

export const KOLS: KOL[] = [
  {
    initials: "AJ",
    color: "purple",
    name: "AlphaJeet",
    handle: "@alphajeet",
    followers: "48.2k",
    markets: 4,
    badge: "live",
    volume: "182 SOL",
    accuracy: "68%",
    bettors: 142,
  },
  {
    initials: "DG",
    color: "blue",
    name: "DegenGuru",
    handle: "@degenguru",
    followers: "92.1k",
    markets: 2,
    badge: "hot",
    volume: "210 SOL",
    accuracy: "54%",
    bettors: 89,
  },
  {
    initials: "CK",
    color: "orange",
    name: "CryptoKing",
    handle: "@cryptoking",
    followers: "31.4k",
    markets: 3,
    badge: "live",
    volume: "98 SOL",
    accuracy: "71%",
    bettors: 63,
  },
  {
    initials: "NF",
    color: "pink",
    name: "NFTking",
    handle: "@nftking",
    followers: "18.9k",
    markets: 2,
    badge: "hot",
    volume: "77 SOL",
    accuracy: "61%",
    bettors: 44,
  },
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

export const FILTER_CHIPS = ["All", "Crypto", "X posts", "SOL gains", "Livestream", "Followers"];
