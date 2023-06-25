/*
 * @Author: glows777 1914426389@qq.com
 * @Date: 2023-02-03 21:33:21
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-12 21:26:12
 * @FilePath: \glows777-admin-platform\src\store\index.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { useUserData } from './modules/user'
import { useCounterStore } from './modules/counter'
import { useRoleRouter } from './modules/permission'

export {
  useCounterStore,
  useUserData,
  useRoleRouter,
}
