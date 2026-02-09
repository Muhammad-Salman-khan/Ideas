import { z } from "zod";
export type confirmPropType = z.infer<typeof confirm>;
export const confirm = z.object({
  isPending: z.boolean(),
  isOpen: z.boolean(),
  id: z.string(),
  cancel: z.any(),
  ContinueToDelete: z.any(),
});
