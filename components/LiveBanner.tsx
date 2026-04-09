export function LiveBanner() {
  return (
    <div className="accent-banner border-b border-white/[0.05]">
      <div className="shell-content flex items-center gap-2 px-4 py-2 text-[12px] text-white/50 sm:px-6 lg:px-8">
        <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0 live-dot" />
        <span className="whitespace-normal sm:whitespace-nowrap">
          24 markets live now · 1,842 SOL total volume · Resolves via X API + Solana
        </span>
      </div>
    </div>
  );
}
