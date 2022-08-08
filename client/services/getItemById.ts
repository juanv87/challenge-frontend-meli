import { axiosUrl } from "./axiosInstance";
export const getItemById = async (itemId: string) => {
  return axiosUrl.get(`items/${itemId}`).then((response) => response.data);
};
