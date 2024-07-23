<template>
  <div class="login-container">
    <el-form :model="loginForm" ref="loginFormRef" >
      <el-form-item prop="username" label="用户名" label-width="80px">
        <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码" label-width="80px">
        <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit" style="justify-content: center">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="register-link">
      <span>还没有账号？</span>
      <router-link to="/register">立即注册</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElForm } from 'element-plus';
import { login } from '../services/authService';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'Login',
  setup() {
    const loginForm = ref({
      username: '',
      password: ''
    });

    const router = useRouter();
    const loginFormRef = ref<InstanceType<typeof ElForm> | null>(null);

    const handleSubmit = async () => {
      const valid = await loginFormRef.value?.validate();
      if (valid) {
        try {
          const response = await login(loginForm.value.username, loginForm.value.password);

          if (response.token) {
            localStorage.setItem('token', response.token);
            alert('登录成功');
            router.push('/myTask');
          } else {
            throw new Error(response.message || '登录失败');
          }
        } catch (error) {
          console.error(error);
          alert('登录失败，请重试');
        }
      } else {
        console.log('表单验证失败');
      }
    };

    return {
      loginForm,
      loginFormRef,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.login-container {
  max-width: 300px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>
