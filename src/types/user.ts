/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2023-02-12 16:16:42
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-12 21:53:35
 * @FilePath: \glows777-admin-platform\src\types\user.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${1914426389@qq.com}, All Rights Reserved.
 */
export interface UserMessage {
  name: string
  password: string
}
export interface LoginResponse {
  name: string
  token: string
}
export interface UserInfo {
  roles: string[]
}
