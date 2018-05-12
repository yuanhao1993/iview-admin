<style scoped lang="less">
    .channel {
      height: 100%;
      overflow: auto;
      .search {
        padding: 15px;
      }
      .page {
        padding: 20px 0;
        text-align: right;
        margin-right: 25px;
      }
      .margin-bottom-20 {
        margin-bottom: 20px;
      }
      .ivu-table-wrapper{
        margin:0 10px;
      }
    }
</style>
<template>
    <div class="channel" ref="channel">
        <Table class="table" :height.sync="tableHeight" :loading="dataLoading" :columns="columns"
               :data="dataList">
        </Table>
        <Row type="flex" justify="end">
          <Col span="12" class="margin-bottom-20">
            <div class="page" ref="page">
              <Page :total="total" @on-change="pageChange"></Page>
            </div>
          </Col>
        </Row>
    </div>
</template>

<script>
    import {customerExpense} from '@/api/home';

    export default {
        name: 'customerExpense-table',
        data() {
            return {
                dataList: [],
                total: null,
                checkways: [],
                columns: [
                    {
                        title: 'ID',
                        key: 'id'
                    },
                    {
                        title: '用户名',
                        key: 'user'
                    },
                    {
                        title: '详情',
                        key: 'detail'
                    },
                    {
                        title: '创建时间',
                        key: 'create_time'
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
                this.dataLoading = false;
                customerExpense({
                    limit: 10,
                    offset: 10 * index
                }).then(res => {
                    let result = res.data.results.map(item => {
                        return {
                            ...item
                        };
                    });
                    this.dataList = result;
                    this.total = res.data.count;
                    this.dataLoading = false;
                }).catch();
            },
            pageChange(index) {
                this.getlist(index - 1);
            }
        },
        mounted() {
        }
    };
</script>