<style scoped lang="less">
    .channel {
      height: 100%;
      overflow: auto;
      .search {
        padding: 15px;
      }
      .page {
        padding: 20px 0;
        text-align: right;
        margin-right: 25px;
      }
      .margin-bottom-20 {
        margin-bottom: 20px;
      }
      .ivu-table-wrapper{
        margin:0 10px;
      }
    }
</style>
<template>
    <div class="channel" ref="channel">
      <Row type="flex" class="search">
        <Col span="8" ref="search" type="flex" justify="start">
          <Input v-model="searchText" placeholder="姓名..." style="width: 60%"/>
          <i-button @click="getlist" type="default" icon="ios-search">筛选</i-button>
        </Col>
      </Row>

        <Table class="table" :height.sync="tableHeight" :loading="dataLoading" :columns="columns"
               :data="dataList">
        </Table>
        <Row type="flex" justify="end">
          <Col span="12" class="margin-bottom-20">
            <div class="page" ref="page">
              <Page :total="total" @on-change="pageChange"></Page>
            </div>
          </Col>
        </Row>

    </div>
</template>

<script>
    import {fetchBlack, outCurrt} from '@/api/black';

    export default {
        name: 'channel-table',
        data() {
            return {
                dataLoading: true,
                searchText: '',
                dataList: [],
                total: null,
                audit_user: [],
                loan_user: [],
                urge_user: [],
                editChaId: '',
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '电话',
                        key: 'tel'
                    },
                    {
                        title: '微信',
                        key: 'wechat'
                    },
                    {
                        title: '地址',
                        key: 'address'
                    },
                    {
                        title: '身份证号',
                        key: 'identity'
                    },
                    {
                        title: '芝麻分',
                        key: 'zhima_score'
                    },
                    {
                        title: '渠道来源',
                        key: 'channel__name'
                    },
                    {
                        title: '加入黑名单原因',
                        key: 'blcak_reason'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.delData(params.row.id);
                                        }
                                    }
                                }, '移除黑名单')
                            ]);
                        }
                    }
                ],
                tableHeight: 'auto',
                ruleValidate: {
                    name: [
                        {required: false, message: '姓名不能为空', trigger: 'blur'}
                    ],
                    submit: [
                        {required: false, type: 'array', min: 1, message: '至少选择一种认证方式', trigger: 'change'},
                        {type: 'array', max: 2, message: '最多选择两种认证方式', trigger: 'change'}
                    ]
                }
            };
        },
        computed: {},
        created() {
            this.getlist(0);
        },
        methods: {
            getlist(index) {
                this.dataLoading = true;
                fetchBlack({
                    black: true
                }).then(res => {
                    let result = res.data.results.map(item => {
                        let auditUser = item.audit_user.username;
                        let loanUser = item.loan_user.username;
                        let urgeUser = item.audit_user.usernam;
                        return {
                            ...item,
                            audit_user: auditUser,
                            loan_user: loanUser,
                            urge_user: urgeUser
                        };
                    });
//                    console.log('黑名单', res.data.results);
                    this.dataList = result;
                    this.total = res.data.count;
                    this.dataLoading = false;
                }).catch();
            },
            pageChange(index) {
                this.getlist(index - 1);
            },
            delData(id) {
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>您确定要将该人移除黑名单？</p>',
                    onOk: () => {
                        outCurrt(id, {'black_reason': '移除黑名单', 'is_black': false}).then(res => {
                            this.getlist();
                            this.$Notice.success({
                                title: '提示',
                                desc: '移除成功'
                            });
                        })
                    },
                    onCancel: () => {}
                });
            }
        },
        mounted() {
            this.tableHeight = this.$refs.channel.clientHeight - this.$refs.page.clientHeight - this.$refs.search.clientHeight;
        }
    };
</script>