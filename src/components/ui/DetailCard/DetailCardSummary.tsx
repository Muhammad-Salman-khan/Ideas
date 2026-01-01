const DetailCardSummary = ({ summary }: { summary: string }) => {
  return (
    <>
      <div className="bg-primary/5 border-l-4  text-foreground border-primary p-8 rounded-r-2xl mb-12">
        <h3 className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-3">
          Executive Summary
        </h3>
        <p className="text-xl md:text-2xl font-bold leading-relaxed text-foreground">
          {summary}
        </p>
      </div>
    </>
  );
};

export default DetailCardSummary;
