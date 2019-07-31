<template>
  <!-- template里只能有一个根节点 -->
  <div class="demo-page">
    <text class="title">欢迎打开{{title}}</text>
    <input class="btn" type="button" value="随机变化Item位置" @click="changePosition(list)" />
    <text-shower v-for="(item) in list" :key="item.id" :config="item"></text-shower>
    <!-- 点击跳转详情页 -->
    <input class="btn" type="button" value="跳转到详情页" @click="routeDetail" />
  </div>
</template>

<script>
  import router from '@system.router'
  import textShower from './text-shower'
  export default {
    components: {
      textShower
    },
    // 页面级组件的数据模型，影响传入数据的覆盖机制：private内定义的属性不允许被覆盖
    private: {
      title: '示例页面',
      list: []
    },
    created() {
      this.list = [{
        id: 1,
        name: 'vue',
        use: 'framework'
      }, {
        id: 2,
        name: 'vuex',
        use: 'store'
      }, {
        id: 3,
        name: 'immer',
        use: 'immutable'
      }, {
        id: 4,
        name: 'element',
        use: 'ui'
      }]
    },
    mounted() {
      this.timer = setInterval(() => {
        this.changePosition(this.list)
      }, 1000)
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
      async routeDetail () {
        // 跳转到应用内的某个页面，router用法详见：文档->接口->页面路由
        router.push ({
          uri: '/DemoDetail'
        })
      },
      changePosition(list) {
        list.sort(() => Math.random() > 0.5)
      }
    }
  }
</script>

<style lang="less">
  .demo-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .title {
    font-size: 40px;
    text-align: center;
  }

  .btn {
    width: 550px;
    height: 86px;
    margin-top: 75px;
    border-radius: 43px;
    background-color: #09ba07;
    font-size: 30px;
    color: #ffffff;
  }
</style>
