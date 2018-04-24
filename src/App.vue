<template>
  <div id="app">
    <div class="layout">
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="primary" active-name="1">
                    <div class="layout-logo">
                      海尔洲际
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                          我的工作
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            组织规划
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            人事管理
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            时间管理
                        </MenuItem>
                         <MenuItem name="5">
                            <Icon type="ios-navigate"></Icon>
                          薪酬管理
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="ios-keypad"></Icon>
                            餐饮管理
                        </MenuItem>
                        <MenuItem name="7">
                            <Icon type="ios-analytics"></Icon>
                            培训管理
                        </MenuItem>
                        <MenuItem name="8">
                            <Icon type="ios-paper"></Icon>
                           系统管理
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <router-view/>
        </Layout>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 1400px;
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
