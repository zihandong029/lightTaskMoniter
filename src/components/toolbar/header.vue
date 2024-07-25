<template>
  <div style="width:100%">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      @select="handleSelect"
      class="menu"
    >
      <el-menu-item index="myTask">我的任务</el-menu-item>
      <el-menu-item index="createTask">创建任务</el-menu-item>
      <el-menu-item index="3">dashboard</el-menu-item>
      <el-sub-menu index="4">
        <template #title>次要模块</template>
        <el-menu-item index="allUser">人员角色</el-menu-item>
        <el-menu-item index="4-2">人员联动</el-menu-item>
      </el-sub-menu>
      
      <el-menu-item class="right-menu" index="myInfo">我的信息</el-menu-item>

    </el-menu>
  </div>
</template>

<script >
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const router = useRouter();
    const activeIndex = ref('myTask')
    
    const handleSelect = (val) => {
      
      activeIndex.value = val
      console.log(activeIndex.value)
      router.push({ path: '/'+ val})

      
    };

    return {
      activeIndex,
      handleSelect
    };
  }
}

</script>
<style scoped>
.menu {
  display: flex;
  justify-content:start;
  width: 100%;
}

.right-menu {

  margin-left: auto;
}
</style>