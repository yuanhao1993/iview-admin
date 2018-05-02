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
            }
        }

    }

    .audit-modal {
        .audit-modal__status {
            padding: 0 0 20px;
        }
        .audit-modal__conten {

            .audit-modal__content__note {
                .ivu-card-body {
                    padding: 0;
                    textarea {
                        border: none;
                        outline: none;
                        resize: none;
                        &:focus {
                            outline: none !important;
                            box-shadow: none;
                        }
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="customer-desc">
        <Tabs class="customer-desc__tabs">
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
            <Tab-pane label="咨询云报告" icon="social-tux">
                <div style="margin-top: 15%;text-align: center;font-size: 20px;">
                    暂 未 开 通
                </div>
            </Tab-pane>
            <Tab-pane label="反欺诈云报告" icon="social-tux">
                <div style="margin-top: 15%;text-align: center;font-size: 20px;">
                    暂 未 开 通
                </div>
            </Tab-pane>
        </Tabs>
        <div class="fix-button-group">
            <Button class="button" type="primary" @click="showAuditModal = true">审核</Button>
        </div>

        <!--审核模态框-->
        <Modal
                v-model="showAuditModal"
                title="客户审核"
                width="60%"
                @on-ok=""
                ok-text="提交"
                :loading="submitAuditMsgLoadding"
                cancel-text="关闭"
                class="audit-modal"
        >
            <div class="audit-modal__status">
                <RadioGroup v-model="audit_status">
                    <Radio :label="2">
                        <Icon type="social-apple"></Icon>
                        <span>拒绝受理</span>
                    </Radio>
                    <Radio :label="3">
                        <Icon type="social-android"></Icon>
                        <span>审核通过</span>
                    </Radio>
                    <Radio :label="4">
                        <Icon type="social-android"></Icon>
                        <span>需要复审</span>
                    </Radio>
                </RadioGroup>
            </div>
            <div class="audit-modal__conten">
                <Row :gutter="15">
                    <i-col :span="audit_status == 2 ? 24 : 16" class="audit-modal__content__note">
                        <Card>
                            <p slot="title">
                                <Icon type="ios-film-outline"></Icon>
                                审核笔记
                            </p>
                            <i-input
                                    v-model.sync="note"
                                    type="textarea"
                                    :rows="6"
                                    :autosize="{minRows: 6,maxRows:6}"
                                    placeholder="记录一下笔记审核笔记吧"
                            ></i-input>
                        </Card>
                    </i-col>
                    <i-col :span="8" class="audit-modal__content__note" v-if="audit_status != 2">
                        <p style="font-size: 14px;color: #1c2438;font-weight: 700;margin-bottom: 10px;">指定人员</p>

                        <Select v-model="next_user">
                            <Option v-for="item in userList" :value="item.id" :key="item.id">{{item.name}}</Option>
                        </Select>
                    </i-col>
                </Row>
            </div>

            <div slot="footer">
                <Button type="primary" size="large" :loading="submitAuditMsgLoadding" @click="submitAuditMsg">提交审核
                </Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {loadCustomerById} from '@/api/customer';
    import {loadById, fetchUserList, update} from '@/api/customeraudit';

    export default {
        data() {
            return {
                showAuditModal: false,
                submitAuditMsgLoadding: false,
                customer: null,
                customeraudit: null,
                // 审核状态
                audit_status: 2,
                // 笔记
                note: '',
                // 用户列表
                userList: [],
                // 指定用户
                next_user: null
            };
        },
        props: ['id'],
        components: {},
        computed: {},
        methods: {
            submitAuditMsg() {
                if (this.note === '') {
                    this.$Message.warning('您的笔记还没写喔~~赶紧去写笔记吧');
                    this.submitAuditMsgLoadding = false;
                    return null;
                }
                if (this.next_user === null && this.audit_status !== 2) {
                    this.$Message.warning('您还没有指定下一个人呢!');
                    this.submitAuditMsgLoadding = false;
                    return null;
                }
                let data = {
                    audit_status: this.audit_status,
                    note: this.note
                }
                if (this.audit_status !== 2) {
                    Object.assign(data, {
                        next_user: this.next_user
                    });
                }
                update(this.id, data)
                    .then(res => {
                        console.log(res);
                        this.$Notice.success({
                            title: '操作成功',
                            desc: '您已经成功完成对该用户的信息审核'
                        });
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
            loadById(this.id)
                .then(res => {
                    this.customeraudit = res.data;
                });
            fetchUserList()
                .then(res => {
                    this.userList = res.data.results;
                });
        }
    };
</script>
