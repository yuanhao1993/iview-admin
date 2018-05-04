<template>
    <div style="width:100%;height:100%;" id="customer_state_con"></div>
</template>

<script>
import echarts from 'echarts';

export default {
    name: 'customerState',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            var customerState = echarts.init(document.getElementById('customer_state_con'));
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    // data: ['待审核', '拒绝受理', '审核通过', '需要复审', '已放款','续清','结清','逾期','催收','催收结清']
                },
                series: [
                    {
                        name: '状态',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 2013336, name: '待审核', itemStyle: {normal: {color: '#9bd598'}}},
                            {value: 1305923, name: '拒绝受理', itemStyle: {normal: {color: '#ffd58f'}}},
                            {value: 543250, name: '审核通过', itemStyle: {normal: {color: '#abd5f2'}}},
                            {value: 798403, name: '需要复审', itemStyle: {normal: {color: '#ab8df2'}}},
                            {value: 302340, name: '已放款', itemStyle: {normal: {color: '#e14f60'}}},
                            {value: 2013336, name: '续清', itemStyle: {normal: {color: '#9b5559'}}},
                            {value: 1305923, name: '结清', itemStyle: {normal: {color: '#ffd51f'}}},
                            {value: 543250, name: '逾期', itemStyle: {normal: {color: '#abd5b2'}}},
                            {value: 798403, name: '催收', itemStyle: {normal: {color: '#bb8f12'}}},
                            {value: 798403, name: '催收结清', itemStyle: {normal: {color: '#ab8da2'}}},
                        ],
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
            customerState.setOption(option);
            window.addEventListener('resize', function () {
                customerState.resize();
            });
        });
    }
};
</script>
