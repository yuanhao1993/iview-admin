<template>
    <div class="audit-customer">
        <Modal
                v-model="showModal"
                title="客户审核"
                width="60%"
                @on-ok=""
                ok-text="提交"
                :loading="submitAuditMsgLoadding"
                cancel-text="关闭"
                @on-cancel="cancel"
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
        </Modal>
    </div>
</template>

<script>
    export default {
        name: 'auditCustomer',
        props: ['showModal'],
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
                userList: [],
                // 指定用户
                next_user: null,
                backListNote: ''
            };
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