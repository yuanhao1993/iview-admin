<style scoped lang="less">
    .staff {
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
        .width50 {
            width: 60% !important;
        }
    }

</style>
<template>
    <div class="staff" ref="staff">
        <Row type="flex" class="search">
            <Col span="8" ref="search" type="flex" justify="start">
                <Input v-model="searchText" placeholder="姓名..." style="width: 60%"/>
                <i-button @click="getlist" type="default" icon="ios-search">筛选</i-button>
            </Col>
            <Col span="4" type="flex" justify="end">
                <i-button @click="newUser" type="primary">新增</i-button>
            </Col>
        </Row>
        <Table class="table" :loading="dataLoading" :columns="columns1"
               :data="staffList">
        </Table>
        <Row type="flex" justify="end">
            <Col span="6" class="margin-bottom-20">
                <div class="page" ref="page">
                    <Page :total="total" @on-change="pageChange"></Page>
                </div>
            </Col>
        </Row>
        <Modal
                v-model="newUserFlag"
                title="新增员工基本信息"
                @on-ok="confirmUser"
                @on-cancel="cancelUser">
            <div>
                <i-form :model.sync="newform" :label-width="80">
                    <Form-item label="用户名" prop="username">
                        <i-input v-model="newform.username" placeholder="必填。英文字符。包含字母，数字和仅有的@/./+/-/_符号。"
                                 style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="姓名" prop="name">
                        <i-input v-model="newform.name" placeholder="请输入姓名" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="负责渠道">
                        <i-select v-model="newform.channels" multiple placeholder="请选择负责渠道" style="width: 50%">
                            <i-option v-for="item in channel" :value="item.id">{{ item.name}}</i-option>
                        </i-select>
                    </Form-item>
                    <Form-item label="部门名称">
                        <i-select v-model="newform.department" placeholder="请选择部门名称" style="width: 50%">
                            <i-option v-for="item in departments" :value="item.id">{{ item.name}}</i-option>
                        </i-select>
                    </Form-item>
                    <Form-item label="身份证号" prop="identity">
                        <i-input v-model="newform.identity" placeholder="请输入身份证号" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="电话号码" prop="tel">
                        <i-input v-model="newform.tel" placeholder="请输入电话号码" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="QQ" prop="qq">
                        <i-input v-model="newform.qq" placeholder="请输入QQ号" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="微信" prop="wechat">
                        <i-input v-model="newform.wechat" placeholder="请输入微信号" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="密码" prop="password">
                        <i-input v-model="newform.password" placeholder="请输入密码" style="width: 50%"></i-input>
                    </Form-item>
                    <!--<Form-item label="请确认密码" prop="againpassword">-->
                    <!--<i-input v-model="newform.againpassword" placeholder="请再次输入密码" style="width: 50%"></i-input>-->
                    <!--</Form-item>-->
                </i-form>
            </div>
        </Modal>
        <Modal
                v-model="editUserFlag"
                title="修改员工基本信息"
                @on-ok="confirmEdit(staffId)"
                @on-cancel="cancelEdit">
            <div>
                <i-form :model.sync="editform" :label-width="80">
                    <Form-item label="用户名" prop="username">
                        <i-input v-model="editform.username" placeholder="必填。英文字符。包含字母，数字和仅有的@/./+/-/_符号。"
                                 style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="姓名" prop="name">
                        <i-input v-model="editform.name" placeholder="请输入姓名" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="负责渠道">
                        <i-select v-model="editform.channels" placeholder="请选择负责渠道" style="width: 50%">
                            <i-option v-for="item in channel" :value="item.id">{{ item.name}}</i-option>
                        </i-select>
                    </Form-item>
                    <Form-item label="部门名称">
                        <i-select v-model="editform.department" placeholder="请选择部门名称" style="width: 50%">
                            <i-option v-for="item in departments" :value="item.id">{{ item.name}}</i-option>
                        </i-select>
                    </Form-item>
                    <Form-item label="身份证号" prop="identity">
                        <i-input v-model="editform.identity" placeholder="请输入身份证号" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="电话号码" prop="tel">
                        <i-input v-model="editform.tel" placeholder="请输入电话号码" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="QQ" prop="qq">
                        <i-input v-model="editform.qq" placeholder="请输入QQ号" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="微信" prop="wechat">
                        <i-input v-model="editform.wechat" placeholder="请输入微信号" style="width: 50%"></i-input>
                    </Form-item>
                    <Form-item label="密码" prop="password">
                        <i-input v-model="editform.password" placeholder="请输入密码" style="width: 50%"></i-input>
                    </Form-item>
                    <!--<Form-item label="请确认密码" prop="againpassword">-->
                    <!--<i-input v-model="newform.againpassword" placeholder="请再次输入密码" style="width: 50%"></i-input>-->
                    <!--</Form-item>-->
                </i-form>
            </div>
        </Modal>
    </div>
</template>
<script>
    import {fetchStaff, newStaff, editStaff, fetchCurrtStaff, deleteStaff} from '@/api/staff';
    import {fetchchannel} from '@/api/channel';

    export default {
        data() {
            return {
                dataLoading: true,
                searchText: '',
                departments: '',
                total: null,
                columns1: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '姓名',
                        key: 'name'
                    },
                    {
                        title: '部门名称',
                        key: 'department'
                    },
                    {
                        title: '身份证号',
                        key: 'identity'
                    },
                    {
                        title: '电话',
                        key: 'tel'
                    },
                    {
                        title: 'QQ',
                        key: 'qq'
                    },
                    {
                        title: '微信',
                        key: 'wechat'
                    },
                    {
                        title: '有效',
                        key: 'is_active'
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
                departments: [
                    {
                        id: '1',
                        name: '审核部'
                    },
                    {
                        id: '2',
                        name: '财务部'
                    },
                    {
                        id: '3',
                        name: '催收部'
                    }
                ],
                staffList: [],
                channel: [],
                tableHeight: 'auto',
                newUserFlag: false,
                editUserFlag: false,
                newform: {
                    username: '',
                    name: '',
                    channels: [],
                    department: '',
                    identity: '',
                    qq: '',
                    tel: '',
                    wechat: '',
                    password: ''
                },
                editform: {
                    username: '',
                    name: '',
                    channels: [],
                    department: '',
                    identity: '',
                    qq: '',
                    tel: '',
                    wechat: '',
                    password: ''
                },
                staffId: ''
            };
        },
        created() {
            this.getlist(0);
        },
        methods: {
            getlist(index) {
                this.dataLoading = true;
                fetchStaff({
                    limit: 10,
                    offset: 10 * index,
                    search: this.searchText
                }).then(res => {
                    // let result = res.data.results.map(item => {
                    //     let channels=item.channels.map(item=>item.name){
                    //         return{
                    //             ...item,
                    //             channels:channels.join(',')
                    //         }
                    //     }
                    // })
                    this.staffList = res.data.results;
                    console.log(this.staffList);
                    this.total = res.data.count;
                    this.dataLoading = false;
                }).catch();
                fetchchannel().then(response => {
                    this.channel = response.data.results;
                });
            },
            pageChange(index) {
                this.getlist(index - 1);
            },
            newUser() {
                this.newUserFlag = true;
                this.editform = {};
            },
            confirmUser() {
                this.newUserFlag = false;
                newStaff(this.newform).then(response => {
                    this.getlist();
                });
            },
            cancelUser() {
                this.newUserFlag = false;
            },
            confirmEdit(staffId) {
                this.editUserFlag = false;
                editStaff(staffId, this.editform).then(response => {
                    this.getlist();
                    this.$Notice.success({
                        title: '提示',
                        desc: '数据修改成功'
                    });
                });
            },
            cancelEdit() {
                this.editUserFlag = false;
            },
            editData(id) {
                this.editUserFlag = true;
                this.staffId = id;
                fetchCurrtStaff(id).then(res => {
                    let currtStaff = res.data;
                    this.editform = currtStaff;
                    console.log('t', this.editform);
                });
            },
            delData(staffId) {
                this.$Modal.confirm({
                    title: '提示',
                    content: '<p>您确定要删除该条数据？</p>',
                    onOk: () => {
                        deleteStaff(staffId).then(res => {
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
            }
        },
        mounted() {
            // this.tableHeight = this.$refs.staff.clientHeight - this.$refs.page.clientHeight - this.$refs.search.clientHeight
        }

    };
</script>
