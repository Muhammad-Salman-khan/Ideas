import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export type FormsSchemaType = z.infer<typeof FormsSchema>;
export const FormsSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(150, "Title exceeds 150 characters"),
  summary: z
    .string()
    .min(10, "summary should be atleast 10 character")
    .max(600, "You exceeed the limit"),
  description: z.string(),
  image: z
    .any()
    .refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    )
    .optional(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
});
