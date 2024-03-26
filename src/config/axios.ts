import axios from "axios";

export const AxiosClient = axios.create({
  baseURL: import.meta.env.API_URL,
});
