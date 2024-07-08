



<template>
  <v-stage ref="stage" :config="stageConfig" @mousedown="startDrawing" @mouseup="stopDrawing" @mousemove="draw" style="background-color: white">
    <v-layer ref="layer" style="background-color: white">
      <v-line v-for="line in lines" :key="line.id" :config="line" />
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
      lines.value.push({ points: [pos.x, pos.y], stroke: 'black', strokeWidth: 5, tension: 0.5, lineCap: 'round' });
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

    return {
      stageConfig,
      lines,
      startDrawing,
      stopDrawing,
      draw,
    };
  },
};
</script>


