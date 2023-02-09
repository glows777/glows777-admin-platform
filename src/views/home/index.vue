<!--
 * @Author: glows777 1914426389@qq.com
 * @Date: 2022-12-16 13:43:51
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-09 16:43:59
 * @FilePath: \glows777-admin-platform\src\views\home\index.vue
 * @Description:
 *
 * Copyright (c) 2022 by glows777 1914426389@qq.com, All Rights Reserved.
-->
<script setup lang="ts">
import { useUserData } from '~/store'

const userData = useUserData()

const userName = ref(userData.name)
</script>

<template>
  home
  {{ userName }}
</template>
