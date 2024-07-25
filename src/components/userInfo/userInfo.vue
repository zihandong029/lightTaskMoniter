<template>
  <el-form>
      <el-form-item label="登陆人">
        <el-input v-model="currentLogin" disabled/>
    </el-form-item>
  </el-form>
</template>

<script>
import { currentUser }from '../../stores/index'
import { ref, onMounted } from 'vue';
export default {
  setup(){
    let currentLogin = ref()
    const test = currentUser()
    
    

    
    onMounted(() => {
      currentLogin.value = test.getCurrentUser
      console.log(test)
    });
    return {
        currentLogin
    }
  }
}
</script>

<style>

</style>