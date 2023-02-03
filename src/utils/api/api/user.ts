import request from "../request";

interface UserData {
  name: string,
  password: string
}
interface UserStatus {
  name: string,
  token: string
}
function login(data: UserData) {
  return request<UserStatus>(
    {
      url: "/api/login",
      method: "post",
      data
    },
    {
      loading: true,
    },
    {
      text: "等待中",
    }
  );
}

export default {
  login,
}
