<template>
    <div class="add-black">

        <Modal
                :value="showBackListModal"
                title="加入黑名单"
                width="60%"
                @on-ok="baclkCommit"
                ok-text="提交"
                :loading="submitBackListLoadding"
                cancel-text="关闭"
                @on-cancel="cancel"
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

            <!--<div slot="footer">-->
            <!--<Button type="primary" size="large" :loading="submitBackListLoadding" @click="submitBackList">加入黑名单-->
            <!--</Button>-->
            <!--</div>-->
        </Modal>
    </div>
</template>

<script>
    import {customerModelPatch} from '@/api/customer';

    export default {
        name: 'addBlack',
        props: ['showBackListModal', 'backListNote', 'id'],
        data() {
            return {
                submitBackListLoadding: false,
                backListNote: this.backListNote
            };
        },
        methods: {
            submitBackList() {
                if (this.backListNote === '') {
                    this.$Message.warning('您没有写明将此人加入黑名单的原因');
                    this.submitBackListLoadding = false;
                    return null;
                }
            },
            cancel() {
                this.$emit('cancelBlack');
            },
            baclkCommit() {
                customerModelPatch(this.id, {'blcak_reason': this.backListNote, 'is_black': true}).then(
                    res => {
                        this.$emit('baclkCommit');
                    }
                );
            }
        }
    };
</script>

<style scoped>

</style>