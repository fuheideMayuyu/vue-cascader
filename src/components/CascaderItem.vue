<template>
  <div class="content">
    <div class="content-left" >
        <div class="label" v-for="(item, index) in options" :key="index">
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" v-if="lists && lists.length > 0">
        <CascaderItme :options="lists"></CascaderItme>
      </div>
  </div>
</template>

<script>

export default {
  name: 'CascaderItme',
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentSeletecd: null,
    };
  },
  computed: {
    lists(){
      return this.currentSeletecd && this.currentSeletecd.children
    }
  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {
    select(item){
      this.currentSeletecd = item;
      console.log(this.currentSeletecd)
    },
  },
  components: {

  },
};
</script>

<style scoped lang="stylus">

</style>
