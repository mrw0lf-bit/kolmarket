"use client";

import { cn } from "@/lib/utils";

const TABS = ["Markets", "KOLs", "My bets", "Leaderboard"];

interface TabsProps {
  active: number;
  onChange: (index: number) => void;
}

export function Tabs({ active, onChange }: TabsProps) {
  return (
    <div className="border-b border-white/[0.06] bg-[#0d0d14]">
      <div className="shell-content flex gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            onClick={() => onChange(i)}
            className={cn(
              "px-3 py-2 text-[13px] rounded-t-lg border-b-2 transition-all duration-150 whitespace-nowrap sm:px-4 sm:text-[14px]",
              active === i
                ? "text-violet-400 border-violet-400"
                : "text-white/45 border-transparent hover:text-white/70"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
