<template>
  <div class="Cascader" v-click-outside="close">
    <div class="title" @click="toggle">
      title
    </div>
    <div v-if="isVisible">
      <CascaderItme :options="options"></CascaderItme>
    </div>
  </div>
</template>

<script>
import {clickOutside}  from '../directives/clickOutside';
import CascaderItme from './CascaderItem'
// 自定义指令 click-outside
export default {
  props: {
    options: {
      type: Array,
      default: []
    }
  },
  directives: {
    clickOutside,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  computed: {
  
  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    close(){
      this.isVisible = false;
    },
    toggle(){
      this.isVisible = !this.isVisible
    }
  },
  components: {
    CascaderItme,
  },
};
</script>

<style scoped lang="stylus">
.cascader
    display inline-block;
.title 
    width 150px;
    height 30px;
    border 1px solid #ccc;
.content
    display flex
.content-left
    border:1px solid #ccc;
    min-height:150px;
    max-height:150px;
    overflow-y scroll;
.label
    width 80px;
    padding-left 5px;
.label:hover
    background:#999;
    cursor pointer
.title
    line-height 30px;
</style>