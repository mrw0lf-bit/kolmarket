"use client";

interface TopbarProps {
  connected: boolean;
  onConnect: () => void;
}

export function Topbar({ connected, onConnect }: TopbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0d0d14]/90 backdrop-blur">
      <div className="shell-content flex items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <div className="text-[18px] font-medium tracking-tight sm:text-[20px]">
          KOL<span className="text-violet-400">market</span>
        </div>
        <button
          onClick={onConnect}
          className="bg-violet-400/10 text-violet-400 border border-violet-400/35 rounded-lg px-3 py-1.5 text-[12px] transition-all duration-150 hover:bg-violet-400/20 active:scale-95 sm:px-4 sm:text-[13px]"
        >
          {connected ? "7xK9...mNp2" : "Connect wallet"}
        </button>
      </div>
    </header>
  );
}
