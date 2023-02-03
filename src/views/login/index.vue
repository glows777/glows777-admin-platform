<!--
 * @Author: glows777 1914426389@qq.com
 * @Date: 2023-01-03 17:03:40
 * @LastEditors: glows777 1914426389@qq.com
 * @LastEditTime: 2023-02-03 21:24:20
 * @FilePath: \glows777-admin-platform\src\views\login\index.vue
 * @Description: 登录页面
 * 
 * Copyright (c) 2023 by glows777 1914426389@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import './index.scss'
import { user } from "~/utils/api"
const router = useRouter()
const userData = reactive({
  name: '',
  password: ''
})
const login = async () => {
  try {
    const res = await user.login(userData)
    
    if (Math.floor(res.code/100) === 2) router.push('/home')
  } catch (error) {
    // 封装一个全局消息通知
  }

}
</script>
<template>
  <div class="content-box">
    <div class="main">
      <div class="title">后台管理系统</div>
      <el-form :model="userData" style="max-width: 460px">
        <el-form-item :required="true">
          <el-input placeholder="请输入账号" :autofocus="true" v-model="userData.name">
            <template #prefix>
              <el-icon :size="30"><i-ep-userFilled /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item :required="true">
          <el-input type="password" :show-password="true" maxlength="15" minlength="8" placeholder="请输入密码（8-15位）"
            v-model="userData.password">
            <template #prefix>
              <el-icon :size="30"><i-ep-lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="loginBtn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>