/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2023-02-03 16:02:38
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-03-02 22:09:07
 * @FilePath: \glows777-admin-platform\src\api\user.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${1914426389@qq.com}, All Rights Reserved.
 */
import request from '~/utils/request'
import type { LoginResponse, UserInfo, UserMessage } from '~/types/user'

function login(data: UserMessage) {
  return request<LoginResponse>(
    {
      url: '/api/login',
      method: 'post',
      data,
    },
    {
      loading: true,
    },
    {
      text: '等待中',
    },
  )
}

function getUserInfo() {
  return request<UserInfo>(
    {
      url: '/api/getUserInfo',
      method: 'get',
    },
  )
}

export default {
  login,
  getUserInfo,
}
