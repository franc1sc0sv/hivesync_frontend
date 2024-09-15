import { AxiosClient } from "../config/axios";
import { format_api_response, headers, throwError } from "../helpers/apiHelper";

//user information edit
export const edit_username = async (data: any) => {
  try {
    const res = await AxiosClient.patch(
      "/edit/username",
      data,
      headers()
    );
    return res;
  } catch (error) {
    console.log(error);
    throwError(error);
  }
}

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

export const get_friends_data = async () => {
  try {
    const res = await AxiosClient.get("/user_info/user/friends", headers());
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};

export const get_friend_data = async (id: string) => {
  try {
    const res = await AxiosClient.get(
      `/user_info/user/friends/${id}`,
      headers()
    );
    return format_api_response(res);
  } catch (e) {
    throwError(e);
  }
};
