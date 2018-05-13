<template>
  <div id="depPlanning">
      <Row type="flex" justify="space-around">
        <Col span="11" class="contentBox" style="background: #f5f7f9;" >
           <Tree :data="data3" :load-data="loadData" :render="renderContent" style="padding-top:60px;text-align:left;padding-left:60px"></Tree>
        </Col>
        <Col span="11" class="contentBox" style="background: #f5f7f9;padding: 60px 20px 0;" >
            <div>
            <i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                <form-item label="上级部门" prop="mail" >
            <i-input v-model="formValidate.mail" readonly placeholder="Enter your e-mail"></i-input>
        </form-item>
        <form-item label="是否分部" prop="city">
            <i-select v-model="formValidate.city" placeholder="Select your city">
                <i-option value="beijing">New York</i-option>
                <i-option value="shanghai">London</i-option>
                <i-option value="shenzhen">Sydney</i-option>
            </i-select>
        </form-item>
        <form-item label="部门名称" prop="name">
            <i-input v-model="formValidate.name" placeholder="Enter your name"></i-input>
        </form-item>

        
        
        <form-item label="部门信息" prop="desc">
            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>
        </form-item>
        <form-item>
            <i-button type="primary" @click="handleSubmit('formValidate')" size="large" style="width:100px"> 保 存 </i-button>
            <i-button type="ghost" @click="handleReset('formValidate')" size="large" style="width:100px;margin-left: 8px"> 清 空 </i-button>
        </form-item>
    </i-form>
            </div>
        </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data3: [
        {
          title: "parent 1",
          expand: true,
          render: (h, { root, node, data }) => {
            return h(
              "span",
              {
                style: {
                  display: "inline-block",
                  width: "100%"
                }
              },
              [
                h("span", [
                  h("Icon", {
                    props: {
                      type: "ios-folder-outline"
                    },
                    style: {
                      marginRight: "8px"
                    }
                  }),
                  h("span", data.title)
                ]),
                h(
                  "span",
                  {
                    style: {
                      display: "inline-block",
                      float: "right",
                      marginRight: "32px"
                    }
                  },
                  [
                    h("Button", {
                      props: Object.assign({}, this.buttonProps, {
                        icon: "ios-plus-empty",
                        type: "primary"
                      }),
                      style: {
                        width: "52px"
                      },
                      on: {
                        click: () => {
                          this.append(data);
                        }
                      }
                    })
                  ]
                )
              ]
            );
          },
          children: [
            {
              title: "child 1-1",
              expand: true,
              children: [
                {
                  title: "leaf 1-1-1",
                  expand: true
                },
                {
                  title: "leaf 1-1-2",
                  expand: true
                }
              ]
            },
            {
              title: "child 1-2",
              expand: true,
              children: [
                {
                  title: "leaf 1-2-1",
                  expand: true
                },
                {
                  title: "leaf 1-2-1",
                  expand: true
                }
              ]
            }
          ]
        }
      ],
      buttonProps: {
        type: "ghost",
        size: "small"
      },
      formValidate: {
        name: "",
        mail: "",
        city: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    loadData(item, callback) {
      setTimeout(() => {
        const data = [
          {
            title: "children",
            loading: false,
            children: []
          },
          {
            title: "children",
            loading: false,
            children: []
          }
        ];
        callback(data);
      }, 1000);
    },
    renderContent(h, { root, node, data }) {
      return h(
        "span",
        {
          style: {
            display: "inline-block",
            width: "100%"
          }
        },
        [
          h("span", [
            h("Icon", {
              props: {
                type: "ios-paper-outline"
              },
              style: {
                marginRight: "8px"
              }
            }),
            h("span", data.title)
          ]),
          h(
            "span",
            {
              style: {
                display: "inline-block",
                float: "right",
                marginRight: "32px"
              }
            },
            [
              h("Button", {
                props: Object.assign({}, this.buttonProps, {
                  icon: "ios-plus-empty"
                }),
                style: {
                  marginRight: "8px"
                },
                on: {
                  click: () => {
                    this.append(data);
                  }
                }
              }),
              h("Button", {
                props: Object.assign({}, this.buttonProps, {
                  icon: "ios-minus-empty"
                }),
                on: {
                  click: () => {
                    this.remove(root, node, data);
                  }
                }
              })
            ]
          )
        ]
      );
    },
    append(data) {
      const children = data.children || [];
      children.push({
        title: "appended node",
        expand: true
      });
      this.$set(data, "children", children);
    },
    remove(root, node, data) {
      const parentKey = root.find(el => el === node).parent;
      const parent = root.find(el => el.nodeKey === parentKey).node;
      const index = parent.children.indexOf(data);
      parent.children.splice(index, 1);
    },
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    },
    handleReset(name) {
      this.$refs[name].resetFields();
    }
  }
};
</script>
<style>
#depPlanning .contentBox,
#postPlanning .contentBox {
  min-height: 700px;
}
#depPlanning .blank,
#postPlanning .blank {
  background: #fff;
}
#depPlanning .ivu-tree ul,
#postPlanning .ivu-tree ul {
  font-size: 20px;
  /* text-align: left;
        margin-left: 60px;
        margin-top: 60px; */
}
</style>
