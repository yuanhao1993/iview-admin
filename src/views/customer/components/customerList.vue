<style scoped lang="less">
    .customermodel {
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
        .ivu-table-wrapper {
            margin: 0 10px;
        }
    }
</style>
<template>
    <div class="customermodel" ref="channel">
        <Row type="flex" class="search">
            <col span="8" ref="search" type="flex" justify="start">
                <Input v-model="searchText" placeholder="姓名..." style="width: 30%"/>
                <i-button @click="getlist" type="default" icon="ios-search">筛选</i-button>
            </col>
            <!--<Col span="12" style="margin-left: 15px">-->
              <!--<DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>-->
              <!--<i-button type="default" icon="ios-search">时间段筛选</i-button>-->
            <!--</Col>-->
        </Row>

        <Table class="table"
               :height.sync="tableHeight"
               :loading="dataLoading"
               :columns="columns"
               :data="dataList">
        </Table>

        <Row type="flex" justify="end">
            <i-col span="12" class="margin-bottom-20">
                <div class="page" ref="page">
                    <Page :total="total" @on-change="pageChange"></Page>
                </div>
            </i-col>
        </Row>
    </div>
</template>

<script>
    import {fetch, fetchcheckWays, newChannel, editChannel, fetchChCurrt, deleteChannel} from '@/api/customer';
    import {customerStatus} from '@/libs/util';

    export default {
        name: 'customerList',
        data() {
            console.log(this.customer_detail);
            return {
                dataLoading: true,
                searchText: '',
                dataList: [],
                newUserFlag: false,
                editUserFlag: false,
                total: null,
                checkways: [],
                editChaId: '',
                newform: {
                    name: '',
                    check_ways: []
                },
                editform: {
                    name: '',
                    check_ways: []
                },
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '渠道名称',
                        key: 'channel__name'
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
                        title: '身份证号',
                        key: 'identity'
                    },
                    {
                        title: '芝麻信用分',
                        key: 'zhima_score'
                    },
                    {
                        title: '审核人',
                        key: 'audit_user',
                        render: (h, {row, column, index}) => {
                            const {id, username: uerName} = row.audit_user
                            return h('span', {
                                attrs: {
                                    title: uerName
                                }
                            }, uerName);
                        }
                    },
                    {
                        title: '放款人',
                        key: 'loan_user',
                        render: (h, {row, column, index}) => {
                            const {id, username: uerName} = row.loan_user
                            return h('span', {
                                attrs: {
                                    title: uerName
                                }
                            }, uerName);
                        }
                    },
                    {
                        title: '追款人',
                        key: 'urge_user',
                        render: (h, {row, column, index}) => {
                            const {id, username: uerName} = row.urge_user
                            return h('span', {
                                attrs: {
                                    title: uerName
                                }
                            }, uerName);
                        }
                    },
                    {
                        title: '审核状态',
                        key: 'audit_status',
                        render: (h, {row, column, index}) => {
                            let status = customerStatus[row.audit_status];
                            return h('span', {
                                attrs: {
                                    title: status
                                }
                            }, status);
                        }
                    },
                    {
                        title: '申请时间',
                        key: 'create_time'
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
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.$router.push({
                                                name: this.customer_detail,
                                                params: {
                                                    id: params.row.id
                                                }
                                            });
                                        }
                                    }
                                }, '查看详情')
                            ]);
                        }
                    }
                ],
                tableHeight: 'auto'
            };
        },
        computed: {},
        created() {
            this.getlist(0);
            this.getcheckWays();
        },
        props: ['customer_detail'],
        methods: {
            getlist(index) {
                this.dataLoading = true;
                fetch({
                    limit: 10,
                    offset: 10 * index,
                    search: this.searchText
                }).then(res => {
                    this.dataList = res.data.results;
                    this.total = res.data.count;
                    this.dataLoading = false;
                }).catch();
            },
            pageChange(index) {
                this.getlist(index - 1);
            },
            editData(id) {
                this.editUserFlag = true;
                this.editChaId = id;
                fetchChCurrt(id).then(res => {
                    let currtCh = res.data;
                    this.editform.name = currtCh.name;
                    this.editform.check_ways = currtCh.check_ways;
                });
            },
            delData(editChaId) {
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>您确定要删除该条数据？</p>',
                    onOk: () => {
                        deleteChannel(editChaId).then(res => {
                            this.getlist();
                        });
                        this.$Notice.success({
                            title: '提示',
                            desc: '数据删除成功'
                        });
                    },
                    onCancel: () => {
                    }
                });
            },
            getcheckWays() {
                fetchcheckWays().then(response => {
                    this.checkways = response.data.results;
                });
            },
            newUser() {
                this.newUserFlag = true;
                //
                this.editform.name = '';
                this.editform.check_ways = [];
            },
            confirmUser() {
                this.newUserFlag = false;
                newChannel(this.newform).then(response => {
                    this.getlist();
                });
            },
            cancelUser() {
                this.newUserFlag = false;
            },
            confirmEdit(editChaId) {
                this.editUserFlag = false;
                editChannel(editChaId, this.editform).then(response => {
                    this.getlist();
                    this.$Notice.success({
                        title: '提示',
                        desc: '数据修改成功'
                    });
                    // this.$Message.info('数据修改成功');
                });
            },
            cancelEdit() {
                this.editUserFlag = false;
            }
        },
        mounted() {
            //this.tableHeight = this.$refs.channel.clientHeight - this.$refs.page.clientHeight - this.$refs.search.clientHeight;
        }
    };
</script>