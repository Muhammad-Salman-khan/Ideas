export type Data = {
  id: string;
  title: string;
  summary: string;
  description: string;
  createdAt: string;
  tags: string[];
  user: string;
};
export type FormType = {
  title: string;
  summary: string;
  description: string;
  category: string;
  tags?: string[];
  image: File[] | null;
};
