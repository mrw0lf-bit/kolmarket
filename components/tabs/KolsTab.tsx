import { KOLS } from "@/lib/data";
import { Avatar } from "@/components/Avatar";
import { Badge } from "@/components/Badge";

export function KolsTab() {
  return (
    <div className="shell-content px-4 pb-3 pt-4 sm:px-6 lg:px-8">
      <div className="mb-3 text-[11px] font-medium uppercase tracking-widest text-white/30">
        Top KOLs by volume
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {KOLS.map((kol) => (
          <div
            key={kol.name}
            className="accent-card-hover cursor-pointer rounded-xl border border-white/[0.07] bg-[#13131f] p-3.5 transition-colors"
          >
            <div className="mb-3 flex items-center gap-3">
              <Avatar initials={kol.initials} color={kol.color} size="lg" />
              <div className="min-w-0 flex-1">
                <div className="text-[14px] font-medium text-white/85">{kol.name}</div>
                <div className="text-[11px] text-white/30">{kol.handle} | {kol.followers} followers</div>
              </div>
              <Badge type={kol.badge} label={`${kol.markets} markets`} />
            </div>
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <div className="accent-text text-[14px] font-medium">{kol.volume}</div>
                <div className="text-[10px] text-white/30">volume</div>
              </div>
              <div>
                <div className="text-[14px] font-medium text-green-400">{kol.accuracy}</div>
                <div className="text-[10px] text-white/30">accuracy</div>
              </div>
              <div>
                <div className="text-[14px] font-medium text-white">{kol.bettors}</div>
                <div className="text-[10px] text-white/30">bettors</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
