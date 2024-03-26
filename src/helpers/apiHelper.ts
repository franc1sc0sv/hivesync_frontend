import { AxiosError } from "axios";

export const throwError = (error: AxiosError) => {
  if (error instanceof AxiosError) {
    throw error.response?.data;
  }
};

export const headers = () => {
  return {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
};

export const headersForm = () => {
  return {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };
};
