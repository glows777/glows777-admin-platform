/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2023-02-12 20:53:26
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-06-25 12:00:04
 * @FilePath: \glows777-admin-platform\src\store\modules\permission.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${1914426389@qq.com}, All Rights Reserved.
 */
import { defineStore } from 'pinia'
import type { RouteRecordRaw } from 'vue-router'
import { asyncRoutes } from '~/router'

function hasPermission(route: RouteRecordRaw, roles: string[]): boolean {
  if (route.meta && route.meta.role) {
    return roles.some((role) => {
      if (route.meta?.role !== undefined)
        return route.meta.role.includes(role)

      return false
    })
  }
  else {
    return true
  }
}

function filterAsyncRoutes(routes: RouteRecordRaw[], roles: string[]): RouteRecordRaw[] {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const tempRoute = { ...route }
    if (hasPermission(tempRoute, roles)) {
      if (route.children)
        tempRoute.children = filterAsyncRoutes(route.children, roles)

      res.push(tempRoute)
    }
  })
  return res
}

export const useRoleRouter = defineStore({
  id: 'useRouter',
  state: () => ({
    routes: [] as RouteRecordRaw[],
  }),
  actions: {
    SET_ROUTES(_routes: RouteRecordRaw[]) {
      this.routes = this.routes.concat(_routes)
    },
    async generateRoutes(roles: string[]) {
      let accessRoutes = asyncRoutes
      if (roles.includes('admin'))
        accessRoutes = asyncRoutes
      else
        accessRoutes = filterAsyncRoutes(asyncRoutes, roles)

      this.SET_ROUTES(accessRoutes)
    },
  },
})
