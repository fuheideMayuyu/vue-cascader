<template>
  <div class="content">
    <div class="content-left">
      <div class="label" v-for="(item, index) in options" :key="index">
        <div class="label" @click="select(item)">{{item.label}}</div>
      </div>
    </div>
    <div class="content-right" v-if="lists && lists.length">
      <CascaderItme :options="lists" :value="value" :level="level+1" @change="change"></CascaderItme>
    </div>
  </div>
</template>

<script>
import cloneDeep from "lodash/cloneDeep";
export default {
  name: "CascaderItme", // 递归组件必须命名，来做区分
  props: {
    options: {
      type: Array,
      default: () => []
    },
    value: {
      type: Array,
      default: () => []
    },
    level: {
      type: Number
    }
  },
  data() {
    return {
      currentSeletecd: null
    };
  },
  computed: {
    lists() {
      if (this.value[this.level] && this.value[this.level].id) {
        let o = this.options.find(
          item => item.id === this.value[this.level].id
        );
        return o.children;
      }
    }
  },
  created() {},
  mounted() {},
  watch: {},
  methods: {
    select(item) {
      let cloneValue = cloneDeep(this.value);
      cloneValue[this.level] = item;
      cloneValue.splice(this.level + 1);
      this.$emit("change", cloneValue);
      this.currentSeletecd = item;
    },
    change(item) {
      this.$emit("change", item);
    }
  },
  components: {}
};
</script>

<style scoped lang="stylus">
.content
  display flex
</style>
