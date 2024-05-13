import { AxiosClient } from "../config/axios";
import { format_api_response, throwError } from "../helpers/apiHelper";

const Prefix = "/auth";

export const api_login = async (credentials: any) => {
  try {
    const data = await AxiosClient.post(`${Prefix}/login`, credentials);
    return format_api_response(data);
  } catch (e) {
    throwError(e);
  }
};

export const api_register = async (data: any) => {
  try {
    await AxiosClient.post(`${Prefix}/register`, data);
    return true;
  } catch (e) {
    throwError(e);
  }
};

export const get_profile = async (token: string) => {
  try {
    const data = await AxiosClient.get(`${Prefix}/profile`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return format_api_response(data);
  } catch (error) {
    throwError(error);
  }
};
