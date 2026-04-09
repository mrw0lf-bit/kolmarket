"use client";

import { useState, useCallback, useEffect } from "react";
import { Topbar } from "@/components/Topbar";
import { LiveBanner } from "@/components/LiveBanner";
import { Sidebar } from "@/components/Sidebar";
import { MarketsTab } from "@/components/tabs/MarketsTab";
import { KolsTab } from "@/components/tabs/KolsTab";
import { MyBetsTab } from "@/components/tabs/MyBetsTab";
import { LeaderboardTab } from "@/components/tabs/LeaderboardTab";
import { Bet } from "@/lib/data";

export type ThemeMode = "purple-dark" | "green-dark" | "orange-dark";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [connected, setConnected] = useState(false);
  const [bets, setBets] = useState<Bet[]>([]);
  const [theme, setTheme] = useState<ThemeMode>("purple-dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("kolmarket-theme");
    if (savedTheme === "purple-dark" || savedTheme === "green-dark" || savedTheme === "orange-dark") {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("kolmarket-theme", theme);
  }, [theme]);

  const handleBet = useCallback((bet: Omit<Bet, "id">) => {
    setBets((prev) => [{ ...bet, id: `${Date.now()}-${Math.random()}` }, ...prev]);
  }, []);

  const handleTabChange = useCallback((i: number) => setActiveTab(i), []);

  const TABS = [
    <MarketsTab key="markets" onBet={handleBet} />,
    <KolsTab key="kols" />,
    <MyBetsTab key="bets" bets={bets} />,
    <LeaderboardTab key="leaders" />,
  ];

  return (
    <div
      className={`theme-shell ${
        theme === "purple-dark" ? "theme-purple" : theme === "green-dark" ? "theme-green" : "theme-orange"
      } bg-app flex h-screen flex-col overflow-hidden`}
    >
      <Topbar
        connected={connected}
        onConnect={() => setConnected((v) => !v)}
        theme={theme}
        onThemeChange={setTheme}
      />
      <LiveBanner />

      <div className="flex flex-1 min-h-0 overflow-hidden">
        {/* Sidebar — desktop only */}
        <Sidebar active={activeTab} onChange={handleTabChange} betsCount={bets.length} />

        {/* Main content */}
        <main className="flex-1 min-h-0 overflow-y-auto overscroll-contain">
          <div key={activeTab} className="tab-content">
            {TABS[activeTab]}
          </div>
        </main>
      </div>

      {/* Bottom nav — mobile only */}
    
    </div>
  );
}
