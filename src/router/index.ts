/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-15 15:22:53
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-09 21:49:51
 * @FilePath: \glows777-admin-platform\src\router\index.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * 实现路由懒加载的工具函数
 * @param {string} url  view的相对路径，相对于src目录
 */
const lazyImport: (url: string) => () => Promise<unknown> = (url) => {
  const modules = import.meta.glob('../views/**/*.vue')

  return modules[`../views/${url}/index.vue`]
}

const routes = [
  {
    path: '/',
    component: lazyImport('home'),
  },
  {
    path: '/home',
    component: lazyImport('home'),
  },
  {
    path: '/example',
    component: lazyImport('example'),
  },
  {
    path: '/login',
    component: lazyImport('login'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to) => {
  const userData: Record<string, any> | null = JSON.parse(
    localStorage.getItem('userData')!,
  )
  if (to.path !== '/login' && !userData)
    return '/login'
})

// todo 这里来个动态权限 用另外一个beforeEach 然后async就好了
export default router
