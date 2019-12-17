<template>
  <div class="Cascader" v-click-outside="close">
    <div class="title" @click="toggle">
      title
    </div>
    <div class="content" v-if="isVisible">
      content
    </div>
  </div>
</template>

<script>
// 自定义指令 click-outside
export default {
  directives: { // 指令是一个方法，也有自己的生命周期
    clickOutside: {
      inserted (el, bindings, vnode){ // el当前dom元素 bindings当前绑定元素
        document.addEventListener('click', function(e){
          if(e.target === el || el.contains(e.target)){
            return 
          }
          bindings.value(); // close事件
        })
      }
    }
  },
  data() {
    return {
      isVisible: false
    };
  },
  computed: {

  },
  created() {

  },
  mounted() {

  },
  watch: {

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
    line-height 30px;
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
    cursor pointer;
</style>