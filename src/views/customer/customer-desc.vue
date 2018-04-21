<style lang="less" rel="stylesheet/less" scoped="scoped">
    .customer-desc{
        height: 100%;
        background-color: #FFFFFF;
    }
</style>
<template>
    <div class="customer-desc">
        <Tabs>
            <Tab-pane label="客户基本信息" icon="social-apple">
                标签一的内容
            </Tab-pane>
            <Tab-pane label="客户补充信息" icon="social-windows">
                标签二的内容
            </Tab-pane>
            <Tab-pane label="咨询云报告" icon="social-tux">
                标签三的内容
            </Tab-pane>
            <Tab-pane label="反欺诈云报告" icon="social-tux">
                标签三的内容
            </Tab-pane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        data() {
            return {};
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {
        }
    }
</script>
