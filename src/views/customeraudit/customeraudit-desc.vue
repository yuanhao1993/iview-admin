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

        <add-black :addBlackModal="showBackListModal"></add-black>
    </div>
</template>

<script>
    import {loadCustomerById} from '@/api/customer';
    import {loadById, fetchUserList, update} from '@/api/customeraudit';
    import customerDetail from '@/views/customer/components/customerDetail';
    import AddBlack from '@/views//customer/components/addBlack';

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
            AddBlack,
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
                };
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
