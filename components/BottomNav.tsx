"use client";

import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Markets", icon: "\u25C8" },
  { label: "KOLs", icon: "\u25C9" },
  { label: "My bets", icon: "\u25CE" },
  { label: "Leaders", icon: "\u25C6" },
];

interface BottomNavProps {
  active: number;
  onChange: (index: number) => void;
}

export function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="sticky bottom-0 z-50 border-t border-white/[0.08] bg-[#0d0d14]/95 backdrop-blur">
      <div className="shell-content flex pb-safe">
        {NAV_ITEMS.map((item, i) => (
          <button
            key={item.label}
            onClick={() => onChange(i)}
            className={cn(
              "flex-1 flex flex-col items-center gap-1 py-2.5 transition-all duration-150 sm:py-3",
              active === i ? "" : "opacity-60"
            )}
          >
            <span
              className={cn(
                "text-base transition-colors duration-150",
                active === i ? "text-violet-400" : "text-white/40"
              )}
            >
              {item.icon}
            </span>
            <span
              className={cn(
                "text-[10px] transition-colors duration-150 sm:text-[11px]",
                active === i ? "text-violet-400" : "text-white/30"
              )}
            >
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
}
