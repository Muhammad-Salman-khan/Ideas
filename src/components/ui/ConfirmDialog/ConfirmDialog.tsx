import { Button } from "@/components/button";
import { DeleteIcon } from "@/components/delete";
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
import type { confirmPropType } from "@/schemas/ConfirmDialog";

const ConfirmDialog = ({
  isPending,
  isOpen,
  id,
  cancel,
  ContinueToDelete,
}: confirmPropType) => {
  return (
    <>
      <Dialog open={isOpen}>
        <DialogTrigger asChild>
          <Button variant="destructive" className="flex items-center gap-2">
            <DeleteIcon onClick={() => cancel(false)} className="h-4 w-4" />
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
              <Button
                variant="outline"
                onClick={() => cancel(!isOpen)}
                type="button"
              >
                Cancel
              </Button>
            </DialogClose>

            <Button
              type="button"
              variant="destructive"
              onClick={() => ContinueToDelete(id)}
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

export default ConfirmDialog;
