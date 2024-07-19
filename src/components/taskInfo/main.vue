<template>
    <el-row >
        <el-button type="primary" style="margin:0 0 0 20px;" @click="addTask">
            添加任务
        </el-button>
    </el-row>
    <el-row style="margin:20px">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="taskName" label="任务名称" width="180" />
            <el-table-column prop="createDate" label="创建日期" />
            <el-table-column prop="name" label="创建者" width="180" />
            <el-table-column prop="content" label="内容" />
            <el-table-column prop="startAndEndTime[0]" label="开始日期" />
            <el-table-column prop="startAndEndTime[1]" label="结束日期" />
            <el-table-column prop="notes" label="备注" />
            <el-table-column fixed="right" label="操作" >
                <template #default>
                    <el-button link type="primary" size="small" @click="checkTaskInfo">
                        任务详情
                    </el-button>
                    <el-button link type="primary" size="small" @click="changeTaskInfo">修改</el-button>
                </template>
            </el-table-column>

        </el-table>
    </el-row>
    <el-dialog 
        v-model="dialogVisible"
        :title="dialogTitle"
        width="500"
        :before-close="handleClose">
        <el-form label-position="top">
            <!-- <> -->
            <el-form-item label="任务名称" >
                <el-input v-model="dialogForm.taskName" />        
            </el-form-item>
            <el-form-item label="创建日期">
                <el-date-picker
                    v-model="dialogForm.createDate"
                    type="date"
                    placeholder="选择日期"
                />   
            </el-form-item>
            <el-form-item label="创建者">
                <el-input v-model="dialogForm.creater" />        
            </el-form-item>
            <el-form-item label="内容">
                <el-input v-model="dialogForm.content" />        
            </el-form-item>
            <el-form-item label="任务周期">
                <el-date-picker
                    v-model="dialogForm.startAndEndTime"
                    type="daterange"
                    range-separator="至"
                    start-placeholder="开始日期"
                    end-placeholder="结束日期"
                />     
            </el-form-item>
            <el-form-item label="备注">
                <el-input v-model="dialogForm.notes" />        
            </el-form-item>
            <el-button type="primary" @click="closeDialog">关闭</el-button>
            <el-button type="primary" @click="saveDialog">保存</el-button>
        </el-form>
    </el-dialog>
</template>

<script>
import { ref,reactive  } from 'vue'
export default {
    setup: function(){
        let tableData = reactive([
            {
                taskName:'任务1',
                createDate:'',
                creater:'',
                content:'',
                startAndEndTime:['Jul 11 2024','Jul 12 2024'],
                notes:''
            },
            {
                taskName:'任务2',
                createDate:'',
                creater:'',
                content:'',
                startAndEndTime:['Jul 11 2024','Jul 12 2024'],
                notes:''
            }
        ])
        let dialogVisible = ref(false)
        
        let dialogTitle = ref('')
        //查询表格
        const searchTableData = () =>{

        }

        //添加任务
        const addTask = () =>{
            dialogVisible.value = true
            dialogTitle.value = '添加任务'
        }
        
        //biaodan
        let dialogForm = reactive({
            taskName:'3',
            createDate:'',
            creater:'',
            content:'',
            startAndEndTime:[],
            notes:''
        })
        //关闭窗口
        const closeDialog = ()=>{
            //清空form
            dialogVisible.value = false
        }

        //保存任务详情
        const saveDialog = ()=>{
            console.log(dialogForm)
            //需处理日期

            //接口
            tableData.push(dialogForm)
            dialogVisible.value = false
        }

        //查看详情
        const checkTaskInfo = () =>{
            dialogTitle.value = '任务详情'
        }

        //修改任务
        const changeTaskInfo = () =>{
            dialogTitle.value = '修改任务'
        }

        return{
            tableData,
            dialogTitle,
            dialogVisible,
            searchTableData,
            addTask,
            dialogForm,
            closeDialog,
            saveDialog,
            checkTaskInfo,
            changeTaskInfo
        }
    }
}
</script>

<style>

</style>