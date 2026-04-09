"use client";

import { useState, useMemo } from "react";
import { MARKETS, FILTER_CHIPS, Bet, MarketCategory } from "@/lib/data";
import { MarketCard } from "@/components/MarketCard";
import { cn } from "@/lib/utils";

interface MarketsTabProps {
  onBet: (bet: Omit<Bet, "id">) => void;
}

export function MarketsTab({ onBet }: MarketsTabProps) {
  const [activeChip, setActiveChip] = useState<MarketCategory>("All");

  const filteredMarkets = useMemo(() => {
    if (activeChip === "All") return MARKETS;
    return MARKETS.filter((m) => m.category === activeChip);
  }, [activeChip]);

  return (
    <div className="p-4 md:p-6 pb-2">
      {/* Filter Chips */}
      <div className="chips-scroll mb-4">
        {FILTER_CHIPS.map((chip) => (
          <button
            key={chip}
            onClick={() => setActiveChip(chip)}
            className={cn(
              "px-3.5 py-1.5 rounded-full text-[12px] whitespace-nowrap border transition-all duration-150 active:scale-95",
              activeChip === chip
                ? "accent-bg-soft accent-text accent-border-soft"
                : "text-white/50 border-white/10 hover:border-white/20 hover:text-white/70"
            )}
          >
            {chip}
          </button>
        ))}
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-3 gap-2 mb-5">
        {[
          { val: "24", lbl: "Live markets" },
          { val: "1.8k", lbl: "SOL volume" },
          { val: "342", lbl: "Active bettors" },
        ].map(({ val, lbl }) => (
          <div key={lbl} className="bg-[#13131f] border border-white/[0.06] rounded-xl p-3 text-center">
            <div className="text-base font-medium text-white">{val}</div>
            <div className="text-[10px] text-white/30 mt-0.5">{lbl}</div>
          </div>
        ))}
      </div>

      {/* Section label */}
      <div className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-3">
        {activeChip === "All" ? "Hot right now" : activeChip}
        <span className="accent-text ml-2 normal-case tracking-normal font-normal opacity-60">
          {filteredMarkets.length} markets
        </span>
      </div>

      {/* Market Grid — responsive: 1 col mobile, 2 col tablet, 3-4 col desktop */}
      {filteredMarkets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="text-3xl mb-3 opacity-20">◎</div>
          <div className="text-[14px] text-white/25">No markets in this category yet.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-6">
          {filteredMarkets.map((market, i) => (
            <MarketCard
              key={market.id}
              market={market}
              onBet={onBet}
              style={{ animationDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      )}

      {/* Trending KOLs — only show on All */}
      {activeChip === "All" && (
        <>
          <div className="text-[11px] font-medium text-white/30 uppercase tracking-widest mb-3">
            Trending KOLs
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
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
                      kol.color === "purple" && "accent-bg-soft accent-text",
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
                <span className="accent-text text-[12px] font-medium">{kol.vol}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
