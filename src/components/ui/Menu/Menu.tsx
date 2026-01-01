import { Edit, EyeClosed, MinusCircleIcon, MoreHorizontal } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../menubar";

export function MenubarDemo({ id }: { id: string }) {
  return (
    <Menubar key={id} id={id}>
      <MenubarMenu>
        <MenubarTrigger>
          <MoreHorizontal size={15} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <MinusCircleIcon />
            Block
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <EyeClosed />
            Hide Post
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <Edit /> Edit Post
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
