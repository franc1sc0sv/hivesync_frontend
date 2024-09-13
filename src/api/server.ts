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

export const get_all_events_by_server = async (serverId: string) => {
  try {
    const res = await AxiosClient.get(`/server/events/get_many/${serverId}`, headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e)
  }
}

//events

export const create_event = async (serverId: string, data: any) => {
  try {
    const res = await AxiosClient.post(`/server/events/${serverId}`,data, headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e)
  }
}

export const delete_event = async (serverId: string, data: any) => {
  try {
    const res = await AxiosClient.delete(`/server/events/${serverId}`, {
      headers: headers().headers,
      data: data
    });
    return format_api_response(res);
  } catch (e) {
    throwError(e)
  }
}