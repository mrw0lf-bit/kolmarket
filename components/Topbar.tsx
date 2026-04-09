"use client";

import type { ThemeMode } from "@/app/page";

interface TopbarProps {
  connected: boolean;
  onConnect: () => void;
  theme: ThemeMode;
  onThemeChange: (theme: ThemeMode) => void;
}

const THEME_OPTIONS: Array<{ id: ThemeMode; label: string; swatch: string }> = [
  { id: "purple-dark", label: "Purple", swatch: "linear-gradient(135deg, #a78bfa, #7c3aed)" },
  { id: "green-dark", label: "Green", swatch: "linear-gradient(135deg, #4ade80, #16a34a)" },
  { id: "orange-dark", label: "Orange", swatch: "linear-gradient(135deg, #fb923c, #ea580c)" },
];

export function Topbar({ connected, onConnect, theme, onThemeChange }: TopbarProps) {
  return (
    <header className="topbar-shell sticky top-0 z-50 grid grid-cols-[1fr_auto_1fr] items-center border-b border-white/[0.07] px-5 py-3.5 md:px-6">
      <div className="justify-self-start text-[18px] font-semibold tracking-tight">
        KOL<span className="accent-text">market</span>
      </div>

      <div className="justify-self-center">
        <div className="flex items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.18)]">
          {THEME_OPTIONS.map((option) => {
            const isActive = option.id === theme;

            return (
              <button
                key={option.id}
                onClick={() => onThemeChange(option.id)}
                className={`theme-toggle-button rounded-lg px-2 py-1.5 text-[11px] font-medium transition-all duration-200 sm:px-2.5 sm:text-[12px] ${isActive ? "theme-toggle-button-active" : ""}`}
                title={`${option.label} dark mode`}
              >
                <span className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundImage: option.swatch }}
                  />
                  <span className="hidden sm:inline">{option.label}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="justify-self-end">
        <button
          onClick={onConnect}
          className="accent-button rounded-lg border px-4 py-1.5 text-[13px] font-medium transition-all duration-200 active:scale-95"
        >
          {connected ? "7xK9...mNp2" : "Connect wallet"}
        </button>
      </div>
    </header>
  );
}
