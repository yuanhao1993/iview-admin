<template>
    <div style="width:100%;height:100%;" id="data_source_con"></div>
</template>

<script>
import echarts from 'echarts';

export default {
    name: 'dataSourcePie',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            var dataSourcePie = echarts.init(document.getElementById('data_source_con'));
            const option = {
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                legend: {
                    orient: 'vertical',
                    left: 'right',
                    // data: ['今日头条', '贷款超市a', '贷款超市b', '贷款超市c', '贷款超市d']
                },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: '66%',
                        center: ['50%', '60%'],
                        data: [
                            {value: 2013336, name: '今日头条', itemStyle: {normal: {color: '#9bd598'}}},
                            {value: 1305923, name: '贷款超市a', itemStyle: {normal: {color: '#ffd58f'}}},
                            {value: 543250, name: '贷款超市b', itemStyle: {normal: {color: '#abd5f2'}}},
                            {value: 798403, name: '贷款超市c', itemStyle: {normal: {color: '#ab8df2'}}},
                            {value: 302340, name: '贷款超市d', itemStyle: {normal: {color: '#e14f60'}}}
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
            dataSourcePie.setOption(option);
            window.addEventListener('resize', function () {
                dataSourcePie.resize();
            });
        });
    }
};
</script>
