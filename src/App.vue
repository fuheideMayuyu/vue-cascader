<template>
  <div id="app">
    <Cascader :options="options"></Cascader>
  </div>
</template>

<script>
import Cascader from './components/Cascader.vue';

export default {
  name: 'app',
  components: {
    Cascader,
  },
  data() {
    return {
      options:[
        {
          label: '肉类',
          children: [
            {
              label: '猪肉',
              children: [
                {
                  label: '五花肉'
                },
                {
                  label: '排骨'
                },
              ]
            }
          ]
        },
        {
          label: '蔬菜',
          children: [
            {
              label: '青菜',
              children: [
                {
                  label: '上海青'
                },
                {
                  label: '油麦菜'
                },
              ]
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="stylus">
</style>

