/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-11-10 13:01:11
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-16 20:49:06
 * @FilePath: \glows777-admin-platform\src\main.ts
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
import './style.css'
import App from './App.vue'
import router from './router'
// import { useRoleRouter } from './store'

const pinia = createPinia()
pinia.use(piniaPersist)

createApp(App).use(pinia).use(router).mount('#app')
// const roleRouter = useRoleRouter()

// if (roleRouter.routes.length === 0 && !location.href.includes('/login')) {
//     const _roles: string[] = JSON.parse(sessionStorage.getItem('userData')!).roles
//     roleRouter.generateRoutes(_roles)
// }
