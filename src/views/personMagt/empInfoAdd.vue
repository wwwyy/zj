<template>
    <div id="empInfoAdd">
          <h3 class="formTitle clearfix">
          <span class="formTitle_l">
              新增员工
          </span>
          <span class="formTitle_r">
               <Button type="primary" @click="toBack">
            <Icon type="chevron-left"></Icon>
            返回
        </Button>
          </span>
      </h3>
    <Row>
        <Col span="20">
            <Row>
                <Col span="8">
                    <Row>
                        <Col span="8">
                            员工工号
                        </Col>
                        <Col span="16">
                            <Input v-model="value" placeholder="Enter something..."></Input>
                        </Col>
                    </Row>
                </Col>
                <Col span="8">col-8</Col>
                <Col span="8">col-8</Col>
            </Row>
        </Col>
        <Col span="4">col-8</Col>
    </Row>
    </div>
</template>
<script>
export default {
   data () {
       return {
           value:'1'
       }
   },
    methods:{
        toBack() {
            this.$router.back(-1);
        }
    }
}
</script>
