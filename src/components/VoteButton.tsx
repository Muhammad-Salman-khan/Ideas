import { cn } from "@/lib/utils";
import React from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Button } from "./button";
type VoteControll = {
  id: number | string;
  direction?: "up" | "down" | null;
  className?: string;
  count?: number | string;
  onUpvote?: (e: number | string) => void;
  onDownvote?: (e: number | string) => void;
};
const VoteButton = ({
  id,
  direction = null,
  className,
  count,
  onUpvote,
  onDownvote,
}: VoteControll) => {
  return (
    <div
      className={cn(
        "flex items-center rounded-xl border border-slate-800 dark:bg-slate-950 bg-gray-200 text-foreground backdrop-blur",
        className
      )}
    >
      <Button
        size="icon"
        variant="ghost"
        onClick={() => onUpvote}
        className={cn(
          "rounded-l-xl transition-all",
          direction === "up" &&
            "bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20"
        )}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>

      <span className="min-w-[3rem] select-none px-3 text-center text-sm font-semibold text-foreground">
        {count}
      </span>

      <Button
        size="icon"
        variant="ghost"
        onClick={() => onDownvote}
        className={cn(
          "rounded-r-xl transition-all",
          direction === "down" &&
            "bg-rose-500/10 text-rose-400 hover:bg-rose-500/20"
        )}
      >
        <ArrowDown className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default VoteButton;
