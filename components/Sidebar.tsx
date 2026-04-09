"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  {
    label: "Markets",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
  },
  {
    label: "KOLs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M2 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <path d="M19 8v6M22 11h-6" />
      </svg>
    ),
  },
  {
    label: "My bets",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
  {
    label: "Leaderboard",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
      </svg>
    ),
  },
];

const CollapseIcon = ({ collapsed }: { collapsed: boolean }) => (
  <svg
    width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={cn("transition-transform duration-300", collapsed ? "rotate-180" : "")}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

interface SidebarProps {
  active: number;
  onChange: (i: number) => void;
  betsCount: number;
}

export function Sidebar({ active, onChange, betsCount }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "sidebar-shell hidden md:flex flex-col shrink-0 border-r border-white/[0.06]",
        "h-full self-stretch",
        "transition-all duration-300 ease-in-out",
        collapsed ? "w-[60px]" : "w-[210px]"
      )}
    >
      {/* Collapse toggle */}
      <div className={cn("flex items-center px-3 py-3 mb-1", collapsed ? "justify-center" : "justify-end")}>
        <button
          onClick={() => setCollapsed((v) => !v)}
          title={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="w-7 h-7 rounded-lg flex items-center justify-center text-white/25 hover:text-white/60 hover:bg-white/[0.05] transition-all duration-150"
        >
          <CollapseIcon collapsed={collapsed} />
        </button>
      </div>

      {/* Nav items */}
      <nav className="flex flex-col gap-0.5 px-2 flex-1">
        {NAV_ITEMS.map((item, i) => {
          const isActive = active === i;
          const showBadge = i === 2 && betsCount > 0;

          return (
            <button
              key={item.label}
              onClick={() => onChange(i)}
              title={collapsed ? item.label : undefined}
              className={cn(
                "group relative flex items-center rounded-xl text-[13px] font-medium transition-all duration-200",
                collapsed ? "justify-center px-0 py-2.5 mx-1" : "gap-3 px-3 py-2.5",
                isActive
                  ? "accent-bg-soft accent-text"
                  : "text-white/40 hover:text-white/75 hover:bg-white/[0.04]"
              )}
            >
              {/* Active bar */}
              {isActive && (
                <span className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-r-full accent-dot" />
              )}

              {/* Icon + optional badge dot when collapsed */}
              <span className={cn("relative flex-shrink-0 transition-colors duration-200", isActive ? "accent-text" : "text-white/35 group-hover:text-white/60")}>
                {item.icon}
                {/* Dot badge when collapsed */}
                {collapsed && showBadge && (
                  <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full accent-dot" />
                )}
              </span>

              {/* Label — hidden when collapsed */}
              {!collapsed && (
                <span className="flex-1 truncate transition-opacity duration-200">{item.label}</span>
              )}

              {/* Count badge when expanded */}
              {!collapsed && showBadge && (
                <span className="accent-bg-soft accent-text ml-auto min-w-[18px] rounded-full px-1.5 py-0.5 text-center text-[10px] font-semibold leading-none">
                  {betsCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Bottom status — only when expanded */}
      <div
        className={cn(
          "mx-2 mb-3 rounded-xl bg-white/[0.03] border border-white/[0.05] transition-all duration-200 overflow-hidden",
          collapsed ? "px-0 py-2.5 flex items-center justify-center" : "px-3 py-3"
        )}
      >
        {collapsed ? (
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot" />
        ) : (
          <>
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 live-dot flex-shrink-0" />
              <span className="text-[11px] text-white/30">Network live</span>
            </div>
            <div className="text-[11px] text-white/20 leading-relaxed">
              Resolves via <span className="text-white/40">X API + Solana</span>
            </div>
          </>
        )}
      </div>
    </aside>
  );
}
