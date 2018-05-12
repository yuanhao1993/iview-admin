<template>
    <div style="width:100%;height:100%;" id="user_flow"></div>
</template>

<script>
import echarts from 'echarts';
import {customerTotal} from '@/api/home';

const option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    series: [
        {
            name: '注册量',
            type: 'gauge',
            min: 0,
            max: 1000,
            detail: {
                formatter: '{value}Mb+',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 50, name: '当前总注册客户量'}],
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
            name: '放款量',
            type: 'gauge',
            min: 0,
            max: 1000,
            detail: {
                formatter: '{value}Mb+',
                fontSize: 18,
                offsetCenter: [0, '50px']
            },
            data: [{value: 120, name: '当前总放款客户量'}],
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
    name: 'userFlow',
    created() {
        this.getlist();
    },
    methods: {
        getlist() {
            customerTotal().then(res => {
                let result = res.data;
                console.log('客户总量', res.data);
                this.count = result;
            });
        }
    },
    mounted () {
        let userFlow = echarts.init(document.getElementById('user_flow'));
        option.series[0].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
        option.series[1].data[0].value = (Math.random() * 1000).toFixed(2) - 0;
        userFlow.setOption(option);

        window.addEventListener('resize', function () {
            userFlow.resize();
        });
    }
};
</script>
