import { useState } from "react";
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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { DeletePost } from "@/Api/useFetch";
import { useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";

function Menu({ id }: { id: string }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: () => DeletePost(id),
    onSuccess: () => {
      toast.success("Post deleted Successfully");
      navigate({ to: "/ideas" });
    },
  });
  const DeletePosts = async (id: any) => {
    try {
      await mutateAsync(id);
      setOpen(false);
      queryClient.invalidateQueries({ queryKey: ["ideas"] });
    } catch (error: any) {
      console.error(error);
      toast.error(error);
    }
  };
  if (isOpen) {
    return (
      <ConfirmDialog
        isPending={isPending}
        ContinueToDelete={DeletePosts}
        id={id}
        cancel={setOpen}
        isOpen={isOpen}
      />
    );
  }
  return (
    <Menubar key={id}>
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
          <MenubarItem onClick={() => setOpen(!isOpen)}>
            <DeleteIcon /> {isPending ? "Deleting Post" : "Delete"}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
export default Menu;
