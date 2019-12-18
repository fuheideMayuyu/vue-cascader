<template>
  <div class="content">
    <div class="content-left" >
        <div class="label" v-for="(item, index) in options" :key="index">
          <div class="label" @click="select(item)">{{item.label}}</div>
        </div>
      </div>
      <div class="content-right" >
        <div class="label" v-for="(item, index) in lists" :key="index">
          <div class="label">{{item.label}}</div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
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
