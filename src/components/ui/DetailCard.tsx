import type { Data } from "@/Type";
import { Button } from "./button";
import DetailAuthor from "./DetailAuthor";
import DetailCardContent from "./DetailCardContent";
import DetailCardSummary from "./DetailCardSummary";
import { Link } from "@tanstack/react-router";

const DetailCard = ({ data }: { data: Data }) => {
  const { id, title, summary, tags, description, createdAt } = data;
  return (
    <>
      <div
        key={id}
        className="min-h-screen flex flex-col font-sans bg-background text-white selection:bg-primary selection:text-white"
      >
        {/* Header removed as requested */}
        <div className="flex justify-start align-middle items-center">
          <Link to="/ideas">
            <Button className="text-primary-foreground">Back</Button>
          </Link>
        </div>

        <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
          <DetailAuthor CreatedAt={createdAt} />
          <header className="mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight font-extrabold mb-8">
              {title}
            </h1>
          </header>

          <DetailCardSummary summary={summary} />

          <div className="relative rounded-2xl overflow-hidden mb-12 group shadow-2xl shadow-blue-500/5">
            <img
              src="https://picsum.photos/seed/water-tech/1200/675"
              alt="System Architecture"
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="bg-black/40 backdrop-blur-md px-3 py-1.5 rounded text-xs font-semibold border border-white/10 uppercase tracking-widest">
                {tags[0]}
              </span>
            </div>
          </div>

          <DetailCardContent Description={description} />

          <div className="my-16 h-px bg-border w-full" />

          {/* <VotingCard
            upvotes={upvotes}
            downvotes={downvotes}
            onUpvote={() => {}} // No-op for static version
            onDownvote={() => {}} // No-op for static version
          /> */}

          {/* <CritiquesSection initialComments={MOCK_COMMENTS} /> */}
        </main>
      </div>
    </>
  );
};

export default DetailCard;
