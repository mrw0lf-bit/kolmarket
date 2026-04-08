import { Bet } from "@/lib/data";

interface MyBetsTabProps {
  bets: Bet[];
}

export function MyBetsTab({ bets }: MyBetsTabProps) {
  if (!bets.length) {
    return (
      <div className="shell-content flex flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-4 text-4xl opacity-30">{"\u25CE"}</div>
        <div className="text-[14px] text-white/25">No bets yet.</div>
        <div className="mt-1 text-[12px] text-white/15">Go place some!</div>
      </div>
    );
  }

  return (
    <div className="shell-content px-4 pb-3 pt-4 sm:px-6 lg:px-8">
      <div className="mb-3 text-[11px] font-medium uppercase tracking-widest text-white/30">
        Your active bets
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {bets.map((bet) => (
          <div
            key={bet.id}
            className="animate-fade-up rounded-xl border border-white/[0.07] bg-[#13131f] p-3"
          >
            <div className="mb-1 text-[12px] text-white/40">{bet.kol}</div>
            <div className="mb-2.5 text-[13px] leading-snug text-white/80">{bet.question}</div>
            <div className="flex justify-between text-[12px]">
              <span
                className={`font-medium ${bet.side === "YES" ? "text-green-400" : "text-red-400"}`}
              >
                {bet.side} | {bet.pct}
              </span>
              <span className="text-violet-400">{bet.sol} SOL</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
