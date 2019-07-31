<template>
  <div>
    <text @click="clickItem" class="text-shower-title" :class="`text-shower-title__${clicked ? 'red' : 'green'}`">{{config.name}} ---- {{config.use}}</text>
  </div>
</template>
<script>
export default {
  props: ['config'],
  data() {
    return {
      clicked: false
    }
  },
  methods: {
    clickItem() {
      this.clicked = !this.clicked
    }
  }
}
</script>

<style lang="less">
  // 添加scope-name
  @component-name: text-shower;
  @text-color: blueviolet;
  @bg-red: #ff0000;
  @bg-green: #00ffff;

  .@{component-name}-title {
    color: @text-color;
    margin: 30px 0 10px;
    height: 50px;
    &__red {
      background-color: @bg-red;
    }
    &__green {
      background-color: @bg-green;
    }
  }
</style>
