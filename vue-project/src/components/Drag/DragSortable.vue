<template>
  <div class="container">
    <div class="drag-container">
      <div
        v-for="(item, index) in LIST"
        draggable="true"
        @drop="(e) => onDrop(e, index)"
        @dragover="(e) => onDragOver(e,index)"
        @dragstart="(e) => onDragStart(e, index)"
        :key="item"
        :class="['drag-item', `${ index === this.startIdx ? 'drag-item-hover' : '' }`]"
      >{{item}}</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      LIST: [1, 2, 3, 4, 5, 6, 7, 8],
      startIdx: null,
      overIdx: null
    };
  },
  computed: {

  },
  methods: {
    onDragStart(e, index) {
      this.startIdx = index;
      console.log(e, index);
    },
    onDragOver(e, index) {
      e.preventDefault();
      if (index === this.startIdx) return;
      // this.swap(index, this.startIdx)
    },
    swap(idx1, idx2) {
      let item = this.LIST[idx1];
      this.LIST[idx1] = this.LIST[idx2];
      this.LIST[idx2] = item;
    },
    onDrop(e, index) {
      console.log("drop:", e, index);
      this.swap(this.startIdx, index);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.drag-container {
  width: 1280px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.drag-item {
  display: inline-block;
  width: 300px;
  height: 200px;
  border: 1px solid black;
  border-radius: 8px;
  margin: 8px;
  text-align: center;
  line-height: 200px;
  cursor: pointer;
  transition: all 0.2s linear;
}
.drag-item-hover{
     width: 304px;
     height: 202px;
}
.drag-item:hover{
     transform: scale(1.04);
}
</style>