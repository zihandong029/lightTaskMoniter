<template>
  <div class="register-container">
    <el-form :model="registerForm" ref="registerFormRef" label-width="80px">
      <el-form-item prop="username" label="用户名">
        <el-input v-model="registerForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input type="password" v-model="registerForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleSubmit">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElForm } from 'element-plus';

export default defineComponent({
  name: 'Register',
  setup() {
    const registerForm = ref({
      username: '',
      password: ''
    });

    const registerFormRef = ref<InstanceType<typeof ElForm> | null>(null);
    const handleSubmit = async () => {
      if (registerFormRef.value) {
        const valid = await registerFormRef.value.validate();
        if (valid) {
          try {
              let body = JSON.stringify({
                username: registerForm.value.username,
                password: registerForm.value.password
              })
              console.log(body)
            const response = await fetch('/api/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: body
            });
            const data = await response.json();

            if (response.status === 201) {
              alert('注册成功');
              // 注册成功后跳转到登录页面
              window.location.href = '/login';
            } else {
              throw new Error(data.error || '注册失败');
            }
          } catch (error) {
            console.error(error);
            alert('注册失败，请重试f');
          }
        } else {
          console.log('表单验证失败');
        }
      }
    };

    return {
      registerForm,
      registerFormRef,
      handleSubmit
    };
  }
});
</script>

<style scoped>
.register-container {
  max-width: 300px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>
