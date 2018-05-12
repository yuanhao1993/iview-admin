<template>
    <div style="width:100%;height:100%;" id="visite_volume_con"></div>
</template>

<script>
    import echarts from 'echarts';
    import {expensemodel} from '@/api/home';

    export default {
        name: 'visiteVolume',
        data() {
            return {
                option: {},
                visiteVolume: ''
            };
        },
        methods: {
            getlist() {
                expensemodel().then(res => {
                    let result = res.data;
                    //console.log(result);
                    this.option.series[0].data = result.series;
                    this.option.xAxis.data = result.data;
                    this.visiteVolume.setOption(this.option);
                });
            }
        },
        mounted() {
            this.getlist();
            this.$nextTick(() => {
                this.visiteVolume = echarts.init(document.getElementById('visite_volume_con'));
                let xAxisData = [];
                let data1 = [];
                let data2 = [];
                for (let i = 0; i < 20; i++) {
                    xAxisData.push('类目' + i);
                    data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
                    data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
                }

                const option = {
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        }
                    },
                    grid: {
                        top: 0,
                        left: '2%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    yAxis: {
                        type: 'value',
                        boundaryGap: [0, 0.01]
                    },
                    xAxis: {
                        type: 'category',
                        data: ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
                        nameTextStyle: {
                            color: '#c3c3c3'
                        }
                    },
                    series: [
                        {
                            name: '消费量',
                            type: 'bar',
                            data: []
                        }
                    ]
                };
                this.option = option;
                // visiteVolume.setOption(option);

//                window.addEventListener('resize', function () {
//                    this.visiteVolume.resize();
//                });
            });
        }
    };
</script>
