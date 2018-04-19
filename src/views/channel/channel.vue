<!--suppress ALL -->
<template>
    <div class="channel">
        <Table :columns="columns1" :data="data1"></Table>
        <Page :total="100" @on-change="pageChange"></Page>

    </div>
</template>

<script>
    import {fetchchannel} from '@/api/channel';

    export default {
        name: 'channel-table',
        data() {
            return {
                columns1: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '渠道名称',
                        key: 'name'
                    },
                    {
                        title: 'h5链接',
                        key: 'link_h5'
                    },
                    {
                        title: '认证方式',
                        key: 'check_ways'
                    },
                    {
                        title: '创建时间',
                        key: 'create_time'
                    }
                ],
                data1: []
            };
        },
        created() {
            this.getlist(0);
        },
        methods: {
            getlist(index) {
                fetchchannel({"limit": 10, "offset": 10 * index}).then(res => {
                    this.data1 = res.data.results;
                }).catch();
            },
            pageChange(index) {
                console.log(index - 1);
                this.getlist(index - 1);
            }
        }
    };
</script>

<style scoped>

</style>