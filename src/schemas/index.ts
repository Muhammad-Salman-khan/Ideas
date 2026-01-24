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
    .instanceof(File)
    .refine(
      (file) =>
        ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
          file.type,
        ),
      { message: "Invalid image file type" },
    )
    .optional(),

  category: z.string(),
  tags: z.array(z.string()).max(3).optional(),
});
