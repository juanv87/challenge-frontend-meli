import { axiosUrl } from "./axiosInstance";

export const getItemsBySearch = async (query: string) => {
  return axiosUrl
    .get(`items`, {
      params: { q: query },
    })
    .then((response) => response.data);
};
