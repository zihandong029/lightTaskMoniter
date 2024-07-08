<template>
  <div >
    <el-container>
      <el-header class="topBar">
        <MenuBar/>
      </el-header>
      <el-main class="mainArea">
         <router-view></router-view>
      </el-main>
    </el-container>
    
  </div>
</template>

<script>
import MenuBar from './components/toolbar/header.vue'

import { ref } from 'vue';

export default {
  components: {
    MenuBar
  },
  // data(){
  //   return {
  //     activeIndex: 2,

  //   }
  // },
  setup(){

    return {
      
    }
  }
};
</script>


<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */

.topBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height:5%;
  /* background-color: #f8f9fa; */
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.mainArea {
  position: fixed;
  top: 5%;
  left: 0;
  width: 100%;
  padding: 1%;
}


</style>
