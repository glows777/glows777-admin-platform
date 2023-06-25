/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2023-02-03 21:33:45
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-03-02 22:33:56
 * @FilePath: \glows777-admin-platform\src\store\modules\user.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${1914426389@qq.com}, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import { user } from '~/apis'
import type { UserMessage } from '~/types/user'

export const useUserData = defineStore({
  id: 'userData',
  state: () => ({
    name: '',
    token: '',
    roles: [] as string[],
  }),
  actions: {
    SET_NAME(_name: string) {
      this.name = _name
    },
    SET_TOKEN(_token: string) {
      this.token = _token
    },
    SET_ROLES(_roles: string[]) {
      this.roles = this.roles.concat(_roles)
    },
    RESET_TOKEN() {
      this.token = ''
      // todo 调用local的方法 清除本地缓存
    },
    async login(userData: UserMessage): Promise<boolean> {
      try {
        let flag = false
        const res = await user.login(userData)
        if (Math.floor(res.code / 100) === 2) {
          this.SET_NAME(res.data.name)
          this.SET_TOKEN(res.data.token)
          flag = true
        }
        else { flag = false }
        return flag
      }
      catch (error) {
        console.error(`登录错误=================>${error}`)
        return false
      }
    },
    async getInfo() {
      try {
        const res = await user.getUserInfo()
        this.SET_ROLES(res.data.roles)
      }
      catch (error) {
        console.error('=====================> 获取用户信息失败', error)
      }
    },
  },
  persist: {
    enabled: true,
    strategies: [{
      key: 'userData',
      storage: sessionStorage,
    }],
  },
})
