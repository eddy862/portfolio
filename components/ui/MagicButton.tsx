import React from "react";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  handleClick?: () => void;
  className?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  className,
}: Props) => {
  return (
    <button
      className="relative inline-flex w-full h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          className
        )}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
