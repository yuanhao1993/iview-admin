<!--suppress ALL -->
<template>
    <div class="channel">
        <Table :loading="dataLoading" :columns="columns" :data="data"></Table>
        <Page :total="100" @on-change="pageChange"></Page>
    </div>
</template>

<script>
    import {fetchchannel} from '@/api/channel';

    export default {
        name: 'channel-table',
        data() {
            return {
                dataLoading: true,
                data: [],
                columns: [
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
                ]

            };
        },
        created() {
            this.getlist(0);
        },
        methods: {
            getlist(index) {
                this.dataLoading = true
                fetchchannel({"limit": 10, "offset": 10 * index})
                    .then(res => {
                        let result = res.data.results.map(item => {
                            let check_ways = item.check_ways_get.map(item => item.name);
                            return {
                                ...item,
                                check_ways: check_ways.join(', ')
                            }
                        })
                        this.data = result;
                        this.dataLoading = false;
                    }).catch();
            },
            pageChange(index) {
                this.getlist(index - 1);
            }
        }
    };
</script>

<style scoped lang="less">
    .channel{
        height: 100%;

    }
</style>