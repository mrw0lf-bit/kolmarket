"use client";

import { useState } from "react";
import { MARKETS, FILTER_CHIPS, Bet } from "@/lib/data";
import { MarketCard } from "@/components/MarketCard";
import { cn } from "@/lib/utils";

interface MarketsTabProps {
  onBet: (bet: Omit<Bet, "id">) => void;
}

export function MarketsTab({ onBet }: MarketsTabProps) {
  const [activeChip, setActiveChip] = useState(0);

  return (
    <div className="shell-content px-4 pb-3 pt-4 sm:px-6 lg:px-8">
      {/* Filter Chips */}
      <div className="chips-scroll mb-3.5">
        {FILTER_CHIPS.map((chip, i) => (
          <button
            key={chip}
            onClick={() => setActiveChip(i)}
            className={cn(
              "px-3 py-1 rounded-full text-[12px] whitespace-nowrap border transition-all duration-150",
              activeChip === i
                ? "bg-violet-400/15 text-violet-400 border-violet-400/35"
                : "text-white/50 border-white/10 hover:border-white/20"
            )}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="mb-6 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:gap-3">
        {[
          { val: "24", lbl: "Live markets" },
          { val: "1.8k", lbl: "SOL volume" },
          { val: "342", lbl: "Active bettors" },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="bg-[#13131f] border border-white/[0.06] rounded-xl p-3 text-center sm:p-3.5">
            <div className="text-base font-medium text-white sm:text-lg">{val}</div>
            <div className="mt-0.5 text-[10px] text-white/30 sm:text-[11px]">{lbl}</div>
          </div>
        ))}
      </div>

      {/* Hot Right Now */}
      <div className="mb-3 text-[11px] font-medium text-white/30 uppercase tracking-widest">
        Hot right now
      </div>
      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {MARKETS.map((market, i) => (
          <MarketCard
            key={market.id}
            market={market}
            onBet={onBet}
            style={{ animationDelay: `${i * 60}ms` }}
          />
        ))}
      </div>

      {/* Trending KOLs */}
      <div className="mb-3 text-[11px] font-medium text-white/30 uppercase tracking-widest">
        Trending KOLs
      </div>
      <div className="mb-4 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
        {[
          { rank: 1, initials: "AJ", color: "purple", name: "AlphaJeet", markets: 4, vol: "182 SOL" },
          { rank: 2, initials: "DG", color: "blue", name: "DegenGuru", markets: 2, vol: "210 SOL" },
          { rank: 3, initials: "CK", color: "orange", name: "CryptoKing", markets: 3, vol: "98 SOL" },
        ].map((kol) => (
          <div
            key={kol.rank}
            className="flex items-center justify-between px-3 py-2.5 bg-[#13131f] rounded-lg border border-white/[0.06] hover:border-white/[0.14] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] text-white/20 w-4">{kol.rank}</span>
              <div
                className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-medium",
                  kol.color === "purple" && "bg-violet-400/20 text-violet-400",
                  kol.color === "blue" && "bg-blue-400/15 text-blue-400",
                  kol.color === "orange" && "bg-orange-400/15 text-orange-400"
                )}
              >
                {kol.initials}
              </div>
              <div>
                <div className="text-[13px] text-white/80">{kol.name}</div>
                <div className="text-[11px] text-white/30">{kol.markets} active markets</div>
              </div>
            </div>
            <span className="text-[12px] text-violet-400 font-medium">{kol.vol}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
