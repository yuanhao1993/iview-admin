<template>
    <div style="width:100%;height:100%;" id="customer_state_con"></div>
</template>

<script>
import echarts from 'echarts';
import {customerStatus} from '@/api/home';

export default {
    name: 'customerState',
    data () {
        return {
            option: {},
            customerState: ''
        };
    },
    methods: {
        getlist() {
            customerStatus().then(res => {
                let result = res.data;
                //console.log('客户状态', res.data);
                this.option.series[0].data = result;
                this.customerState.setOption(this.option);
            });
        }
    },
    mounted () {
        this.getlist();
        this.$nextTick(() => {
            this.customerState = echarts.init(document.getElementById('customer_state_con'));
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right'
                    // data: ['待审核', '拒绝受理', '审核通过', '需要复审', '已放款','续清','结清','逾期','催收','催收结清']
                },
                series: [
                    {
                        name: '状态',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            this.option = option;
            window.addEventListener('resize', function () {
                this.customerState.resize();
            });

        });
    }

};
</script>
