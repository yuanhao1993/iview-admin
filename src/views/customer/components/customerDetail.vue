<style lang="less" rel="stylesheet/less">
    .customer-desc {
        height: 100%;
        .customer-desc__tabs {
            .ivu-tabs-bar {
                background-color: #FFFFFF;
            }
            .img-card {
                .ivu-card-body {
                    padding: 0;
                }
                .img-card__content {
                    width: 100%;
                    img {
                        width: 100%;
                        object-fit: cover;
                    }
                }
            }
        }
        .fix-button-group {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50px;
            background-color: #FFFFFF;
            display: flex;
            flex-flow: row nowrap;
            justify-content: flex-end;
            padding: 10px 40px;
            .button {
                width: 100px;
                margin-left: 15px;
                &:first-child {
                    margin-left: 0;
                }
            }
        }
        .audit-cont{
            margin-top: -15%;
            margin-bottom: 15%;
        }
    }
</style>
<template>
    <div class="customer-desc">
        <Tabs class="customer-desc__tabs" :value="tabName" >
            <Tab-pane label="客户基本信息" icon="social-apple">
                <Row :gutter="15">
                    <i-col :span="9">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                基础信息
                            </p>
                            <i-form :label-width="80" style="width: 60%;margin: 0 auto;min-width: 400px;">
                                <Form-item label="姓名">
                                    <i-input :value.sync="customer.name" readonly></i-input>
                                </Form-item>
                                <Form-item label="电话">
                                    <i-input :value.sync="customer.tel" readonly></i-input>
                                </Form-item>
                                <Form-item label="身份证">
                                    <i-input :value.sync="customer.identity" readonly></i-input>
                                </Form-item>
                                <Form-item label="微信">
                                    <i-input :value.sync="customer.wechat" readonly></i-input>
                                </Form-item>
                                <Form-item label="芝麻信用分">
                                    <i-input :value.sync="customer.zhima_score" readonly></i-input>
                                </Form-item>
                                <Form-item label="所在地区">
                                    <i-input :value.sync="customer.zone" readonly></i-input>
                                </Form-item>
                                <Form-item label="详细住址">
                                    <i-input :value.sync="customer.address" readonly></i-input>
                                </Form-item>
                            </i-form>
                        </Card>

                    </i-col>
                    <i-col :span="15">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                图片信息
                            </p>

                            <Row :gutter="15">
                                <i-col :span="8">
                                    <Card class="img-card">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            身份证正面照片
                                        </p>
                                        <div class="img-card__content">
                                            <img :src.sync="customer.idcard_pic">
                                        </div>
                                    </Card>
                                </i-col>
                                <i-col :span="8">
                                    <Card class="img-card">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            身份证反面照片
                                        </p>
                                        <div class="img-card__content">
                                            <img :src.sync="customer.idcard_backpic">
                                        </div>
                                    </Card>
                                </i-col>
                                <i-col :span="8">
                                    <Card class="img-card">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            手持身份证照片
                                        </p>
                                        <div class="img-card__content">
                                            <img :src.sync="customer.idcard_people_pic">
                                        </div>
                                    </Card>
                                </i-col>
                            </Row>
                        </Card>
                    </i-col>
                </Row>
            </Tab-pane>
            <Tab-pane label="客户补充信息" icon="social-windows">
                <Row :gutter="15">
                    <i-col :span="9">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                亲属联系人信息
                            </p>
                            <i-form :label-width="80" style="width: 60%;margin: 0 auto;min-width: 400px;">
                                <Form-item label="父亲姓名">
                                    <i-input :value.sync="customer.father_name" readonly></i-input>
                                </Form-item>
                                <Form-item label="父亲电话">
                                    <i-input :value.sync="customer.father_tel" readonly></i-input>
                                </Form-item>
                                <Form-item label="母亲姓名">
                                    <i-input :value.sync="customer.mother_name" readonly></i-input>
                                </Form-item>
                                <Form-item label="母亲电话">
                                    <i-input :value.sync="customer.mother_tel" readonly></i-input>
                                </Form-item>
                            </i-form>
                        </Card>
                        <Card style="margin-top: 15px;">
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                朋友联系人信息
                            </p>
                            <i-form :label-width="80" style="width: 60%;margin: 0 auto;min-width: 400px;">
                                <Form-item label="朋友姓名">
                                    <i-input :value.sync="customer.friend_name" readonly></i-input>
                                </Form-item>
                                <Form-item label="朋友电话">
                                    <i-input :value.sync="customer.friend_tel" readonly></i-input>
                                </Form-item>
                                <Form-item label="同事姓名">
                                    <i-input :value.sync="customer.colleague_name" readonly></i-input>
                                </Form-item>
                                <Form-item label="同事电话">
                                    <i-input :value.sync="customer.colleague_tel" readonly></i-input>
                                </Form-item>
                            </i-form>
                        </Card>
                        <Card style="margin-top: 15px;">
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                企业信息
                            </p>
                            <i-form :label-width="80" style="width: 60%;margin: 0 auto;min-width: 400px;">
                                <Form-item label="公司名称">
                                    <i-input :value.sync="customer.company_name" readonly></i-input>
                                </Form-item>
                                <Form-item label="公司电话">
                                    <i-input :value.sync="customer.company_tel" readonly></i-input>
                                </Form-item>
                                <Form-item label="公司地址">
                                    <i-input :value.sync="customer.company_address" readonly></i-input>
                                </Form-item>
                                <Form-item label="薪水">
                                    <i-input :value.sync="customer.company_salary" readonly></i-input>
                                </Form-item>
                            </i-form>
                        </Card>
                    </i-col>
                    <i-col :span="15">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                图片信息
                            </p>

                            <Row :gutter="15">
                                <i-col :span="12">
                                    <Card class="img-card">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            支付宝管理页
                                        </p>
                                        <div class="img-card__content">
                                            <img :src.sync="customer.zfb_manage_pic">
                                        </div>
                                    </Card>
                                </i-col>
                                <i-col :span="12">
                                    <Card class="img-card">
                                        <p slot="title">
                                            <Icon type="ios-film-outline"></Icon>
                                            支付宝芝麻信用分数页
                                        </p>
                                        <div class="img-card__content">
                                            <img :src.sync="customer.zfb_score_pic">
                                        </div>
                                    </Card>
                                </i-col>
                            </Row>
                        </Card>
                    </i-col>
                </Row>
            </Tab-pane>
            <Tab-pane label="审核笔记" icon="social-windows">
                <Row :gutter="15">
                    <i-col :span="8">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                审核笔记
                            </p>
                            <div>
                                {{customer.audit_user && customer.audit_user.note}}
                            </div>
                        </Card>
                    </i-col>
                    <i-col :span="8">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                放款笔记
                            </p>
                            <div>
                                {{customer.loan_user && customer.loan_user.note}}
                            </div>
                        </Card>
                    </i-col>
                    <i-col :span="8">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                追款笔记
                            </p>
                            <div>
                                {{customer.urge_user && customer.urge_user.note}}
                            </div>
                        </Card>
                    </i-col>
                </Row>
            </Tab-pane>
            <Tab-pane label="咨询云报告" icon="social-tux"
                      @click="show">
                <iframe v-bind:srcdoc="report" width="100%" height="100%" frameborder="0">
                </iframe>
            </Tab-pane>
            <Tab-pane label="反欺诈云报告" icon="social-tux">
                <div style="margin-top: 15%;text-align: center;font-size: 20px;">
                    暂 未 开 通
                </div>
            </Tab-pane>
        </Tabs>
        <div class="audit-cont">
            <audit-customer :id="id"></audit-customer>
        </div>

        <div class="fix-button-group">
            <i-button class="button" type="primary" v-if="showReport"  @click="scrapyReport">采集资信云报告</i-button>
            <i-button class="button" type="primary" @click="showBackListModal=true">加入黑名单</i-button>
        </div>
        <!--加入黑名单模态框-->
        <add-black
                :showBackListModal="showBackListModal"
                :backListNote="customer.blcak_reason"
                :id="id"
                v-on:cancelBlack="cancelBlack"
                v-on:baclkCommit="baclkCommit"
        ></add-black>
    </div>
</template>

<script>
    import {loadCustomerById, fetchZxyReport} from '@/api/customer';
    import AddBlack from './addBlack';
    import AuditCustomer from './auditCustomer';
    // import ajaxUrl from '@/libs/util';

    export default {
        name: 'customerDetail',
        data() {
            return {
                customer: null,
                report: null,
                showBackListModal: false,
                backListNote: '',
                id: this.id,
                tabName: '客户基本信息',
                showReport: true
            };
        },
        props: ['id'],
        components: {AuditCustomer, AddBlack},
        computed: {},
        methods: {
            cancelBlack() {
                this.showBackListModal = false;
            },
            baclkCommit() {
                this.$Message.info('成功加入黑名单');
                this.showBackListModal = false;
            },
            show() {
                console.log('0000', this.showReport);
                this.showReport = true;
            },
            scrapyReport() {
                this.$Modal.confirm({
                    title: '采集确认',
                    content: '<p>采集报告将扣除3个智能豆</p>',
                    onOk: () => {
                        fetchZxyReport(this.id, {scrapy: true}).then(res => {
                            this.report = res.data;
                        });
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            }
        },
        mounted() {
        },
        created() {
            loadCustomerById(this.id)
                .then(res => {
                    this.customer = res.data;
                });
            fetchZxyReport(this.id).then(res => {
                this.report = res.data;
            });
        }
    };
</script>
