import z from "zod";

const DataType = z.object({
  documentId: z.string(),
  userId: z.string(),
  username: z.string(),
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(150, "Title exceeds 150 characters"),
  summary: z
    .string()
    .min(10, "summary should be atleast 10 character")
    .max(600, "You exceeed the limit"),
  description: z.string(),
  category: z.string(),
  tags: z.array(z.string()).optional(),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().optional(),
  likesCount: z.number().default(0),
  isPublished: z.boolean().default(true),
});
export type Data = z.infer<typeof DataType>;
export type FormType = {
  title: string;
  summary: string;
  description: string;
  category: string;
  tags?: string[];
  image?: File[] | undefined;
};
