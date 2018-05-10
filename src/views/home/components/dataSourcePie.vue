<template>
    <div style="width:100%;height:100%;" id="data_source_con"></div>
</template>

<script>
import echarts from 'echarts';
import {customerSource} from "@/api/home";
export default {
    name: 'dataSourcePie',
    data () {
        return {
            option: {},
            customerState: ''
        };
    },
    methods: {
        getlist() {
            customerSource().then(res => {
                let result = res.data;
                //console.log('客户来源', res.data);
                this.option.series[0].data = result;
                this.dataSourcePie.setOption(this.option);
            });
        }
    },
    mounted () {
        this.getlist();
        this.$nextTick(() => {
            this.dataSourcePie = echarts.init(document.getElementById('data_source_con'));
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
                this.dataSourcePie.resize();
            });
        });
    }
};
</script>
