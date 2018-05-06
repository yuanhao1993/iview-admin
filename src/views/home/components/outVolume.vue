<template>
    <div style="width:100%;height:100%;" id="out_volume_con"></div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'outVolume',
    data () {
        return {
            //
        };
    },
    mounted () {
        this.$nextTick(() => {
            let outVolume = echarts.init(document.getElementById('out_volume_con'));
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
                        name: '放款量',
                        type: 'bar',
                        data: [
                            {value: 4531002, name: 'Mon', itemStyle: {normal: {color: '#2d8cf0'}}},
                            {value: 879545, name: 'Tues', itemStyle: {normal: {color: '#2d8cf0'}}},
                            {value: 235460, name: 'Wed', itemStyle: {normal: {color: '#2d8cf0'}}},
                            {value: 159008, name: 'Thur', itemStyle: {normal: {color: '#2d8cf0'}}},
                            {value: 543250, name: 'Fri', itemStyle: {normal: {color: '#2d8cf0'}}},
                            {value: 130529, name: 'Sat', itemStyle: {normal: {color: '#2d8cf0'}}},
                            {value: 110345, name: 'Sun', itemStyle: {normal: {color: '#2d8cf0'}}}
                        ]
                    }
                ]
            };

            outVolume.setOption(option);

            window.addEventListener('resize', function () {
                outVolume.resize();
            });
        });
    }
};
</script>
