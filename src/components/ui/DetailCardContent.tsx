const DetailCardContent = ({ Description }: { Description: string }) => {
  return (
    <>
      <div className="space-y-12  ">
        <section>
          <ul className="space-y-4 border-b-foreground border-t-foreground">
            <li className="flex gap-4 items-start group">
              <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 group-hover:scale-150 transition-transform" />
              <p className="text-lg leading-relaxed text-foreground">
                {Description}
              </p>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default DetailCardContent;
