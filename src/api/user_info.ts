import { AxiosClient } from "../config/axios";
import { format_api_response, headers, throwError } from "../helpers/apiHelper";

export const get_user_username = async (data: any) => {
  try {
    const res = await AxiosClient.post(
      "/user_info/user/friends",
      data,
      headers()
    );
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};
