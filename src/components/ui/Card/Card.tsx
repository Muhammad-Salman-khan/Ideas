import type { Data } from "@/Type";
import { MessageSquare } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "../../badge";
import Menu from "../Menu/Menu";
import { Share } from "../ShareDialog/Share";
import { Card } from "@/components/card";
import { AspectRatio } from "@/components/aspect-ratio";
import LikeButton from "../VoteButton/LikeButton";

const CardIdeas = ({ Data }: { Data: Data }) => {
  const { documentId: id, title, summary, createdAt, likesCount, tags } = Data;
  const uploadedAt = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(createdAt?._seconds * 1000));
  return (
    <>
      <Card
        key={id}
        className="max-w-4xl w-full m-3 card border rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700"
      >
        <div className="p-4 pb-2">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src="https://picsum.photos/id/64/64/64"
                  alt="Alex Innovator"
                  className="w-10 h-10 rounded-full border-2 border-slate-700 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h1 className="text-foreground font-semibold text-base">
                    Alex Innovator
                  </h1>
                  <span className="text-foreground text-xs font-medium">
                    {uploadedAt}
                  </span>
                </div>
                <div className="text-blue-500 font-bold text-[10px] tracking-wider uppercase mt-0.5">
                  t #ID-1024
                </div>
              </div>
            </div>
            <Menu id={id} />
          </div>

          <Link
            to="/ideas/$ideaid"
            params={{ ideaid: id }}
            className="mt-2 space-y-3"
          >
            <h2 className="text-foreground text-2xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-foreground text-sm leading-relaxed font-medium">
              {summary}
            </p>
          </Link>
        </div>

        <Link to={`/ideas/$ideaid`} params={{ ideaid: id }}>
          <div className="px-2 relative">
            {/* <div className="relative  overflow-hidden rounded-md border border-slate-800/50">
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
                <img
                  src="https://picsum.photos/seed/picsum/1000"
                  alt="Urban Farming Concept"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <div className="absolute bottom-3 mt-2 right-3">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-slate-100 tracking-wide border border-white/10 uppercase">
                  {tags?.[0]}
                </div>
              </div>
            </div> */}
          </div>

          {/* Tags */}
          <div className="p-4 mt-2 py-2 flex flex-wrap gap-2">
            {tags?.map((item, i) => (
              <div key={i}>
                <Badge variant="primary" appearance="default">
                  <span className="text-primary-foreground">{item}</span>
                </Badge>
              </div>
            ))}
          </div>
        </Link>
        <div className="px-3">
          <div className="h-px border mb-2" />
          <div className="flex items-center justify-between">
            {/* butt */}
            <LikeButton
              id={id}
              count={likesCount}
              // onUpvote={() => {}} // No-op for static version
              // onDownvote={() => {}} // No-op for static version
            />
            <div className="flex items-center space-x-1 sm:space-x-4">
              <Link to={`/ideas/$ideaid`} params={{ ideaid: id }}>
                <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-slate-800/50">
                  <MessageSquare size={18} />
                  <span className="text-sm font-semibold">45 Critiques</span>
                </button>
              </Link>
              <Share id={id} />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardIdeas;
