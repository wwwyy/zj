<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  min-width: 1400px;
  margin: 0 auto;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.layout{
     border: 1px solid #d7dde4;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    line-height: 64px;
    height: 64px;
    font-size: 24px;
    /* background: #000; */
    color: #fff;
    border-radius: 3px;
    float: left;
    position: relative;
}
.layout-nav{
    margin-left: 200px;
}
.ivu-layout-header {
  background: #2d8cf0;
}

</style>
