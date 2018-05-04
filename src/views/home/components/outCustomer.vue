<template>
    <div style="width:100%;height:100%;" id="out_customer"></div>
</template>

<script>
import echarts from 'echarts';

const option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: '逾期量',
            type: 'gauge',
            min: 0,
            max: 1000,
            detail: {
                formatter: '{value}Mb+',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 50, name: '当前逾期客户总量'}],
            center: ['25%', '50%'],
            radius: '80%',
            title: {
                offsetCenter: [0, '80px']
            },
            axisLine: {
                lineStyle: {
                    // color: [],
                    width: 20
                }
            },
            splitLine: {
                length: 20
            }
        },
        {
            name: '催收量',
            type: 'gauge',
            min: 0,
            max: 1000,
            detail: {
                formatter: '{value}Mb+',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 50, name: '当前催收客户总量'}],
            center: ['75%', '50%'],
            radius: '80%',
            title: {
                offsetCenter: [0, '80px']
            },
            axisLine: {
                lineStyle: {
                    // color: [],
                    width: 20
                }
            },
            splitLine: {
                length: 20
            }
        }
    ]
};

export default {
    name: 'outCustomer',
    mounted () {
        let outCustomer = echarts.init(document.getElementById('out_customer'));
        option.series[0].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
        outCustomer.setOption(option);

        window.addEventListener('resize', function () {
            outCustomer.resize();
        });
    }
};
</script>
