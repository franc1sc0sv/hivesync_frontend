import { AxiosClient } from "../config/axios";
import { format_api_response, headers, throwError } from "../helpers/apiHelper";

export const create_server = async (data: any) => {
  try {
    const res = await AxiosClient.post("/server/management", data, headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const get_all_servers_by_user = async () => {
  try {
    const res = await AxiosClient.get("/server/management", headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const get_server = async (id: string) => {
  try {
    const res = await AxiosClient.get(`/server/management/${id}`, headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};
