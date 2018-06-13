<template>
  <div class="layout">
        <Layout>
            <Header>
                <Row>
        <Col span="21">
        <Menu mode="horizontal" theme="primary" active-name="1" @on-select="go">
                    <div class="layout-logo">
                      海尔洲际
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="myWork">
                            <Icon type="ios-navigate"></Icon>
                          我的工作
                        </MenuItem>
                        <MenuItem name="orgPlanning">
                            <Icon type="ios-keypad"></Icon>
                            组织规划
                        </MenuItem>
                        <MenuItem name="personMagt">
                            <Icon type="ios-analytics"></Icon>
                            人事管理
                        </MenuItem>
                        <MenuItem name="timeMagt">
                            <Icon type="ios-paper"></Icon>
                            时间管理
                        </MenuItem>
                         <MenuItem name="remunerationMagt">
                            <Icon type="ios-navigate"></Icon>
                          薪酬管理
                        </MenuItem>
                        <MenuItem name="cateringMagt">
                            <Icon type="ios-keypad"></Icon>
                            餐饮管理
                        </MenuItem>
                        <MenuItem name="trainingMagt">
                            <Icon type="ios-analytics"></Icon>
                            培训管理
                        </MenuItem>
                    </div>
                </Menu>
                </Col>
        <Col span="3">
            <span class="userName">张明明</span>
            <Button size="small" shape="circle">退出登录</Button>
        </Col>
    </Row>
                

            </Header>
            <router-view/>
        </Layout>
        
    </div>
</template>

<script>

export default {
    name: 'mainNav',
    methods: {
        go(name){
            this.$router.push('/'+name)
            console.log(name)
        }
        
    }
}
</script>
<style>
    .userName {
        line-height: 60px;
        font-size: 14px;
        color: #fff;
        font-weight: 700;
        margin-right: 10px;
    }
</style>
