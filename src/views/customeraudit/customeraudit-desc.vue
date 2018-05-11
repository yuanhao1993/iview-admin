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
            <i-button class="button" type="primary" @click="showAuditModal=true">审核</i-button>
            <i-button class="button" type="primary" @click="showBackListModal=true">加入黑名单</i-button>
        </div>

        <!--审核模态框-->
        <add-black
                :showBackListModal="showBackListModal"
                :backListNote="backListNote"
                :id="id"
                v-on:cancelBlack="cancelBlack"
                v-on:baclkCommit="baclkCommit"
        ></add-black>
        <audit-customer
                :showModal="showAuditModal"
                v-on:cancelBlack="cancelBlack"
        ></audit-customer>
    </div>
</template>

<script>
    import {loadCustomerById} from '@/api/customer';
    import {loadById, fetchUserList, update} from '@/api/customeraudit';
    import customerDetail from '@/views/customer/components/customerDetail';
    import AddBlack from '../customer/components/addBlack';
    import AuditCustomer from '../customer/components/auditCustomer';

    export default {
        data() {
            return {
                showAuditModal: false,
                showBackListModal: false,
                customer: this.id,
                backListNote: ''
            };
        },
        props: ['id'],
        components: {
            AuditCustomer,
            AddBlack,
            customerDetail
        },
        computed: {},
        methods: {
            cancelBlack() {
                this.showBackListModal = false;
                this.showAuditModal = false;
            },
            baclkCommit() {
                this.$Message.info('成功加入黑名单');
                this.showBackListModal = false;
            },
            audit() {
                this.showAuditModal = true;
            }
        },
        mounted() {
            this.showBackListModal = false;
            this.showAuditModal = false;
        },
        created() {
            loadCustomerById(this.id)
                .then(res => {
                    this.customer = res.data;
                    this.backListNote = this.customer.blcak_reason;
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
