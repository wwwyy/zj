<template>
  <div id="salaryGeneration">
       <Row>
        <Col span="6">
            <Row>
                <Col span="6" style="line-height:32px;">
                    月份
                </Col>
                <Col span="18">
                    <DatePicker type="month" placeholder="选择月份" style="width: 200px"></DatePicker>
                </Col>
            </Row>
        </Col>
        <Col span="6">
            <Tag color="blue" style="height:30px;line-height:30px;">2018-02-21 ~ 2018-03-20</Tag>
        </Col>
        <!-- <Col span="6">
             <Button type="primary">Primary</Button>
        </Col> -->
        <Col span="6" offset="6">
             <Button type="primary">生成/查询月度薪资</Button>
             <Button>重新生成月度薪资</Button>
        </Col>
    </Row>
    <Table :columns="columns8" :data="data7" border size="small" ref="table" style="font-size:12px;text-align:center;"></Table>
    <br>
    <Button type="primary" size="large" @click="exportData(1)"><Icon type="ios-download-outline"></Icon>导  出</Button>
  </div>
</template>

<script>
export default {
  data () {
            return {
                columns8: [
                    {
                        "title": "工号",
                        "key": "id",
                        "fixed": "left",
                        "width": 80,
                    },
                    {
                        "title": "姓名",
                        "key": "name",
                        "fixed": "left",
                        "width": 100,
                    },
                    {
                        "title": "岗位",
                        "key": "post",
                        "width": 90,
                    },
                    {
                        "title": "职级",
                        "key": "level",
                        "width": 90,
                    },
                    {
                        "title": "合同工资",
                        "key": "contractSalary",
                        "width": 90,
                    },
                    {
                        "title": "本月薪金",
                        "key": "thisMonthSalary",
                        "width": 90,
                    },
                    {
                        "title": "班次补贴",
                        "key": "classAllowance",
                        "width": 90,
                    },
                    {
                        "title": "加班费",
                        "key": "overtimePay",
                        "width": 90,
                    },
                    {
                        "title": "考勤工资调整",
                        "key": "wageAdjustment",
                        "width": 90,
                    },
                    {
                        "title": "奖金",
                        "key": "bonus",
                        "width": 90,
                    },
                    {
                        "title": "税前调整",
                        "key": "taxAdjustment",
                        "width": 90,
                    },
                    {
                        "title": "病假扣款",
                        "key": "sickDeductMoney",
                        "width": 90,
                    },
                    {
                        "title": "缺勤扣款",
                        "key": "absenceDeductMoney",
                        "width": 90,
                    },
                    {
                        "title": "应发工资（税前）",
                        "key": "wagePayable",
                        "width": 100,
                    },
                    {
                        "title": "养老保险",
                        "key": "pension",
                        "width": 100,
                    },
                    {
                        "title": "医疗保险",
                        "key": "medicalInsurance",
                        "width": 100,
                    },
                    {
                        "title": "医疗保险",
                        "key": "UnemInsurance",
                        "width": 100,
                    },
                    {
                        "title": "公积金",
                        "key": "providentFund",
                        "width": 100,
                    },
                    {
                        "title": "所得税",
                        "key": "incomeTax",
                        "width": 100,
                    },
                    {
                        "title": "税后调整",
                        "key": "postTaxAdjustment",
                        "width": 100,
                    },
                    {
                        "title": "实发工资（税后）",
                        "key": "realWages",
                        "width": 100
                    }
                ],
                data7: [
                    {
                        "id": '10030',
                        "name": "Name1",
                        "fav": 0,
                        "show": 7302,
                        "weak": 5627,
                        "signin": 1563,
                        "click": 4254,
                        "active": 1438,
                        "day7": 274,
                        "day30": 285,
                        "tomorrow": 1727,
                        "day": 558,
                        "week": 4440,
                        "month": 5610
                    },
                    {
                        "name": "Name2",
                        "fav": 0,
                        "show": 4720,
                        "weak": 4086,
                        "signin": 3792,
                        "click": 8690,
                        "active": 8470,
                        "day7": 8172,
                        "day30": 5197,
                        "tomorrow": 1684,
                        "day": 2593,
                        "week": 2507,
                        "month": 1537
                    },
                    {
                        "name": "Name3",
                        "fav": 0,
                        "show": 7181,
                        "weak": 8007,
                        "signin": 8477,
                        "click": 1879,
                        "active": 16,
                        "day7": 2249,
                        "day30": 3450,
                        "tomorrow": 377,
                        "day": 1561,
                        "week": 3219,
                        "month": 1588
                    },
                    {
                        "name": "Name4",
                        "fav": 0,
                        "show": 9911,
                        "weak": 8976,
                        "signin": 8807,
                        "click": 8050,
                        "active": 7668,
                        "day7": 1547,
                        "day30": 2357,
                        "tomorrow": 7278,
                        "day": 5309,
                        "week": 1655,
                        "month": 9043
                    },
                    {
                        "name": "Name5",
                        "fav": 0,
                        "show": 934,
                        "weak": 1394,
                        "signin": 6463,
                        "click": 5278,
                        "active": 9256,
                        "day7": 209,
                        "day30": 3563,
                        "tomorrow": 8285,
                        "day": 1230,
                        "week": 4840,
                        "month": 9908
                    },
                    {
                        "name": "Name6",
                        "fav": 0,
                        "show": 6856,
                        "weak": 1608,
                        "signin": 457,
                        "click": 4949,
                        "active": 2909,
                        "day7": 4525,
                        "day30": 6171,
                        "tomorrow": 1920,
                        "day": 1966,
                        "week": 904,
                        "month": 6851
                    },
                    {
                        "name": "Name7",
                        "fav": 0,
                        "show": 5107,
                        "weak": 6407,
                        "signin": 4166,
                        "click": 7970,
                        "active": 1002,
                        "day7": 8701,
                        "day30": 9040,
                        "tomorrow": 7632,
                        "day": 4061,
                        "week": 4359,
                        "month": 3676
                    },
                    {
                        "name": "Name8",
                        "fav": 0,
                        "show": 862,
                        "weak": 6520,
                        "signin": 6696,
                        "click": 3209,
                        "active": 6801,
                        "day7": 6364,
                        "day30": 6850,
                        "tomorrow": 9408,
                        "day": 2481,
                        "week": 1479,
                        "month": 2346
                    },
                    {
                        "name": "Name9",
                        "fav": 0,
                        "show": 567,
                        "weak": 5859,
                        "signin": 128,
                        "click": 6593,
                        "active": 1971,
                        "day7": 7596,
                        "day30": 3546,
                        "tomorrow": 6641,
                        "day": 1611,
                        "week": 5534,
                        "month": 3190
                    },
                    {
                        "name": "Name10",
                        "fav": 0,
                        "show": 3651,
                        "weak": 1819,
                        "signin": 4595,
                        "click": 7499,
                        "active": 7405,
                        "day7": 8710,
                        "day30": 5518,
                        "tomorrow": 428,
                        "day": 9768,
                        "week": 2864,
                        "month": 5811
                    }
                ]
            }
        },
        methods: {
            exportData (type) {
                if (type === 1) {
                    this.$refs.table.exportCsv({
                        filename: 'The original data'
                    });
                } else if (type === 2) {
                    this.$refs.table.exportCsv({
                        filename: 'Sorting and filtering data',
                        original: false
                    });
                } else if (type === 3) {
                    this.$refs.table.exportCsv({
                        filename: 'Custom data',
                        columns: this.columns8.filter((col, index) => index < 4),
                        data: this.data7.filter((data, index) => index < 4)
                    });
                }
            }      
        }
}
</script>

