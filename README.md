# KOLmarket — Next.js Frontend

Prediction market platform for crypto KOLs on Solana.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## Build for production

```bash
npm run build
npm start
```

## Project Structure

```
kolmarket/
├── app/
│   ├── layout.tsx        # Root layout, metadata, viewport
│   ├── page.tsx          # Main page (tab orchestration, state)
│   └── globals.css       # Tailwind base + custom animations
├── components/
│   ├── Avatar.tsx         # Colored KOL avatar
│   ├── Badge.tsx          # Live / Hot / Soon badge
│   ├── BottomNav.tsx      # Sticky bottom navigation
│   ├── LiveBanner.tsx     # Live markets ticker
│   ├── MarketCard.tsx     # Prediction card with countdown timer
│   ├── Tabs.tsx           # Top tab bar
│   ├── Topbar.tsx         # Header with wallet button
│   └── tabs/
│       ├── MarketsTab.tsx    # Markets feed
│       ├── KolsTab.tsx       # KOL profiles
│       ├── MyBetsTab.tsx     # User's placed bets
│       └── LeaderboardTab.tsx # Weekly leaderboard
├── lib/
│   ├── data.ts            # Types + all mock data
│   └── utils.ts           # cn() classname helper
├── package.json
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── next.config.mjs
```

## Notes
- All data is mocked in `lib/data.ts` — ready to wire up API/RPC calls
- Bets are tracked in local React state — ready for wallet + Solana integration
- Timers run client-side per MarketCard
- Mobile-first, max-width 480px centered layout
# kolmarket
