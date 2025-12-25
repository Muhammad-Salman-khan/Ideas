export const FetchData = async (e: string | number) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_GET_DATA_API}/${e}`);
    if (!res.ok) throw new Error("");
    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
};
