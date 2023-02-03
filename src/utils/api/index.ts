/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 15:59:36
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-03 20:36:16
 * @FilePath: \glows777-admin-platform\src\utils\api\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import request from "./request";
import user from "./api/user";

function getListAPI() {
  return request(
    {
      url: "/api/getList",
      method: "post",
    },
    {
      loading: true,
    },
    {
      text: "加载中...",
    }
  );
}
function getMockUserStatus() {
  return request(
    {
      url: "/mock/api/getStatusList",
      method: "GET",
    },
    {
      loading: true,
    },
    {
      text: "加载中",
    }
  );
}

export { getListAPI, getMockUserStatus, user };
