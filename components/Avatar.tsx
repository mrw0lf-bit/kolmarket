import { AvatarColor } from "@/lib/data";
import { cn } from "@/lib/utils";

const colorMap: Record<AvatarColor, string> = {
  purple: "accent-bg-soft accent-text",
  green: "bg-green-400/15 text-green-400",
  orange: "bg-orange-400/15 text-orange-400",
  blue: "bg-blue-400/15 text-blue-400",
  pink: "bg-pink-400/15 text-pink-400",
};

interface AvatarProps {
  initials: string;
  color: AvatarColor;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: "w-7 h-7 text-[11px]",
  md: "w-8 h-8 text-[12px]",
  lg: "w-10 h-10 text-[14px]",
};

export function Avatar({ initials, color, size = "sm", className }: AvatarProps) {
  return (
    <div
      className={cn(
        "rounded-full flex items-center justify-center font-medium flex-shrink-0",
        colorMap[color],
        sizeMap[size],
        className
      )}
    >
      {initials}
    </div>
  );
}
