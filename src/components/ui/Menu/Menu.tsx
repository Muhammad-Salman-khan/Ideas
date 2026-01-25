import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "../../menubar";
import { SquarePenIcon } from "@/components/square-pen";
import { EyeOffIcon } from "@/components/eye-off";
import { DeleteIcon } from "@/components/delete";
import { GripHorizontalIcon } from "@/components/grip-horizontal";

export function MenubarDemo({ id }: { id: string }) {
  return (
    <Menubar key={id} id={id}>
      <MenubarMenu>
        <MenubarTrigger>
          <GripHorizontalIcon size={20} />
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <EyeOffIcon /> Block
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <SquarePenIcon /> Edit
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            <DeleteIcon /> Delete
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
