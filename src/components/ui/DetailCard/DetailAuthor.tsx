import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";
import Menu from "../Menu/Menu";
import { Share } from "../ShareDialog/Share";

const DetailAuthor = ({
  CreatedAt,
  UserProfile,
  id,
}: {
  CreatedAt: string;
  id: string;
  UserProfile: string;
}) => {
  console.log(id);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6 py-5 border-y border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12">
            <Avatar className="w-full h-full rounded-full overflow-hidden ring-2 ring-border">
              <AvatarImage
                alt="User avatar"
                className="object-cover w-full h-full"
              />
              <AvatarFallback>Ac</AvatarFallback>
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-foreground">{UserProfile}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-foreground">
              <span>handle</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>
                Posted: {}
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
          <Share id={id} />
          <Menu id={id} />
        </div>
      </div>
    </>
  );
};

export default DetailAuthor;
