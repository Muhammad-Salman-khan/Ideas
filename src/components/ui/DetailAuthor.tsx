import { Bookmark, Share2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Button } from "./button";

const DetailAuthor = ({ CreatedAt }: { CreatedAt: string }) => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 py-5 border-y border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-border">
            <Avatar>
              <AvatarFallback>Ac</AvatarFallback>
              <AvatarImage></AvatarImage>
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">author.name</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span>handle</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>
                Posted
                {new Intl.DateTimeFormat("en-US", {
                  weekday: "short",
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                  hour: "numeric",
                }).format(new Date(CreatedAt))}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border text-foreground border-border text-sm font-semibold hover:bg-surface/80 transition-colors">
            <Bookmark className="w-4 h-4" />
            Save
          </button>
          <button className="flex text-foreground items-center gap-2 px-5 py-2.5 rounded-lg bg-surface border border-border text-sm font-semibold hover:bg-surface/80 transition-colors">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailAuthor;
