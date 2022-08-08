import { axiosUrl } from "./axiosInstance";

export const getItemsByQuery = async (query: string) => {
  return axiosUrl
    .get(`items`, {
      params: { q: query },
    })
    .then((response) => response.data);
};

export const getItemDetail = async (itemId: string) => {
  return axiosUrl.get(`items/${itemId}`).then((response) => response.data);
};
