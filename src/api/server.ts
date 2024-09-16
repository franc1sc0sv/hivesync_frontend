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

// Categories

export const get_all_category = async (id_server: string) => {
  try {
    const res = await AxiosClient.get(
      `/server/categories/${id_server}`,
      headers()
    );
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const create_category = async (data: any, id_server: string) => {
  try {
    const res = await AxiosClient.post(
      `/server/categories/${id_server}`,
      data,
      headers()
    );
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const delete_category = async (id: string) => {
  try {
    const res = await AxiosClient.delete(`/server/categories/${id}`, headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const get_category = async (id: String) => {
  try {
    const res = await AxiosClient.get(
      `/server/categories/get_one/${id}`,
      headers()
    );
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const patch_category = async (data: any, id: string) => {
  try {
    const res = await AxiosClient.patch(
      `/server/categories/${id}`,
      data,
      headers()
    );
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};
