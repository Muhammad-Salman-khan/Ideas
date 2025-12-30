import Api from "@/lib/axios";
import type { Data } from "@/Type";

export const FetchData = async (e: string | number): Promise<Data> => {
  try {
    const res = await Api.get(`/ideas/${e}`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
export const FetchIdeas = async (): Promise<Data[]> => {
  try {
    const res = await Api.get(`/ideas`);
    return res.data;
  } catch (error: any) {
    console.error(error);
    throw new Error(error);
  }
};
