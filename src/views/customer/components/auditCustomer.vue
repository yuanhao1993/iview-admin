<style>
    .audit-customer {
        padding: 25px;
        .audit-modal__conten{
          margin-top: 25px;
        }
    }
</style>
<template>
    <div class="audit-customer">
            <div class="audit-modal__status">
                <Select v-model="audit_status" style="width:200px">
                    <Option v-for="item in auditStatus" :value="item.value" :key="item.value">{{ item.value }}</Option>
                </Select>
            </div>
            <div class="audit-modal__conten" style="margin-top:50px">
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
    </div>
</template>

<script>


    export default {
        name: 'auditCustomer',
        //props: ['showModal'],
        data() {
            return {
                showModal: false,
                submitAuditMsgLoadding: false,
                customer: this.id,
                customeraudit: null,
                // 审核状态
                audit_status: 2,
                // 笔记
                note: '',
                // 用户列表
                userList: [
                    {
                        value: '管理员',
                        label: 0
                    },
                    {
                        value: '审核部',
                        label: 1
                    },
                    {
                        value: '需要复审',
                        label: 2
                    },
                    {
                        value: '需要复审',
                        label: 3
                    }
                ],
                // 指定用户
                next_user: null,
                backListNote: '',
                status: '',
                auditStatus: [
                    {
                        value: '拒绝受理',
                        label: 2
                    },
                    {
                        value: '审核通过',
                        label: 3
                    },
                    {
                        value: '需要复审',
                        label: 4
                    }
                ]
            };
        },
        created() {
            console.log('120', customerStatus);
        },
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
            },
            cancel() {
                this.$emit('cancelBlack');
            }
        }
    };
</script>

<style scoped>

</style>