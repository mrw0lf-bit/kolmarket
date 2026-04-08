"use client";

import { useState, useCallback } from "react";
import { Topbar } from "@/components/Topbar";
import { Tabs } from "@/components/Tabs";
import { LiveBanner } from "@/components/LiveBanner";
import { BottomNav } from "@/components/BottomNav";
import { MarketsTab } from "@/components/tabs/MarketsTab";
import { KolsTab } from "@/components/tabs/KolsTab";
import { MyBetsTab } from "@/components/tabs/MyBetsTab";
import { LeaderboardTab } from "@/components/tabs/LeaderboardTab";
import { Bet } from "@/lib/data";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [connected, setConnected] = useState(false);
  const [bets, setBets] = useState<Bet[]>([]);

  const handleBet = useCallback((bet: Omit<Bet, "id">) => {
    setBets((prev) => [{ ...bet, id: `${Date.now()}-${Math.random()}` }, ...prev]);
  }, []);

  const handleTabChange = useCallback((i: number) => {
    setActiveTab(i);
  }, []);

  return (
    <>
      <Topbar connected={connected} onConnect={() => setConnected((v) => !v)} />
   
      <LiveBanner />

      <main className="flex-1 pb-20 sm:pb-24">
        {activeTab === 0 && (
          <div className="tab-content">
            <MarketsTab onBet={handleBet} />
          </div>
        )}
        {activeTab === 1 && (
          <div className="tab-content">
            <KolsTab />
          </div>
        )}
        {activeTab === 2 && (
          <div className="tab-content">
            <MyBetsTab bets={bets} />
          </div>
        )}
        {activeTab === 3 && (
          <div className="tab-content">
            <LeaderboardTab />
          </div>
        )}
      </main>

      <BottomNav active={activeTab} onChange={handleTabChange} />
    </>
  );
}
