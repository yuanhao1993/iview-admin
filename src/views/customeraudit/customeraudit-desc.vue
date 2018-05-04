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

    }

    .audit-modal {
        .audit-modal__status {
            padding: 0 0 20px;
        }
        .audit-modal__conten {

            .audit-modal__content__note {
                textarea {
                    border: none;
                    outline: none;
                    resize: none;
                    &:focus {
                        outline: none !important;
                        box-shadow: none;
                    }
                }
                .ivu-card-body {
                    padding: 0;
                }
            }
        }
    }
</style>
<template>
    <div class="customer-desc">
        <customer-detail :id="customer"></customer-detail>
        <div class="fix-button-group">
            <i-button class="button" type="primary" @click="showBackListModal = true">加入黑名单</i-button>
            <i-button class="button" type="primary" @click="showAuditModal = true">审核</i-button>
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
        <Modal
                v-model="showBackListModal"
                title="加入黑名单"
                width="60%"
                @on-ok=""
                ok-text="提交"
                :loading="submitBackListLoadding"
                cancel-text="关闭"
                class="audit-modal"
        >
            <div class="audit-modal__conten">
                <Row :gutter="15">
                    <i-col :span="24" class="audit-modal__content__note">
                        <i-input
                                v-model.sync="backListNote"
                                type="textarea"
                                :rows="6"
                                :autosize="{minRows: 6,maxRows:6}"
                                placeholder="请写明加入黑名单的原因"
                        ></i-input>
                    </i-col>
                </Row>
            </div>

            <div slot="footer">
                <Button type="primary" size="large" :loading="submitBackListLoadding" @click="submitBackList">加入黑名单
                </Button>
            </div>
        </Modal>
    </div>
</template>

<script>
    import {loadCustomerById} from '@/api/customer';
    import {loadById, fetchUserList, update} from '@/api/customeraudit';
    import customerDetail from '@/views/customer/components/customerDetail';

    export default {
        data() {
            return {
                showAuditModal: false,
                showBackListModal: false,
                submitAuditMsgLoadding: false,
                customer: this.id,
                customeraudit: null,
                // 审核状态
                audit_status: 2,
                // 笔记
                note: '',
                // 用户列表
                userList: [],
                // 指定用户
                next_user: null,
                backListNote: ''
            };
        },
        props: ['id'],
        components: {
            customerDetail
        },
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
                        this.showAuditModal = false;
                        this.$Notice.success({
                            title: '操作成功',
                            desc: '您已经成功完成对该用户的信息审核'
                        });
                    });
            },
            submitBackList() {
                if (this.backListNote === '') {
                    this.$Message.warning('您没有写明将此人加入黑名单的原因');
                    this.submitBackListLoadding = false;
                    return null;
                }
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
