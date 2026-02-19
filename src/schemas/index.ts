import { email, z } from "zod";

// const ACCEPTED_IMAGE_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];

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

export type EditSchemaType = z.infer<typeof EditSchema>;
export const EditSchema = FormsSchema.pick({
  title: true,
  summary: true,
  description: true,
});
export type SignUpFormType = z.infer<typeof SignUpForm>;
export const SignUpForm = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.email(),
  password: z.string(),
});

export const LoginSchema = SignUpForm.pick({ email: true, password: true });
export type LoginSchemaType = z.infer<typeof LoginSchema>;
