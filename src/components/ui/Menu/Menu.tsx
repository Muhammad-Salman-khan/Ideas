import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/dialog";
import { Button } from "@/components/button";
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
import {
  useMutation,
  useQueryClient,
  useSuspenseQueries,
} from "@tanstack/react-query";
import { DeletePost } from "@/Api/useFetch";
import { Navigate, useNavigate } from "@tanstack/react-router";
import { toast } from "sonner";

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
  const DeletePosts = async (id: string | number) => {
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
      <OpenDialog
        DeletePosts={DeletePosts}
        id={id}
        isOpen={isOpen}
        setOpen={setOpen}
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
          {/* <MenubarSeparator />
          <MenubarItem disabled={isPending} onClick={() => DeletePosts(id)}>
            <DeleteIcon /> {isPending ? "Deleting Post" : "Delete"}
            </MenubarItem> */}
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

export const OpenDialog = ({ isPending, isOpen, id, DeletePosts }) => {
  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger asChild>
          <Button
            variant="destructive"
            className="flex items-center gap-2"
            disabled={isPending}
          >
            <DeleteIcon className="h-4 w-4" />
            {isPending ? "Deleting…" : "Delete"}
          </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-md rounded-2xl">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Delete this post?
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground">
              This action cannot be undone. The post will be permanently
              removed.
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-3">
            <DeleteIcon className="h-5 w-5 text-destructive" />
            <p className="text-sm text-destructive">
              This will permanently delete the post and all associated data.
            </p>
          </div>

          <DialogFooter className="mt-6 flex gap-2 sm:justify-end">
            <DialogClose asChild>
              <Button variant="outline" type="button">
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="button"
              variant="destructive"
              onClick={() => DeletePosts(id)}
              disabled={isPending}
            >
              {isPending ? "Deleting…" : "Yes, delete"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
