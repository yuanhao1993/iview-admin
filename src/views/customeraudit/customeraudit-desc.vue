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
        <customer-detail :id="id"></customer-detail>
    </div>
</template>

<script>
    import customerDetail from '@/views/customer/components/customerDetail';
    import AddBlack from '../customer/components/addBlack';
    import AuditCustomer from '../customer/components/auditCustomer';

    export default {
        data() {
            return {
                id: this.id,
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
        },
        mounted() {
        },
        created() {
        }
    };
</script>
