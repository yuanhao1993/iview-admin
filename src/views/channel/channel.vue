<style scoped lang="less">
    .channel {
        height: 100%;
        overflow: auto;
        .search {
            padding: 0 0 20px;
            /*display: flex;*/
            /*flex-flow: row nowrap;*/
            /*justify-content: flex-end;*/
        }
        .page {
            padding: 20px 0;
        }
    }
</style>
<template>
    <div class="channel" ref="channel">
        <div class="search" ref="search">
            <Input v-model="searchText" placeholder="请输入搜搜..." style="width: 60%"/>
            <span style="margin: 0 0 0 10px;"><Button type="primary" icon="search">搜索</Button></span>
        </div>
        <Table class="table" :height.sync="tableHeight" :loading="dataLoading" :columns="columns" :data="data"></Table>
        <div class="page" ref="page">
            <Page :total="100" @on-change="pageChange"></Page>
        </div>
    </div>
</template>

<script>
    import {fetchchannel} from '@/api/channel';

    export default {
        name: 'channel-table',
        data() {
            return {
                dataLoading: true,
                searchText: '',
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
                        key: 'link_h5',
                        ellipsis: true,
                        render: (h, {row, column, index}) => {
                            return h('span', {
                                attrs: {
                                    title: row.link_h5
                                },
                                on: {
                                    click: () => {
                                        const input = document.createElement('input');
                                        document.body.appendChild(input);
                                        input.setAttribute('value', row.link_h5);
                                        input.select();
                                        if (document.execCommand('copy')) {
                                            document.execCommand('copy');
                                            this.$Message.success('复制成功!');
                                        }
                                    }
                                }
                            }, row.link_h5);
                        }
                    },
                    {
                        title: '认证方式',
                        key: 'check_ways'
                    },
                    {
                        title: '创建时间',
                        key: 'create_time'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.editData(params.index);
                                        }
                                    }
                                }, '修改'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.delData(params.index);
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                tableHeight: 'auto'

            };
        },
        computed: {},
        created() {
            this.getlist(0);
        },
        methods: {
            getlist(index) {
                this.dataLoading = true
                fetchchannel({
                    limit: 10,
                    offset: 10 * index
                }).then(res => {
                    let result = res.data.results.map(item => {
                        let checkWays = item.check_ways_get.map(item => item.name);
                        return {
                            ...item,
                            check_ways: checkWays.join(', ')
                        }
                    })
                    this.data = result;
                    this.dataLoading = false;
                }).catch();
            },
            pageChange(index) {
                this.getlist(index - 1);
            },
            editData(index) {
                alert(`修改${this.data[index].id}`);
            },
            delData(index) {
                this.$Modal.confirm({
                    title: '提示',
                    content: `<p>您确定要删除 <b>${this.data[index].name}</b> 数据</p>`,
                    onOk: () => {
                        this.data.splice(index, 1);
                        this.$Message.info('删除成功');
                    },
                    onCancel: () => {}
                });
            }
        },
        mounted() {
            this.tableHeight = this.$refs.channel.clientHeight - this.$refs.page.clientHeight - this.$refs.search.clientHeight;
        }
    };
</script>