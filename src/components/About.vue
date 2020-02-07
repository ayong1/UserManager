<template>
  <div class="about container">
    <h3>本项目技术栈</h3>
    <ul class="list-group">
      <li class="list-group">前端：vue</li>
      <li class="list-group">后端：json-server</li>
      <li class="list-group">接口请求：vue-resource</li>
      <li class="list-group">路由：vue-router</li>
    </ul>
    <h4>作者：ayong</h4>
    <span>QQ：1296545486</span>
    <img src="../assets/关于我.jpg" alt="">
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ul{
    list-style: none;
    text-indent: 1.5em;
  }
</style>
