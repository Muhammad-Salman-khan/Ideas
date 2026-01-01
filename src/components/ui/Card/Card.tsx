import { useState } from "react";
import type { Data } from "@/Type";
import { MoreHorizontal, MessageSquare, Share2 } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Badge } from "../../badge";
import VoteButton from "../VoteButton/VoteButton";
import NavUser from "../User/NavUser";
import { MenubarDemo } from "../Menu/Menu";

const Card = ({ Data }: { Data: Data }) => {
  const { id, title, summary, createdAt, tags } = Data;

  const [Open, setOpen] = useState<boolean>(false);
  return (
    <>
      <div
        key={id}
        className="max-w-4xl w-full m-3 card border rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-slate-700"
      >
        <div className="p-6 pb-4">
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
                  <h3 className="text-foreground font-semibold text-base">
                    Alex Innovator
                  </h3>
                  <span className="text-foreground text-xs font-medium">
                    {new Intl.DateTimeFormat("en-US", {
                      weekday: "short",
                      day: "2-digit",
                      month: "short",
                      year: "2-digit",
                      hour: "numeric",
                    }).format(new Date(createdAt))}
                  </span>
                </div>
                <div className="text-blue-500 font-bold text-[10px] tracking-wider uppercase mt-0.5">
                  #ID-1024
                </div>
              </div>
            </div>
            <MenubarDemo id={id} />
          </div>

          <div className="mt-5 space-y-3">
            <h2 className="text-foreground text-2xl font-bold leading-tight">
              {title}
            </h2>
            <p className="text-foreground text-sm leading-relaxed font-medium">
              {summary}
            </p>
          </div>
        </div>

        <Link to={`/ideas/$ideaid`} params={{ ideaid: id }}>
          <div className="px-6 relative">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800/50">
              <img
                src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=1000"
                alt="Urban Farming Concept"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3">
                <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-slate-100 tracking-wide border border-white/10 uppercase">
                  {tags[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="px-6 py-4 flex flex-wrap gap-2">
            {tags.map((item, i) => (
              <div key={i}>
                <Badge variant="info" appearance="outline">
                  <span className="text-foreground">{item}</span>
                </Badge>
              </div>
            ))}
          </div>
        </Link>
        <div className="px-6 pb-6 pt-2">
          <div className="h-px bg-slate-800 mb-6" />
          <div className="flex items-center justify-between">
            {/* butt */}
            <VoteButton
              id={id}
              direction={"up"}
              count="1.2k"
              onUpvote={() => console.log("up")}
              onDownvote={() => console.log("down")}
            />
            <Link to={`/ideas/$ideaid`} params={{ ideaid: id }}>
              <div className="flex items-center space-x-1 sm:space-x-4">
                <button className="flex items-center space-x-2 text-slate-400 hover:text-white transition-colors px-3 py-2 rounded-xl hover:bg-slate-800/50">
                  <MessageSquare size={18} />
                  <span className="text-sm font-semibold">45 Critiques</span>
                </button>
                <button className="p-2 text-slate-400 hover:text-white transition-all hover:bg-slate-800/50 rounded-xl">
                  <Share2 size={18} />
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
