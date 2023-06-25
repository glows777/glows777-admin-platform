/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-11-10 13:01:11
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-13 10:54:37
 * @FilePath: \glows777-admin-platform\src\vite-env.d.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved. 
 */
/// <reference types="vite/client" />
import 'vue-router'
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_API_URL: string,
  readonly VITE_LOCATION_ORIGIN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare module 'vue-router' {
    interface RouteMeta {
        role?: string[]
    }
}