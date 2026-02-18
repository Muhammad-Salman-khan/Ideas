import type { Data } from "@/Type";
import { Button } from "../../button";
import DetailAuthor from "./DetailAuthor";
import DetailCardContent from "./DetailCardContent";
import DetailCardSummary from "./DetailCardSummary";
import { Link } from "@tanstack/react-router";
import VoteButton from "../VoteButton/LikeButton";
import { Share } from "../ShareDialog/Share";
import { GitCommitVerticalIcon } from "lucide-react";
import { AspectRatio } from "@/components/aspect-ratio";
import LikeButton from "../VoteButton/LikeButton";

const DetailCard = ({ data }: { data: Data }) => {
  const {
    documentId: id,
    title,
    summary,
    tags,
    likesCount,
    description,
    createdAt,
  } = data;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).format(new Date(createdAt?._seconds * 1000));

  console.log(formattedDate);
  return (
    <>
      <div
        key={id}
        className="min-h-screen flex flex-col font-sans bg-background text-white selection:bg-primary selection:text-white"
      >
        <div className="flex justify-start align-middle items-center">
          <Link to="/ideas">
            <Button className="text-primary-foreground">Back</Button>
          </Link>
        </div>
        <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
          <DetailAuthor CreatedAt={formattedDate} id={id} />
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight font-extrabold mb-8">
              {title}
            </h1>
          </header>

          <DetailCardSummary summary={summary} />

          <div className="relative rounded-2xl overflow-hidden mb-12 group shadow-2xl shadow-blue-500/5">
            {/* <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg">
              <img
                src="https://picsum.photos/seed/picsum/600"
                alt="System Architecture"
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-104"
              />
            </AspectRatio> */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded text-xs font-semibold border border-white/10 uppercase tracking-widest">
                {tags?.[0]}
              </span>
            </div>
          </div>

          <DetailCardContent Description={description} />
          <div className="my-12 h-px bg-border border-primary w-full" />
          <div className=" flex border-primary border-2 p-3 rounded-lg justify-between align-middle items-center">
            <LikeButton
              id={id}
              count={likesCount}
              // onUpvote={() => {}} // No-op for static version
              // onDownvote={() => {}} // No-op for static version
            />
            <div className=" flex justify-between align-middle items-center gap-2.5">
              <GitCommitVerticalIcon />
              <Share />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default DetailCard;
