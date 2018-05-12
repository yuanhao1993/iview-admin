<style lang="less">
    @import "./home.less";
    @import "../../styles/common.less";

    .user-infor {
        height: 70px;
    }
</style>
<template>
    <div class="home-main">
        <Row :gutter="10">
            <Col :md="24" :lg="8">
                <Row class-name="home-page-row1" :gutter="10">
                    <Col :md="12" :lg="24" :style="{margin: '15px 0'}">
                        <Card>
                            <Row type="flex" class="user-infor">
                                <Col span="8">
                                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                                        <img class="avator-img" :src="avatorPath"/>
                                    </Row>
                                </Col>
                                <Col span="16" style="padding-left:6px;">
                                    <Row class-name="made-child-con-middle" type="flex" align="middle">
                                        <div>
                                            <b class="card-user-infor-name">{{ userName }}</b>
                                            <p>{{ department }}</p>
                                        </div>
                                    </Row>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </Col>
            <Col :md="24" :lg="16">
                <Row :gutter="5">
                    <Col :xs="24" :sm="12" :md="6" :style="{margin: '15px 0'}">
                        <infor-card
                                id-name="user_created_count"
                                :end-val="count.register"
                                iconType="android-person-add"
                                color="#2d8cf0"
                                intro-text="今日注册用户"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{margin: '15px 0'}">
                        <infor-card
                                id-name="visit_count"
                                :end-val="count.authentication"
                                iconType="ios-eye"
                                color="#64d572"
                                :iconSize="50"
                                intro-text="今日认证用户"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{margin: '15px 0'}">
                        <infor-card
                                id-name="collection_count"
                                :end-val="count.loan"
                                iconType="upload"
                                color="#ffd572"
                                intro-text="今日放款用户"
                        ></infor-card>
                    </Col>
                    <Col :xs="24" :sm="12" :md="6" :style="{margin: '15px 0'}">
                        <infor-card
                                id-name="transfer_count"
                                :end-val="count.overdue"
                                iconType="shuffle"
                                color="#f25e43"
                                intro-text="今日逾期用户"
                        ></infor-card>
                    </Col>
                </Row>
            </Col>
        </Row>
        <Row :gutter="10" class="margin-top-10">
            <Col :md="24" :lg="8" :style="{margin: '15px 0'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="android-map"></Icon>
                        用户消费量统计
                    </p>
                    <div class="data-source-row">
                        <visite-volume></visite-volume>
                    </div>
                </Card>
            </Col>
            <Col :md="24" :lg="8" :style="{margin: '15px 0'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="ios-pulse-strong"></Icon>
                        客户来源统计
                    </p>
                    <div class="data-source-row">
                        <data-source-pie></data-source-pie>
                    </div>
                </Card>
            </Col>
            <Col :md="24" :lg="8" :style="{margin: '15px 0'}">
                <Card>
                    <p slot="title" class="card-title">
                        <Icon type="ios-pulse-strong"></Icon>
                        客户状态统计
                    </p>
                    <div class="data-source-row">
                        <customer-state></customer-state>
                    </div>
                </Card>
            </Col>
        </Row>
        <Row class="margin-top-10">
            <Card>
                <p slot="title" class="card-title">
                    <Icon type="ios-shuffle-strong"></Icon>
                    客户消费详情
                </p>
                <div>
                    <customer-expense-table></customer-expense-table>
                </div>
            </Card>
        </Row>
    </div>
</template>

<script>
    import homeMap from './components/map.vue';
    import dataSourcePie from './components/dataSourcePie.vue';
    import visiteVolume from './components/visiteVolume.vue';
    import CustomerState from './components/customerState';
    import countUp from './components/countUp.vue';
    import inforCard from './components/inforCard.vue';
    import mapDataTable from './components/mapDataTable.vue';
    import toDoListItem from './components/toDoListItem.vue';
    import {statusAnalysisToday} from '@/api/home';
    import CustomerExpenseTable from './components/customExpense.vue';
    import Cookies from 'js-cookie';

    export default {
        name: 'home',
        components: {
            CustomerExpenseTable,
            CustomerState,
            homeMap,
            dataSourcePie,
            visiteVolume,
            countUp,
            inforCard,
            mapDataTable,
            toDoListItem
        },
        data() {
            return {
                count: {
                    register: 1,
                    authentication: 1,
                    loan: 1,
                    overdue: 1
                },
                userName: '',
                department: ''
            };
        },
        computed: {
            avatorPath() {
                return localStorage.avatorImgPath;
            }
        },
        mounted() {
            this.getlist();
            this.setCookie();
        },
        methods: {
            setCookie() {
                console.log(Cookies.get('userName'));
                this.userName = Cookies.get('userName');
                this.department = Cookies.get('department');
            },
            getlist() {
                statusAnalysisToday().then(res => {
                    let result = res.data;
                    this.count = result;
                });
            }
        }
    };
</script>
