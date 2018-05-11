<template>
  <div id="depPlanning">
      <Row type="flex" justify="space-around">
        <Col span="11" class="contentBox" style="background: #f5f7f9;" >
           <Tree :data="data3" :load-data="loadData" show-checkbox style="padding-top:60px;text-align:left;padding-left:60px"></Tree>
        </Col>
        <Col span="11" class="contentBox" style="background: #f5f7f9;" >
            <div>col-6</div>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
     data () {
            return {
                data3: [
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    },
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    },
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    },
                    {
                        title: 'parent',
                        loading: false,
                        children: []
                    }
                ]
            }
        },
        methods: {
            loadData (item, callback) {
                setTimeout(() => {
                    const data = [
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        },
                        {
                            title: 'children',
                            loading: false,
                            children: []
                        }
                    ];
                    callback(data);
                }, 1000);
            }
        }
}
</script>
<style>
    #depPlanning .contentBox {
        min-height: 700px;
    }
    #depPlanning .blank {
        background: #fff;
    }
    #depPlanning .ivu-tree ul {
        font-size: 20px;
        /* text-align: left;
        margin-left: 60px;
        margin-top: 60px; */
    }
</style>
