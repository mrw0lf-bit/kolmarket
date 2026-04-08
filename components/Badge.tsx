import { BadgeType } from "@/lib/data";
import { cn } from "@/lib/utils";

const badgeConfig: Record<BadgeType, { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-green-400/10 text-green-400 border border-green-400/25",
  },
  hot: {
    label: "Hot",
    className: "bg-orange-400/10 text-orange-400 border border-orange-400/25",
  },
  soon: {
    label: "Soon",
    className: "bg-blue-400/10 text-blue-400 border border-blue-400/25",
  },
};

interface BadgeProps {
  type: BadgeType;
  label?: string;
  className?: string;
}

export function Badge({ type, label, className }: BadgeProps) {
  const config = badgeConfig[type];
  return (
    <span
      className={cn(
        "text-[10px] px-2 py-0.5 rounded-[5px] font-medium",
        config.className,
        className
      )}
    >
      {label ?? config.label}
    </span>
  );
}
