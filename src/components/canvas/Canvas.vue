<template>
  <v-stage ref="stage" :config="stageConfig" @mousedown="startDrawing" @mouseup="stopDrawing" @mousemove="draw" >
    <v-layer ref="layer" >
      <v-line v-for="line in lines" :key="line.id" :config="line" />
      <v-rect v-for="item in colorList" :key="item.fill"
          :config="item" 
          @click="handleButtonClick"
        />
    </v-layer>
    
  </v-stage>
  
</template>

<script>
import { ref, onMounted } from 'vue';
import { Stage, Layer, Line } from 'vue-konva';

export default {
  components: {
    VStage: Stage,
    VLayer: Layer,
    VLine: Line,
  },
  setup() {
    const isDrawing = ref(false);
    const stageConfig = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const lines = ref([]);

    const startDrawing = (event) => {
      isDrawing.value = true;
      const pos = event.target.getStage().getPointerPosition();
      lines.value.push({ points: [pos.x, pos.y], stroke: drawColor, strokeWidth: 5, tension: 0.5, lineCap: 'round' });
    };

    const stopDrawing = () => {
      isDrawing.value = false;
    };

    const draw = (event) => {
      if (!isDrawing.value) return;
      const stage = event.target.getStage();
      const point = stage.getPointerPosition();
      let lastLine = lines.value[lines.value.length - 1];
      // add point
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      // trigger reactivity
      lines.value.splice(lines.value.length - 1, 1, lastLine);
    };

    onMounted(() => {
      window.addEventListener('resize', () => {
        stageConfig.width = window.innerWidth;
        stageConfig.height = window.innerHeight;
      });
    });

    //尝试加按钮
    const colors = ['white', 'black', 'blue', 'yellow', 'red'];

    const colorList = colors.map((color, index) => ({
        x: 50 + index * 120,  // 每个矩形在 x 轴上分开一些距离
        y: 50,
        width: 100,
        height: 40,
        fill: color,
        cornerRadius: 10,
        stroke: 'black',
        strokeWidth: 2
    }));

    const handleButtonClick = (e) => {
      // alert('Button clicked!');
      console.log(e.target.attrs.fill)
      drawColor = e.target.attrs.fill
    };

    let drawColor = ref('white')
    return {
      stageConfig,
      lines,
      startDrawing,
      stopDrawing,
      draw,
      //
      colorList,
      handleButtonClick,
      //画笔颜色
      drawColor
    };
  },
};
</script>


