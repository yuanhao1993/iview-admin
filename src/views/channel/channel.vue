<style scoped lang="less">
    .channel {
        height: 100%;
        overflow: auto;
        .search {
            padding: 15px;
        }
        .page {
            padding: 20px 0;
        }
        .margin-bottom-20 {
            margin-bottom: 20px;
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
            <Col span="4" type="flex" justify="end">
                <i-button @click="newUser" type="primary">新增</i-button>
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
        <Modal
                v-model="newUserFlag"
                title="客户基本信息"
                @on-ok="confirmUser"
                @on-cancel="cancelUser">
            <div>
                <i-form :model="newform" :rules="ruleValidate" :label-width="80">
                    <Form-item label="渠道名称" prop="name">
                        <i-input v-model="newform.name" placeholder="请输入渠道名称"></i-input>
                    </Form-item>
                    <Form-item label="认证方式">
                        <i-select v-model="newform.check_ways" multiple placeholder="请选择(支持多选)">
                            <i-option
                                    v-for="item in checkways"
                                    :value="item.id"
                                    :key="item.id"
                            >
                                {{ item.name}}
                            </i-option>
                        </i-select>
                    </Form-item>
                </i-form>
            </div>
        </Modal>
        <Modal
                v-model="editUserFlag"
                title="修改客户基本信息"
                @on-ok="confirmEdit(editChaId)"
                @on-cancel="cancelEdit">
            <div>
                <i-form :model="editform" :rules="ruleValidate" :label-width="80">
                    <Form-item label="渠道名称" prop="name">
                        <i-input v-model="editform.name" placeholder="请输入渠道名称"></i-input>
                    </Form-item>
                    <Form-item label="认证方式">
                        <i-select v-model="editform.check_ways" multiple placeholder="请选择(支持多选)">
                            <i-option
                                    v-for="item in checkways"
                                    :value="item.id"
                                    :key="item.id"
                            >
                                {{ item.name}}
                            </i-option>
                        </i-select>
                    </Form-item>
                </i-form>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {fetchchannel, fetchcheckWays, newChannel, editChannel, fetchChCurrt, deleteChannel} from '@/api/channel';

    export default {
        name: 'channel-table',
        data() {
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
                        key: 'name'
                    },
                    {
                        title: 'h5链接',
                        key: 'link_h5',
                        ellipsis: true,
                        render: (h, {row, column, index}) => {
                            return h('span', {
                                attrs: {
                                    title: row.link_h5
                                },
                                on: {
                                    click: () => {
                                        const input = document.createElement('input');
                                        document.body.appendChild(input);
                                        input.setAttribute('value', row.link_h5);
                                        input.select();
                                        if (document.execCommand('copy')) {
                                            document.execCommand('copy');
                                            this.$Message.success('复制成功!');
                                        }
                                    }
                                }
                            }, row.link_h5);
                        }
                    },
                    {
                        title: '认证方式',
                        key: 'check_ways'
                    },
                    {
                        title: '创建时间',
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
                                            this.editData(params.row.id);
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.delData(params.row.id);
                                        }
                                    }
                                }, '删除')
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
            this.getcheckWays();
        },
        methods: {
            getlist(index) {
                this.dataLoading = true;
                fetchchannel({
                    limit: 10,
                    offset: 10 * index,
                    search: this.searchText
                }).then(res => {
                    let result = res.data.results.map(item => {
                        let checkWays = item.check_ways_get.map(item => item.name);
                        return {
                            ...item,
                            check_ways: checkWays.join(', ')
                        };
                    });
                    this.dataList = result;
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
            this.tableHeight = this.$refs.channel.clientHeight - this.$refs.page.clientHeight - this.$refs.search.clientHeight;
        }
    };
</script>