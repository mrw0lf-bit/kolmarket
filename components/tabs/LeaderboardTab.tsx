import { LEADERBOARD } from "@/lib/data";

const RANK_BADGES: Record<number, string> = {
  1: "\u{1F947}",
  2: "\u{1F948}",
  3: "\u{1F949}",
};

export function LeaderboardTab() {
  return (
    <div className="shell-content px-4 pb-3 pt-4 sm:px-6 lg:px-8">
      <div className="mb-3 text-[11px] font-medium uppercase tracking-widest text-white/30">
        Top winners this week
      </div>

      <div className="grid gap-3 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] lg:items-start">
        <div className="flex flex-col gap-1.5">
          {LEADERBOARD.map((entry) => (
            <div
              key={entry.rank}
              className="flex cursor-pointer items-center justify-between rounded-xl border border-white/[0.06] bg-[#13131f] px-3.5 py-3 transition-colors hover:border-white/[0.12]"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-8 text-[14px] font-semibold ${
                    entry.rank === 1
                      ? "text-orange-400"
                      : entry.rank === 2
                      ? "text-white/60"
                      : entry.rank === 3
                      ? "text-amber-600"
                      : "text-white/30"
                  }`}
                >
                  {RANK_BADGES[entry.rank] ?? `${entry.rank}th`}
                </span>
                <span className="text-[13px] font-mono text-white/80">{entry.address}</span>
              </div>
              <span className="text-[13px] font-medium text-green-400">{entry.gain}</span>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-white/[0.06] bg-[#13131f] p-4">
          <div className="mb-3 text-[11px] uppercase tracking-widest text-white/30">This week</div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="accent-text text-[16px] font-medium">1,842</div>
              <div className="text-[10px] text-white/30">SOL wagered</div>
            </div>
            <div>
              <div className="text-[16px] font-medium text-white">342</div>
              <div className="text-[10px] text-white/30">total bettors</div>
            </div>
            <div>
              <div className="text-[16px] font-medium text-green-400">68%</div>
              <div className="text-[10px] text-white/30">resolved</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
