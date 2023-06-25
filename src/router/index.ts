/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-15 15:22:53
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-03-02 22:48:00
 * @FilePath: \glows777-admin-platform\src\router\index.ts
 * @Description:
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { useRoleRouter, useUserData } from '~/store'

/**
 * 实现路由懒加载的工具函数
 * @param {string} url  view的相对路径，相对于src目录
 */
const lazyImport: (url: string) => () => Promise<unknown> = (url) => {
  const modules = import.meta.glob('../views/**/*.vue')

  return modules[`../views/${url}/index.vue`]
}
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    component: lazyImport('home'),
  },
  {
    path: '/home',
    component: lazyImport('home'),
  },
  // {
  //   path: '/example',
  //   component: lazyImport('example'),
  // },
  {
    path: '/login',
    component: lazyImport('login'),
  },
]
// 异步挂载的路由   动态需要根据权限加载的路由表
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: '/example',
    component: lazyImport('example'),
    name: '权限测试',
    meta: { role: ['admin', 'super_editor', 'editor'] }, // 页面需要的权限
    children: [
      {
        path: 'child',
        component: lazyImport('exampleChildren'),
        name: '权限测试页',
        meta: { role: ['admin', 'super_editor'] }, // 页面需要的权限
      }],
  },
  // { path: '*', redirect: '/404' }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})
export default router

// todo 这里可以抽出来做一个配置项
const whiteList = ['/login']
router.beforeEach(async (to) => {
  const userStore = useUserData()
  const permissionStore = useRoleRouter()
  const userData: typeof userStore | null = JSON.parse(
    sessionStorage.getItem('userData')!,
  )
  // 确定用户是否登录
  if (userData && userData.token) {
    // todo 添加try catch 然后错误的话，清除token，重新登录
    if (to.path === '/login') {
      // 如果登录成功，直接导航到主页
      return { path: '/home' }
    }
    else {
      // 检查是否已经获得权限信息
      if (permissionStore.routes.length === 0) {
        // 如果本地的userData没有，就要去后台获取用户信息（用户信息中包含权限信息）
        if (userData.roles.length === 0)
          await userStore.getInfo()
        const roles = userStore.roles
        // 基于权限 生成路由表
        permissionStore.generateRoutes(roles)
        // 动态添加路由
        permissionStore.routes.forEach(route => router.addRoute(route))
        // Hack写法，确保addRoutes操作完成
        // replace: true -> 这样会使得路由跳转不会留下历史
        return { ...to, replace: true }
      }
    }
  }
  else { // 没有token -> 未登录
    // 在免登录的白名单内，直接过
    if (!whiteList.includes(to.path))
      return `/login?redirect=${to.path}`
    // 否则其他不在白名单的页面则重定向到登录页
  }
})
