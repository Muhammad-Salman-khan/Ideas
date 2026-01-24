import { Button } from "@/components/button";
import { Toggle } from "@/components/toggle";
import { cn } from "@/lib/utils";
import { BookmarkIcon, Heart } from "lucide-react";

const LikeButton = ({ count = 1 }) => {
  return (
    <Toggle
      className="group hover:bg-transparent bg-transparent"
      aria-label="Toggle heart"
      size="lg"
      variant="default"
    >
      <Heart scale={60} className="group-data-[state=on]:fill-red-700" />
      {count}
    </Toggle>
  );
};

export default LikeButton;
