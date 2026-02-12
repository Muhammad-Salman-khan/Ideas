import Api from "@/lib/axios";
import type { EditSchemaType, FormsSchemaType } from "@/schemas";
import type { Data } from "@/Type";
export const FetchIdeas = async (): Promise<Data[]> => {
  try {
    const res = await Api.get(`/ideas`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
export const FetchData = async (e: string | number): Promise<Data> => {
  try {
    const res = await Api.get(`/ideas/${e}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};

export const PostNewIdeas = async (e: FormsSchemaType): Promise<any> => {
  try {
    const res = await Api.post("/ideas", {
      ...e,
      createdAt: Intl.DateTimeFormat("en-US", {
        weekday: "short",
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }).format(new Date()),
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const DeletePost = async (e: string | number) => {
  try {
    await Api.delete(`/ideas/${e}`);
  } catch (error: any) {
    console.error(error);
  }
};
export const UpdateIdea = async (e: string | number, data: EditSchemaType) => {
  try {
    const res = await Api.patch(`/ideas/${e}`, data);
    return res.data;
  } catch (error: any) {
    console.error(error);
  }
};
