<template>
  <el-table :data="tableData">
    <el-table-column prop="username" label="用户名" />
    <el-table-column prop="authority" label="权限" />
  </el-table>
</template>

<script>
import { ref, onMounted } from 'vue';
import { getAllUsers } from '../../services/userInfo';

export default {
  setup(){
    let tableData = ref([

    ])

    const getTableData = async() =>{
      try {
          const res = await getAllUsers()
          tableData.value = res
      }catch (error) {
        console.error(error);
      }
    }
    onMounted(() => {
      getTableData()
    });
    return {
      tableData,
      getTableData
    };
  }
}



</script>

<style>

</style>