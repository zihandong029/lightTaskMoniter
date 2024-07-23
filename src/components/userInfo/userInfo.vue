<template>
  <el-form>
      <el-form-item label="登陆人">
        <el-input v-model="currentUser" disabled/>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
    setup(){
        const currentUser = '123'

        return {
            currentUser
        }
    }
}
</script>

<style>

</style>