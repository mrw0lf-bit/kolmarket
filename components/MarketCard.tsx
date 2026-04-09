"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Market, Bet } from "@/lib/data";
import { Avatar } from "./Avatar";
import { Badge } from "./Badge";
import { cn } from "@/lib/utils";

interface MarketCardProps {
  market: Market;
  onBet: (bet: Omit<Bet, "id">) => void;
  style?: React.CSSProperties;
}

export function MarketCard({ market, onBet, style }: MarketCardProps) {
  const [time, setTime] = useState<[number, number] | null>(
    market.initialTime ? [...market.initialTime] : null
  );
  const [flashSide, setFlashSide] = useState<"YES" | "NO" | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!market.initialTime) return;
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        if (!prev) return prev;
        let [m, s] = prev;
        s--;
        if (s < 0) { s = 59; m--; }
        if (m < 0) { m = 0; s = 0; }
        return [m, s];
      });
    }, 1000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [market.initialTime]);

  const formatTime = (t: [number, number]) =>
    `${t[0]}:${t[1] < 10 ? "0" : ""}${t[1]}`;

  const handleBet = useCallback((side: "YES" | "NO") => {
    const pct = side === "YES" ? `${market.yesPct}%` : `${market.noPct}%`;
    const sol = (Math.random() * 4 + 0.5).toFixed(2);
    setFlashSide(side);
    setTimeout(() => setFlashSide(null), 450);
    onBet({ kol: market.kolName, question: market.question, side, pct, sol });
  }, [market, onBet]);

  return (
    <div
      className={cn(
        "rounded-xl p-3.5 cursor-pointer transition-all duration-200 animate-fade-up",
        "border bg-[#13131f]",
        market.isHot
          ? "market-card-hot border-orange-400/30"
          : "market-card-default border-white/[0.07]"
      )}
      style={style}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-2">
          <Avatar initials={market.kolInitials} color={market.kolColor} size="sm" />
          <div>
            <div className="text-[12px] font-medium text-white/85 leading-tight">{market.kolName}</div>
            <div className="text-[10px] text-white/30">{market.kolHandle}</div>
          </div>
        </div>
        <Badge type={market.badge} />
      </div>

      {/* Question */}
      <p className="text-[13px] text-white/80 mb-3 leading-snug">{market.question}</p>

      {/* Bet buttons */}
      <div className="flex gap-1.5 mb-2.5">
        <button
          onClick={() => handleBet("YES")}
          className={cn(
            "flex-1 py-2 rounded-lg text-[12px] font-medium border transition-all duration-150",
            "bg-green-400/[0.08] text-green-400 border-green-400/20 hover:bg-green-400/[0.18] active:scale-95",
            flashSide === "YES" && "bet-flash ring-1 ring-green-400/60"
          )}
        >
          YES {market.yesPct}%
        </button>
        <button
          onClick={() => handleBet("NO")}
          className={cn(
            "flex-1 py-2 rounded-lg text-[12px] font-medium border transition-all duration-150",
            "bg-red-400/[0.08] text-red-400 border-red-400/20 hover:bg-red-400/[0.18] active:scale-95",
            flashSide === "NO" && "bet-flash ring-1 ring-red-400/60"
          )}
        >
          NO {market.noPct}%
        </button>
      </div>

      {/* Probability bar */}
      <div className="h-[3px] bg-white/[0.05] rounded-full mb-2 overflow-hidden">
        <div
          className="accent-gradient h-full rounded-full transition-all duration-700"
          style={{ width: `${market.yesPct}%` }}
        />
      </div>

      {/* Footer */}
      <div className="flex justify-between text-[11px] text-white/25">
        <span>{market.pool} pool</span>
        {market.startsIn ? (
          <span className="text-orange-400/80 font-medium">{market.startsIn}</span>
        ) : time ? (
          <span className="text-orange-400/80 font-medium tabular-nums">{formatTime(time)}</span>
        ) : null}
      </div>
    </div>
  );
}
