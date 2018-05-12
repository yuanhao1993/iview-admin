<style lang="less" rel="stylesheet/less" scoped="scoped">
    @import "style";
    .reportpage {

    }
</style>
<template>
    <div class="reportpage">
        {{{reportMain}}
        <div id="main">
            <div class="info baseInfo">
                <h2 class="title">基本信息</h2>

                <!--个人信息概况-->
                <div class="items">
                    <table>
                        <caption>个人信息概况</caption>
                        <colgroup>
                            <col class="col"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <td>姓名</td>
                            <td>
                                <p>
                                    <span class="prefix">韩婷婷</span>
                                    <span>女 / 26 / 山东省青岛市莱西市</span>
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>身份证</td>
                            <td>
                                <p class="blackList">
                                    <span class="prefix">370285199209213525</span>

                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td>手机号</td>
                            <td>
                                <p class="blackList">
                                    <span class="prefix">15215427752</span>
                                    <!--<span class="tag ghost">疑似诈骗</span>-->
                                </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--个人信息items-->
                <!--个人信息概况-->


                <!--运营商-->

                <!--运营商-->


                <div class="items eb">
                    <table>
                        <caption>淘宝<span class="caption eb">包含近一年的淘宝数据，数据获取时间：2018-04-17 11:17:56</span></caption>
                        <colgroup>
                            <col class="col"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <td>账号</td>
                            <td colspan="3">
                                <span class="prefix-ext">tb46523420</span>
                                <span class="tag normal">实名认证</span>
                                <!--<p style="display: inline-block">-->
                                <!--<span class="msg danger">申请人未使用淘宝账号</span>-->
                                <!--<br>-->
                                <!--<span class="msg danger">一年内，淘宝订单信息中未找到申请人手机号</span>-->
                                <!--</p>-->
                            </td>
                        </tr>

                        <tr class="realInfo">
                            <td>实名信息</td>
                            <td>
                                <p>
                                    <span class="prefix-ext">3****************5,韩**</span>
                                    <span class="tag normal">匹配成功</span>
                                    <span class="msg">与用户提供的身份证、姓名匹配成功</span>
                                </p>
                            </td>
                            <td>
                                <p>
                                    <span>蚂蚁花呗额度</span>
                                </p>
                            </td>
                            <td>
                                <p>
                                                     <span class="prefix-ext">
                                                                        5000.0
                                                      </span>
                                </p>
                            </td>
                        </tr>

                        </tbody>

                    </table>
                </div><!--淘宝items-->










                <div class="items"><!--运营商items-->
                    <table>
                        <caption class="left">运营商<span class="caption mno">包含近半年的运营商数据，数据获取时间：2018-04-17 11:21:55</span></caption>
                        <colgroup>
                            <col class="col"/>
                        </colgroup>
                        <tbody>
                        <tr>
                            <td>手机号</td>
                            <td>
                                <p>
                                    <span class="prefix">15215427752 | 中国移动 | 山东省青岛市</span>
                                    <span class="tag normal">实名认证</span>
                                    <span class="msg">入网时间：2015-01-25 12:36:17 (本号码于2015-01-25 12:36:17开始使用，至今已使用3年102天)</span>
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td>实名信息</td>
                            <td>
                                <p>
                                    <span class="prefix">**婷</span>
                                    <span class="tag normal">匹配成功</span>
                                    <span class="msg">与用户提供的身份证、姓名匹配成功</span>
                                </p>
                            </td>
                        </tr>

                        <!--紧急联系人-->
                        </tbody>
                    </table>

                    <!--紧急联系人明细-->
                    <!--紧急联系人 item-detail-->
                </div><!--运营商item-->
                <!--运营商-->











            </div><!--个人信息-->


            <!--反欺诈云分析-->

            <div class="info">
                <h2 class="title">反欺诈云分析</h2>
                <div class="items cross">
                    <table>
                        <caption class="middle">反欺诈云分析</caption>
                        <tbody>
                        <tr>
                            <td style="text-align: center;">反欺诈云中未查询到用户数据</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!--反欺诈云分析-->

            <!--用户行为验证-->
            <!--用户行为检测-->
            <div class="info">
                <h2 class="title">用户行为检测</h2>

                <div class="items cross">
                    <table>
                        <caption class="middle">常用行为检测</caption>
                        <thead>
                        <tr>
                            <th width="20%">检测项目</th>
                            <th width="35%">结果</th>
                            <th width="45%">证据</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>通话主要活动区域</td>
                            <td>
                                <span>未知</span>
                                <span class="jinyong font danger"><i class="iconfont icon-jinyong"></i></span>
                                <span class="font danger">与手机号归属地不一致</span>
                            </td>
                            <td>在未知地区通话300次，占总通话次数的100%</td>
                        </tr>
                        <tr>
                            <td>朋友圈活动区域</td>
                            <td>
                                <span>朋友圈主要活动在山东省青岛市</span>
                                <span class="jinyong font danger"><i class="iconfont icon-jinyong"></i></span>
                                <span class="font danger">与通话主要活动区域不一致</span>
                            </td>
                            <td>山东省青岛市地区通话时间占比为79.17%</td>
                        </tr>
                        <tr>
                            <td>朋友圈大小</td>
                            <td>78</td>
                            <td>半年内与78个号码有过通话记录</td>
                        </tr>
                        <tr>
                            <td>互通电话号码个数</td>
                            <td>25个</td>
                            <td>半年内存在25个互通的电话的号码记录, 占通话总通话号码数的32.05%</td>
                        </tr>
                        <tr>
                            <td>朋友圈活跃度</td>
                            <td>5</td>
                            <td>半年内与5个号码联系过15次以上</td>
                        </tr>
                        <tr id="notCallAndSmsDayCount">
                            <td class="higher">全天未使用通话和短信功能天数</td>
                            <!--这里需要写对应js-->
                            <td>38天</td>
                            <td class="nolimit">在2017-11-26~2018-04-15时间段内，该号码有38天全天未使用通话和短信功能，连续三天以上全天未使用通话和短信功能1次:2018-04-10~2018-04-13,4天 </td>
                        </tr>
                        <tr id="numberUsedLong">
                            <td>号码使用时长</td>
                            <td>至少160天</td>
                            <td>使用记录至今至少160天</td>
                        </tr>

                        <tr id="nightCallCount">
                            <td class="higher">夜间通话次数(00:00 ~ 06:00)</td>
                            <td>1</td>
                            <td>呼入次数：1次, 呼入总时长：0.18分钟; 呼出次数：0次, 呼出总时长：0.00分钟</td>
                        </tr>

                        <tr id="ebUseFrequency">
                            <td>电商使用频率</td>
                            <td>
                                <span>频繁</span>
                            </td>
                            <td>一年内存在66条购买记录</td>
                        </tr>

                        <tr id="oneselfEbUseFrequency">
                            <td>本人电商使用频率</td>
                            <td>
                                <span>频繁</span>
                            </td>
                            <td>一年内存在48条本人购买记录</td>
                        </tr>
                        <tr id="oneselfAdderChangeFrequency">
                            <td>本人地址变化情况</td>
                            <td>
                                <span>偶尔</span>
                            </td>
                            <td>一年内地址变化4次</td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <!--特殊通话行为检测-->
                <div class="items cross">
                    <table>
                        <caption class="middle">特殊通话行为检测</caption>
                        <thead>
                        <tr>
                            <th width="20%">检测项目</th>
                            <th width="35%">结果</th>
                            <th width="45%">证据</th>
                        </tr>
                        </thead>
                        <tbody id="exceptionalConnectCross">
                        <tr id="number110ConnectInfo">
                            <td>110通话情况</td>
                            <td>0次</td>
                            <td>未找到相关号码</td>
                        </tr>
                        <tr id="number120ConnectInfo">
                            <td>120通话情况</td>
                            <td>0次</td>
                            <td>未找到相关号码</td>
                        </tr>

                        </tbody>
                    </table>
                </div><!--特殊通话行为检测-->

            </div><!--用户行为检测-->
            <!--用户行为验证-->


            <!--催收指标分析-->
            <!--催收指标分析-->


            <!--金融数据-->
            <!--金融数据-->


            <!--学信网数据-->



            <!--公积金信息-->


            <!--电商数据统计分析-->
            <div class="info">
                <h2 class="title">电商数据统计分析</h2>

                <div class="items cross">
                    <table>
                        <caption class="middle">联系人信息（来源于电商收货人）</caption>
                        <thead>
                        <tr>
                            <th width="4%">姓名</th>
                            <th width="4%">手机号</th>
                            <th width="5%">归属地</th>
                            <th width="7%" style="font-size: 7pt">最早联系时间</th>
                            <th width="7%" style="font-size: 7pt">最近联系时间</th>
                            <th width="9%" style="font-size: 7pt">近3天通话<br>排名 / 次数 / 时长</th>
                            <th width="9%" style="font-size: 7pt">近7天通话<br>排名 / 次数 / 时长</th>
                            <th width="9%" style="font-size: 7pt">近30天通话<br>排名 / 次数 / 时长</th>
                            <th width="9%" style="font-size: 7pt">近半年通话<br>排名 / 次数 / 时长</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>于瑞艳</td>
                            <td>15066223348</td>
                            <td>山东省青岛市</td>
                            <td>2017-12-07 21:05:57</td>
                            <td>2018-04-03 13:31:33</td>
                            <td class="timeSplit">0 / 0 / 0分</td>
                            <td class="timeSplit">0 / 0 / 0分</td>
                            <td class="timeSplit">3 / 7 / 421分</td>
                            <td class="timeSplit">2 / 29 / 1611分</td>
                        </tr>
                        <tr>
                            <td>战为玲</td>
                            <td>13698673624</td>
                            <td>山东省青岛市</td>
                            <td>2017-12-16 17:21:14</td>
                            <td>2018-04-02 18:39:54</td>
                            <td class="timeSplit">0 / 0 / 0分</td>
                            <td class="timeSplit">0 / 0 / 0分</td>
                            <td class="timeSplit">4 / 4 / 128分</td>
                            <td class="timeSplit">6 / 15 / 839分</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--联系人信息-->

                <!--联系人信息-->


                <!--常用地址-->
                <div class="items cross">
                    <table>
                        <caption class="middle">常用地址</caption>
                        <thead>
                        <tr>
                            <th style="width: 30%">地址</th>
                            <th style="width: 15%">起始订单时间</th>
                            <th style="width: 15%">最近下单时间</th>
                            <th style="width: 8%">消费次数</th>
                            <th style="width: 9%">总消费金额</th>
                            <th style="width: 8%">手机号</th>
                            <th style="width: 8%">姓名</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市市北区山东路182号13号楼504</span>
                            </td>
                            <td style="width: 12%">2017-08-20 06:57:31</td>
                            <td style="width: 12%">2018-01-02 16:53:45</td>
                            <td style="width: 5%">26</td>
                            <td style="width: 9%">802.90</td>
                            <td style="width: 8%">15215427752</td>
                            <td style="width: 8%">韩婷婷</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市市北区海伦路街道山东路182号13号楼504</span>
                                <span class="tag warn left">淘宝商城</span>
                            </td>
                            <td style="width: 12%">2017-08-19 20:20:28</td>
                            <td style="width: 12%">2018-03-08 00:07:02</td>
                            <td style="width: 5%">11</td>
                            <td style="width: 9%">822.84</td>
                            <td style="width: 8%">15215427752</td>
                            <td style="width: 8%">韩婷婷</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市市北区重庆南路27号1号楼3单元803</span>
                            </td>
                            <td style="width: 12%">2017-04-22 12:21:48</td>
                            <td style="width: 12%">2017-05-16 11:59:04</td>
                            <td style="width: 5%">8</td>
                            <td style="width: 9%">193.60</td>
                            <td style="width: 8%">15215427752</td>
                            <td style="width: 8%">韩婷婷</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市市北区海伦路街道重庆南路27号1号楼3单元803</span>
                            </td>
                            <td style="width: 12%">2017-05-10 21:26:49</td>
                            <td style="width: 12%">2017-05-18 15:50:21</td>
                            <td style="width: 5%">4</td>
                            <td style="width: 9%">55.60</td>
                            <td style="width: 8%">15215427752</td>
                            <td style="width: 8%">韩婷婷</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市莱西市牛溪埠村574号</span>
                            </td>
                            <td style="width: 12%">2017-10-26 21:36:08</td>
                            <td style="width: 12%">2017-10-27 20:52:42</td>
                            <td style="width: 5%">2</td>
                            <td style="width: 9%">237.80</td>
                            <td style="width: 8%">15066223348</td>
                            <td style="width: 8%">于瑞艳</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市莱西市后褚河头村</span>
                            </td>
                            <td style="width: 12%">2017-12-12 15:28:55</td>
                            <td style="width: 12%">2017-12-12 15:28:55</td>
                            <td style="width: 5%">1</td>
                            <td style="width: 9%">213.00</td>
                            <td style="width: 8%">13698673624</td>
                            <td style="width: 8%">战为玲</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市莱西市沽河街道牛溪埠村574号</span>
                            </td>
                            <td style="width: 12%"></td>
                            <td style="width: 12%"></td>
                            <td style="width: 5%">0</td>
                            <td style="width: 9%">0.00</td>
                            <td style="width: 8%">15215427752</td>
                            <td style="width: 8%">韩婷婷</td>
                        </tr>

                        <tr>
                            <td class="higher" style="width: 30%">
                                <span>山东省青岛市莱西市望城街道后褚河头村</span>
                            </td>
                            <td style="width: 12%"></td>
                            <td style="width: 12%"></td>
                            <td style="width: 5%">0</td>
                            <td style="width: 9%">0.00</td>
                            <td style="width: 8%">13698673624</td>
                            <td style="width: 8%">战为玲</td>
                        </tr>

                        </tbody>
                    </table>
                </div><!--常用地址-->



                <!--月消费信息-->
                <div class="items cross">
                    <table>
                        <caption class="middle">月消费信息（汇总）</caption>
                    </table>
                    <img id="costDiagram" style="height: 400px; margin-left: auto;margin-right: auto; display: none">
                    <div class="diagram" id="diagram"></div>
                </div><!--月消费信息-->

                <script type="text/x-template">
                    var months = new Array();
                    var moneys = new Array();
                    var counts = new Array();
                    var month = '201704';
                    if (month != "")
                        months.push(month);
                    var money = '26.00';
                    if (money != "")
                        moneys.push(money);
                    var count = '1';
                    if (count != "")
                        counts.push(count);
                    var month = '201705';
                    if (month != "")
                        months.push(month);
                    var money = '232.00';
                    if (money != "")
                        moneys.push(money);
                    var count = '12';
                    if (count != "")
                        counts.push(count);
                    var month = '201706';
                    if (month != "")
                        months.push(month);
                    var money = '10.00';
                    if (money != "")
                        moneys.push(money);
                    var count = '1';
                    if (count != "")
                        counts.push(count);
                    var month = '201708';
                    if (month != "")
                        months.push(month);
                    var money = '274.98';
                    if (money != "")
                        moneys.push(money);
                    var count = '11';
                    if (count != "")
                        counts.push(count);
                    var month = '201709';
                    if (month != "")
                        months.push(month);
                    var money = '202.80';
                    if (money != "")
                        moneys.push(money);
                    var count = '3';
                    if (count != "")
                        counts.push(count);
                    var month = '201710';
                    if (month != "")
                        months.push(month);
                    var money = '510.61';
                    if (money != "")
                        moneys.push(money);
                    var count = '11';
                    if (count != "")
                        counts.push(count);
                    var month = '201711';
                    if (month != "")
                        months.push(month);
                    var money = '88.36';
                    if (money != "")
                        moneys.push(money);
                    var count = '4';
                    if (count != "")
                        counts.push(count);
                    var month = '201712';
                    if (month != "")
                        months.push(month);
                    var money = '290.90';
                    if (money != "")
                        moneys.push(money);
                    var count = '3';
                    if (count != "")
                        counts.push(count);
                    var month = '201801';
                    if (month != "")
                        months.push(month);
                    var money = '555.09';
                    if (money != "")
                        moneys.push(money);
                    var count = '9';
                    if (count != "")
                        counts.push(count);
                    var month = '201802';
                    if (month != "")
                        months.push(month);
                    var money = '399.40';
                    if (money != "")
                        moneys.push(money);
                    var count = '4';
                    if (count != "")
                        counts.push(count);
                    var month = '201803';
                    if (month != "")
                        months.push(month);
                    var money = '709.40';
                    if (money != "")
                        moneys.push(money);
                    var count = '8';
                    if (count != "")
                        counts.push(count);
                    if (months.length >= 15) {
                        $("#diagram").css("width", "100%");
                    } else {
                        $("#diagram").css("width", "1000px");
                    }

                    // 基于准备好的dom，初始化echarts实例
                    var myChart = echarts.init(document.getElementById('diagram'));
                    // 指定图表的配置项和数据
                    option = {
                        tooltip: {
                            show: true
                        },
                        legend: {
                            data: ['月消费金额', '月消费笔数']
                        },
                        xAxis: [
                            {
                                type: 'category',
//                            data : ['2016-04','2016-05','2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11'],
                                data: months,
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            },
                            {
                                type: 'category',
                                show: false,
                                data: months,
//                            data : ['2016-04','2016-05','2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: "月消费笔数",

                                axisLabel: {
                                    formatter: '{value}'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            },
                            {
                                type: 'value',
                                name: "月消费金额（元）",
                                axisLabel: {
                                    formatter: '{value}'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            }
                        ],
                        series: [
                            {
                                name: '月消费金额',
                                type: 'line',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                showAllSymbol: true,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            interval: 0,
                                            formatter: function (data) {
                                                return data.value;
                                            }
                                        }, color: '#4298c7'
                                    }
                                },
                                smooth: false,
                                data: moneys
//                            data: [527.6, 607.4, 911.4, 1648.4,2228.4, 1661.7, 3194.9, 1777.3]
                            },
                            {
                                name: '月消费笔数',
                                type: 'bar',
                                smooth: false,
                                showAllSymbol: true,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            interval: 0,
                                            formatter: function (data) {
                                                return data.value + "笔";
                                            },
                                            textStyle: {
                                                color: '#4298c7'
                                            }
                                        },
                                        color: '#d9ebf4'
                                    }
                                },
                                data: counts
//                                data: [3, 3, 7, 7, 8, 12, 17, 14]
                            }
                        ]

                    };

                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(option);
                </script>

                <!--淘宝月消费信息-->
                <div class="items cross">
                    <table>
                        <caption class="middle">淘宝月消费信息</caption>
                    </table>
                    <img id="tbCostDiagram" style="height: 400px; margin-left: auto;margin-right: auto; display: none">
                    <div class="diagram" id="tbDiagram" ></div>
                </div><!--淘宝月消费信息-->

                <script  type="text/x-template">
                    var months = new Array();
                    var moneys = new Array();
                    var counts = new Array();
                    var month = '201704';
                    if (month != "")
                        months.push(month);
                    var money = '26.00';
                    if (money != "")
                        moneys.push(money);
                    var count = '1';
                    if (count != "")
                        counts.push(count);
                    var month = '201705';
                    if (month != "")
                        months.push(month);
                    var money = '232.00';
                    if (money != "")
                        moneys.push(money);
                    var count = '12';
                    if (count != "")
                        counts.push(count);
                    var month = '201706';
                    if (month != "")
                        months.push(month);
                    var money = '10.00';
                    if (money != "")
                        moneys.push(money);
                    var count = '1';
                    if (count != "")
                        counts.push(count);
                    var month = '201708';
                    if (month != "")
                        months.push(month);
                    var money = '274.98';
                    if (money != "")
                        moneys.push(money);
                    var count = '11';
                    if (count != "")
                        counts.push(count);
                    var month = '201709';
                    if (month != "")
                        months.push(month);
                    var money = '202.80';
                    if (money != "")
                        moneys.push(money);
                    var count = '3';
                    if (count != "")
                        counts.push(count);
                    var month = '201710';
                    if (month != "")
                        months.push(month);
                    var money = '510.61';
                    if (money != "")
                        moneys.push(money);
                    var count = '11';
                    if (count != "")
                        counts.push(count);
                    var month = '201711';
                    if (month != "")
                        months.push(month);
                    var money = '88.36';
                    if (money != "")
                        moneys.push(money);
                    var count = '4';
                    if (count != "")
                        counts.push(count);
                    var month = '201712';
                    if (month != "")
                        months.push(month);
                    var money = '290.90';
                    if (money != "")
                        moneys.push(money);
                    var count = '3';
                    if (count != "")
                        counts.push(count);
                    var month = '201801';
                    if (month != "")
                        months.push(month);
                    var money = '555.09';
                    if (money != "")
                        moneys.push(money);
                    var count = '9';
                    if (count != "")
                        counts.push(count);
                    var month = '201802';
                    if (month != "")
                        months.push(month);
                    var money = '399.40';
                    if (money != "")
                        moneys.push(money);
                    var count = '4';
                    if (count != "")
                        counts.push(count);
                    var month = '201803';
                    if (month != "")
                        months.push(month);
                    var money = '709.40';
                    if (money != "")
                        moneys.push(money);
                    var count = '8';
                    if (count != "")
                        counts.push(count);
                    if (months.length >= 15) {
                        $("#diagram").css("width", "100%");
                    } else {
                        $("#diagram").css("width", "1000px");
                    }

                    // 基于准备好的dom，初始化echarts实例
                    var myChart = echarts.init(document.getElementById('tbDiagram'));
                    // 指定图表的配置项和数据
                    option = {
                        tooltip: {
                            show: true
                        },
                        legend: {
                            data: ['月消费金额', '月消费笔数']
                        },
                        xAxis: [
                            {
                                type: 'category',
//                            data : ['2016-04','2016-05','2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11'],
                                data: months,
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            },
                            {
                                type: 'category',
                                show: false,
                                data: months,
//                            data : ['2016-04','2016-05','2016-06', '2016-07', '2016-08', '2016-09', '2016-10', '2016-11'],
                                axisTick: {
                                    alignWithLabel: true
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: "月消费笔数",

                                axisLabel: {
                                    formatter: '{value}'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            },
                            {
                                type: 'value',
                                name: "月消费金额（元）",
                                axisLabel: {
                                    formatter: '{value}'
                                },
                                axisLine: {
                                    lineStyle: {
                                        color: '#5c5c5c'
                                    }
                                },
                                splitLine: {show: false}
                            }
                        ],
                        series: [
                            {
                                name: '月消费金额',
                                type: 'line',
                                xAxisIndex: 1,
                                yAxisIndex: 1,
                                showAllSymbol: true,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            interval: 0,
                                            formatter: function (data) {
                                                return data.value;
                                            }
                                        }, color: '#4298c7'
                                    }
                                },
                                smooth: false,
                                data: moneys
//                            data: [527.6, 607.4, 911.4, 1648.4,2228.4, 1661.7, 3194.9, 1777.3]
                            },
                            {
                                name: '月消费笔数',
                                type: 'bar',
                                smooth: false,
                                showAllSymbol: true,
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true,
                                            interval: 0,
                                            formatter: function (data) {
                                                return data.value + "笔";
                                            },
                                            textStyle: {
                                                color: '#4298c7'
                                            }
                                        },
                                        color: '#d9ebf4'
                                    }
                                },
                                data: counts
//                                data: [3, 3, 7, 7, 8, 12, 17, 14]
                            }
                        ]

                    };

                    // 使用刚指定的配置项和数据显示图表。
                    myChart.setOption(option);
                </script>


            </div><!--电商数据统计分析-->

            <!--运营商数据统计分析-->
            <div class="info">
                <h2 class="title">运营商数据统计分析</h2>

                <!--运营商数据检测-->
                <div class="items cross">
                    <table>
                        <caption class="middle">运营商数据检测</caption>
                        <thead>
                        <tr>
                            <th width="25%">检测项目</th>
                            <th width="25%">结果</th>
                            <th width="50%">证据</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>拨入电话号码个数</td>
                            <td>56个</td>
                            <td>半年内存在有56个号码的拨入记录</td>
                        </tr>
                        <tr>
                            <td>拨出电话号码个数</td>
                            <td>47个</td>
                            <td>半年内存在有47个号码的拨出记录</td>
                        </tr>
                        <tr>
                            <td>拨入通话总时长</td>
                            <td>225.08分钟</td>
                            <td>半年内被叫总时长为225.08分钟</td>
                        </tr>
                        <tr>
                            <td>拨出通话总时长</td>
                            <td>129.35分钟</td>
                            <td>半年内主叫总时长为129.35分钟</td>
                        </tr>
                        <tr>
                            <td>收到短信条数</td>
                            <td>2条</td>
                            <td>半年内共收到2条短信</td>
                        </tr>
                        <tr>
                            <td>发送短信条数</td>
                            <td>19条</td>
                            <td>半年内共发送19条短信</td>
                        </tr>
                        <tr>
                            <td>话费缴存次数</td>
                            <td>12次</td>
                            <td>半年内有12次话费缴存记录</td>
                        </tr>
                        <tr>
                            <td>话费单次缴存最大金额</td>
                            <td>99.8元</td>
                            <td>半年话费单次缴存最大金额为99.8</td>
                        </tr>
                        <tr>
                            <td>单月通话次数大于200次的月份</td>
                            <td>无</td>
                            <td>所有月份通话次数均小于200次</td>
                        </tr>
                        <tr id="callSizeOver500Month">
                            <td>单月通话次数大于500次的月份</td>
                            <td>无</td>
                            <td>所有月份通话次数均小于500次</td>
                        </tr>
                        <tr>
                            <td>通话时长在1分钟以内的通话记录个数</td>
                            <td>212个</td>
                            <td>半年内存在212个通话记录，通话时长小于1分钟</td>
                        </tr>
                        <tr>
                            <td>通话时长在1~5分钟以内的通话记录个数</td>
                            <td>76个</td>
                            <td>半年内存在76个通话记录，通话时长在1~5分钟之内</td>
                        </tr>
                        <tr>
                            <td>通话时长在5~10分钟以内的通话记录个数</td>
                            <td>8个</td>
                            <td>半年内存在8个通话记录，通话时长在5~10分钟以内</td>
                        </tr>
                        <tr>
                            <td>通话时长在10分钟以上的通话记录个数</td>
                            <td>4个</td>
                            <td>半年内存在4个通话记录，通话时长在10分钟以上</td>
                        </tr>
                        <tr>
                            <td>单次拨入通话最长时长</td>
                            <td>21.78分钟</td>
                            <td>半年内通话记录中，单次拨入通话最长时长为21.78分钟</td>
                        </tr>
                        <tr>
                            <td>单次拨出通话最长时长</td>
                            <td>6.53分钟</td>
                            <td>半年内通话记录中，单次拨出通话最长时长为6.53分钟</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--运营商数据检测-->

                <!--月使用信息-->
                <div class="items cross">
                    <table>
                        <caption class="middle">月使用信息</caption>
                        <thead>
                        <tr>
                            <th style="width: 12%">月份</th>
                            <th style="width: 12%">主叫次数</th>
                            <th style="width: 13%">主叫时间</th>
                            <th style="width: 13%">被叫次数</th>
                            <th style="width: 13%">被叫时间</th>
                            <th style="width: 13%">短信数量</th>
                            <th style="width: 20%">消费金额</th>
                        </tr>
                        </thead>
                        <tbody id="mnoMonthInfos" class="mnoMonthInfos">
                        <tr>
                            <td>2018-04</td>
                            <td>11</td>
                            <td class="time">559分</td>
                            <td>27</td>
                            <td class="time">1140分</td>
                            <td>5</td>
                            <td>114.40元</td>
                        </tr>
                        <tr>
                            <td>2018-03</td>
                            <td>23</td>
                            <td class="time">1318分</td>
                            <td>26</td>
                            <td class="time">1000分</td>
                            <td>1</td>
                            <td>114.10元</td>
                        </tr>
                        <tr>
                            <td>2018-02</td>
                            <td>42</td>
                            <td class="time">2562分</td>
                            <td>48</td>
                            <td class="time">4987分</td>
                            <td>4</td>
                            <td>114.50元</td>
                        </tr>
                        <tr>
                            <td>2018-01</td>
                            <td>27</td>
                            <td class="time">1271分</td>
                            <td>27</td>
                            <td class="time">1876分</td>
                            <td>9</td>
                            <td>122.60元</td>
                        </tr>
                        <tr>
                            <td>2017-12</td>
                            <td>33</td>
                            <td class="time">1996分</td>
                            <td>30</td>
                            <td class="time">4220分</td>
                            <td>2</td>
                            <td>114.93元</td>
                        </tr>
                        <tr>
                            <td>2017-11</td>
                            <td>3</td>
                            <td class="time">55分</td>
                            <td>3</td>
                            <td class="time">282分</td>
                            <td>0</td>
                            <td>0元</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--月使用信息-->


                <!--常用联系电话TOP3（近一周）-->
                <div class="items detail">
                    <table>
                        <caption class="middle">常用联系电话TOP3（近一周）</caption>
                        <thead>
                        <tr>
                            <th style="width: 9%">通话号码</th>
                            <th style="width: 5%">运营商</th>
                            <th style="width: 7%">归属地</th>
                            <th style="width: 7%">第一次联系时间</th>
                            <th style="width: 8%">最近一次联系时间</th>
                            <th style="width: 8%">联系次数 / 联系时间</th>
                            <th style="width: 8%">主叫次数 / 主叫时间</th>
                            <th style="width: 8%">被叫次数 / 被叫时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <span>053258770968</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523689604000</td>
                            <td class="timestamp">1523767876000</td>
                            <td class="timeSplit">10 / 244分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">10 / 244分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13336392331</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523792436000</td>
                            <td class="timestamp">1523793276000</td>
                            <td class="timeSplit">2 / 164分</td>
                            <td class="timeSplit">2 / 164分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18363857597</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1523782846000</td>
                            <td class="timestamp">1523790458000</td>
                            <td class="timeSplit">2 / 21分</td>
                            <td class="timeSplit">1 / 2分</td>
                            <td class="timeSplit">1 / 19分</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--常用联系电话TOP3（近一周）-->

                <!--常用联系电话 TOP10（近1个月）-->
                <div class="items detail">
                    <table>
                        <caption class="middle">常用联系电话 TOP10（近1个月）</caption>
                        <thead>
                        <tr>
                            <th style="width: 9%">通话号码</th>
                            <th style="width: 5%">运营商</th>
                            <th style="width: 7%">归属地</th>
                            <th style="width: 7%">第一次联系时间</th>
                            <th style="width: 8%">最近一次联系时间</th>
                            <th style="width: 8%">联系次数 / 联系时间</th>
                            <th style="width: 8%">主叫次数 / 主叫时间</th>
                            <th style="width: 8%">被叫次数 / 被叫时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <span>053258770968</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523689604000</td>
                            <td class="timestamp">1523767876000</td>
                            <td class="timeSplit">10 / 244分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">10 / 244分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18363857597</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1522484638000</td>
                            <td class="timestamp">1523790458000</td>
                            <td class="timeSplit">7 / 419分</td>
                            <td class="timeSplit">4 / 78分</td>
                            <td class="timeSplit">3 / 341分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15066223348</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1522586387000</td>
                            <td class="timestamp">1522733493000</td>
                            <td class="timeSplit">7 / 421分</td>
                            <td class="timeSplit">4 / 285分</td>
                            <td class="timeSplit">3 / 136分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13698673624</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1521868213000</td>
                            <td class="timestamp">1522665594000</td>
                            <td class="timeSplit">4 / 128分</td>
                            <td class="timeSplit">2 / 45分</td>
                            <td class="timeSplit">2 / 83分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18764230190</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1521851986000</td>
                            <td class="timestamp">1521852061000</td>
                            <td class="timeSplit">3 / 70分</td>
                            <td class="timeSplit">2 / 60分</td>
                            <td class="timeSplit">1 / 10分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15563886389</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1522151976000</td>
                            <td class="timestamp">1523185660000</td>
                            <td class="timeSplit">3 / 53分</td>
                            <td class="timeSplit">2 / 36分</td>
                            <td class="timeSplit">1 / 17分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13854217213</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1522664370000</td>
                            <td class="timestamp">1522746963000</td>
                            <td class="timeSplit">3 / 161分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">3 / 161分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13336392331</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523792436000</td>
                            <td class="timestamp">1523793276000</td>
                            <td class="timeSplit">2 / 164分</td>
                            <td class="timeSplit">2 / 164分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15336486438</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1522373731000</td>
                            <td class="timestamp">1522373804000</td>
                            <td class="timeSplit">2 / 351分</td>
                            <td class="timeSplit">1 / 350分</td>
                            <td class="timeSplit">1 / 1分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18661671531</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523170115000</td>
                            <td class="timestamp">1523236559000</td>
                            <td class="timeSplit">2 / 23分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 23分</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--常用联系电话 TOP10（近1个月）-->


                <!--常用联系电话（近6个月）-->
                <div class="items detail">
                    <table>
                        <caption class="middle">常用联系电话（近6个月）</caption>
                        <thead>
                        <tr>
                            <th style="width: 9%">通话号码</th>
                            <th style="width: 5%">运营商</th>
                            <th style="width: 7%">归属地</th>
                            <th style="width: 7%">第一次联系时间</th>
                            <th style="width: 8%">最近一次联系时间</th>
                            <th style="width: 8%">联系次数 / 联系时间</th>
                            <th style="width: 8%">主叫次数 / 主叫时间</th>
                            <th style="width: 8%">被叫次数 / 被叫时间</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <span>15563886389</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1511851050000</td>
                            <td class="timestamp">1523185660000</td>
                            <td class="timeSplit">31 / 1477分</td>
                            <td class="timeSplit">14 / 911分</td>
                            <td class="timeSplit">17 / 566分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15066223348</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512651957000</td>
                            <td class="timestamp">1522733493000</td>
                            <td class="timeSplit">29 / 1611分</td>
                            <td class="timeSplit">13 / 981分</td>
                            <td class="timeSplit">16 / 630分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18363857597</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1517640167000</td>
                            <td class="timestamp">1523790458000</td>
                            <td class="timeSplit">25 / 1073分</td>
                            <td class="timeSplit">17 / 468分</td>
                            <td class="timeSplit">8 / 605分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13371499901</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512038910000</td>
                            <td class="timestamp">1519953661000</td>
                            <td class="timeSplit">20 / 807分</td>
                            <td class="timeSplit">10 / 385分</td>
                            <td class="timeSplit">10 / 422分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18661671531</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513070087000</td>
                            <td class="timestamp">1523236559000</td>
                            <td class="timeSplit">20 / 3366分</td>
                            <td class="timeSplit">8 / 327分</td>
                            <td class="timeSplit">12 / 3039分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13698673624</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513416074000</td>
                            <td class="timestamp">1522665594000</td>
                            <td class="timeSplit">15 / 839分</td>
                            <td class="timeSplit">7 / 481分</td>
                            <td class="timeSplit">8 / 358分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13854217213</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1514077945000</td>
                            <td class="timestamp">1522746963000</td>
                            <td class="timeSplit">10 / 467分</td>
                            <td class="timeSplit">4 / 250分</td>
                            <td class="timeSplit">6 / 217分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13365321023</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512992658000</td>
                            <td class="timestamp">1520067466000</td>
                            <td class="timeSplit">10 / 1426分</td>
                            <td class="timeSplit">8 / 932分</td>
                            <td class="timeSplit">2 / 494分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>053258770968</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523689604000</td>
                            <td class="timestamp">1523767876000</td>
                            <td class="timeSplit">10 / 244分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">10 / 244分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13963985583</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513158835000</td>
                            <td class="timestamp">1519372614000</td>
                            <td class="timeSplit">8 / 415分</td>
                            <td class="timeSplit">3 / 123分</td>
                            <td class="timeSplit">5 / 292分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>17854260342</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1511948935000</td>
                            <td class="timestamp">1523069783000</td>
                            <td class="timeSplit">7 / 347分</td>
                            <td class="timeSplit">4 / 168分</td>
                            <td class="timeSplit">3 / 179分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18300299197</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1515928219000</td>
                            <td class="timestamp">1519794580000</td>
                            <td class="timeSplit">5 / 1575分</td>
                            <td class="timeSplit">1 / 15分</td>
                            <td class="timeSplit">4 / 1560分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13153232747</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1514684287000</td>
                            <td class="timestamp">1519187306000</td>
                            <td class="timeSplit">4 / 518分</td>
                            <td class="timeSplit">3 / 442分</td>
                            <td class="timeSplit">1 / 76分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>17852537885</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1513066109000</td>
                            <td class="timestamp">1514783149000</td>
                            <td class="timeSplit">4 / 207分</td>
                            <td class="timeSplit">3 / 141分</td>
                            <td class="timeSplit">1 / 66分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15864295880</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512299539000</td>
                            <td class="timestamp">1518574363000</td>
                            <td class="timeSplit">4 / 173分</td>
                            <td class="timeSplit">1 / 39分</td>
                            <td class="timeSplit">3 / 134分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15066881382</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519190031000</td>
                            <td class="timestamp">1519450876000</td>
                            <td class="timeSplit">4 / 396分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">4 / 396分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18281824838</span>
                            </td>
                            <td>中国移动</td>
                            <td>四川省达州市</td>
                            <td class="timestamp">1517833224000</td>
                            <td class="timestamp">1518091885000</td>
                            <td class="timeSplit">4 / 986分</td>
                            <td class="timeSplit">1 / 125分</td>
                            <td class="timeSplit">3 / 861分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13730986331</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1516541700000</td>
                            <td class="timestamp">1521529616000</td>
                            <td class="timeSplit">4 / 865分</td>
                            <td class="timeSplit">2 / 99分</td>
                            <td class="timeSplit">2 / 766分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13255320025</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1514628143000</td>
                            <td class="timestamp">1519599262000</td>
                            <td class="timeSplit">4 / 151分</td>
                            <td class="timeSplit">4 / 151分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15192673575</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1514892991000</td>
                            <td class="timestamp">1516512778000</td>
                            <td class="timeSplit">3 / 184分</td>
                            <td class="timeSplit">1 / 82分</td>
                            <td class="timeSplit">2 / 102分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18660202740</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513324333000</td>
                            <td class="timestamp">1513408472000</td>
                            <td class="timeSplit">3 / 263分</td>
                            <td class="timeSplit">1 / 53分</td>
                            <td class="timeSplit">2 / 210分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18764230190</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1521851986000</td>
                            <td class="timestamp">1521852061000</td>
                            <td class="timeSplit">3 / 70分</td>
                            <td class="timeSplit">2 / 60分</td>
                            <td class="timeSplit">1 / 10分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18678939234</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1517833132000</td>
                            <td class="timestamp">1517833478000</td>
                            <td class="timeSplit">3 / 112分</td>
                            <td class="timeSplit">2 / 55分</td>
                            <td class="timeSplit">1 / 57分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13336392331</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523792436000</td>
                            <td class="timestamp">1523793276000</td>
                            <td class="timeSplit">2 / 164分</td>
                            <td class="timeSplit">2 / 164分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13296421005</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1516876695000</td>
                            <td class="timestamp">1516876996000</td>
                            <td class="timeSplit">2 / 224分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 224分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18661741600</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513928421000</td>
                            <td class="timestamp">1513928465000</td>
                            <td class="timeSplit">2 / 39分</td>
                            <td class="timeSplit">2 / 39分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18253250622</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1520579931000</td>
                            <td class="timestamp">1520582280000</td>
                            <td class="timeSplit">2 / 66分</td>
                            <td class="timeSplit">2 / 66分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15684714218</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1516613104000</td>
                            <td class="timestamp">1523784439000</td>
                            <td class="timeSplit">2 / 56分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 56分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15806580366</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1515134644000</td>
                            <td class="timestamp">1515134775000</td>
                            <td class="timeSplit">2 / 34分</td>
                            <td class="timeSplit">1 / 16分</td>
                            <td class="timeSplit">1 / 18分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13325013721</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1518298485000</td>
                            <td class="timestamp">1518330360000</td>
                            <td class="timeSplit">2 / 24分</td>
                            <td class="timeSplit">1 / 13分</td>
                            <td class="timeSplit">1 / 11分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15336486438</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1522373731000</td>
                            <td class="timestamp">1522373804000</td>
                            <td class="timeSplit">2 / 351分</td>
                            <td class="timeSplit">1 / 350分</td>
                            <td class="timeSplit">1 / 1分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15066843279</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1516770279000</td>
                            <td class="timestamp">1520425187000</td>
                            <td class="timeSplit">2 / 43分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 43分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18553217665</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1515216927000</td>
                            <td class="timestamp">1515835155000</td>
                            <td class="timeSplit">2 / 58分</td>
                            <td class="timeSplit">2 / 58分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15866815387</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519862609000</td>
                            <td class="timestamp">1519862893000</td>
                            <td class="timeSplit">2 / 66分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 66分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13732006177</span>
                            </td>
                            <td>中国移动</td>
                            <td>浙江省温州市</td>
                            <td class="timestamp">1514535509000</td>
                            <td class="timestamp">1514535837000</td>
                            <td class="timeSplit">2 / 186分</td>
                            <td class="timeSplit">1 / 35分</td>
                            <td class="timeSplit">1 / 151分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15194219867</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1522715492000</td>
                            <td class="timestamp">1522715773000</td>
                            <td class="timeSplit">2 / 61分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 61分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15964979343</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1520836926000</td>
                            <td class="timestamp">1520837436000</td>
                            <td class="timeSplit">2 / 198分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">2 / 198分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13210061750</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1520396674000</td>
                            <td class="timestamp">1520571102000</td>
                            <td class="timeSplit">2 / 53分</td>
                            <td class="timeSplit">1 / 36分</td>
                            <td class="timeSplit">1 / 17分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>17660625566</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1516875516000</td>
                            <td class="timestamp">1516875516000</td>
                            <td class="timeSplit">1 / 22分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 22分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18660274041</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1517640115000</td>
                            <td class="timestamp">1517640115000</td>
                            <td class="timeSplit">1 / 21分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 21分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15966836851</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1518243995000</td>
                            <td class="timestamp">1518243995000</td>
                            <td class="timeSplit">1 / 68分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 68分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18561956606</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519186411000</td>
                            <td class="timestamp">1519186411000</td>
                            <td class="timeSplit">1 / 129分</td>
                            <td class="timeSplit">1 / 129分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15264539331</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省烟台市</td>
                            <td class="timestamp">1519355656000</td>
                            <td class="timestamp">1519355656000</td>
                            <td class="timeSplit">1 / 23分</td>
                            <td class="timeSplit">1 / 23分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15092116922</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1518573069000</td>
                            <td class="timestamp">1518573069000</td>
                            <td class="timeSplit">1 / 122分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 122分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>075536552536</span>
                            </td>
                            <td>未知</td>
                            <td>广东省深圳市</td>
                            <td class="timestamp">1521698218000</td>
                            <td class="timestamp">1521698218000</td>
                            <td class="timeSplit">1 / 112分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 112分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>053258694276</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1520395371000</td>
                            <td class="timestamp">1520395371000</td>
                            <td class="timeSplit">1 / 46分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 46分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13256395099</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1520473462000</td>
                            <td class="timestamp">1520473462000</td>
                            <td class="timeSplit">1 / 61分</td>
                            <td class="timeSplit">1 / 61分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>95566</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1512003872000</td>
                            <td class="timestamp">1512003872000</td>
                            <td class="timeSplit">1 / 45分</td>
                            <td class="timeSplit">1 / 45分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15192719755</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519176405000</td>
                            <td class="timestamp">1519176405000</td>
                            <td class="timeSplit">1 / 34分</td>
                            <td class="timeSplit">1 / 34分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18653289423</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513514659000</td>
                            <td class="timestamp">1513514659000</td>
                            <td class="timeSplit">1 / 35分</td>
                            <td class="timeSplit">1 / 35分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15863030690</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1516515593000</td>
                            <td class="timestamp">1516515593000</td>
                            <td class="timeSplit">1 / 63分</td>
                            <td class="timeSplit">1 / 63分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>01067440407</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1521697352000</td>
                            <td class="timestamp">1521697352000</td>
                            <td class="timeSplit">1 / 52分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 52分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>053258691408</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513245992000</td>
                            <td class="timestamp">1513245992000</td>
                            <td class="timeSplit">1 / 54分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 54分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15954253882</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1514859329000</td>
                            <td class="timestamp">1514859329000</td>
                            <td class="timeSplit">1 / 21分</td>
                            <td class="timeSplit">1 / 21分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>053288483778</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512372225000</td>
                            <td class="timestamp">1512372225000</td>
                            <td class="timeSplit">1 / 52分</td>
                            <td class="timeSplit">1 / 52分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15820928809</span>
                            </td>
                            <td>中国移动</td>
                            <td>广东省东莞市</td>
                            <td class="timestamp">1513306751000</td>
                            <td class="timestamp">1513306751000</td>
                            <td class="timeSplit">1 / 79分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 79分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>053258734987</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1518775410000</td>
                            <td class="timestamp">1518775410000</td>
                            <td class="timeSplit">1 / 67分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 67分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>4000532799</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1519863461000</td>
                            <td class="timestamp">1519863461000</td>
                            <td class="timeSplit">1 / 14分</td>
                            <td class="timeSplit">1 / 14分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15192063752</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1515570100000</td>
                            <td class="timestamp">1515570100000</td>
                            <td class="timeSplit">1 / 80分</td>
                            <td class="timeSplit">1 / 80分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15966857418</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519863510000</td>
                            <td class="timestamp">1519863510000</td>
                            <td class="timeSplit">1 / 26分</td>
                            <td class="timeSplit">1 / 26分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>051283995151</span>
                            </td>
                            <td>未知</td>
                            <td>江苏省苏州市</td>
                            <td class="timestamp">1516094314000</td>
                            <td class="timestamp">1516094314000</td>
                            <td class="timeSplit">1 / 1分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 1分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15966888963</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519188980000</td>
                            <td class="timestamp">1519188980000</td>
                            <td class="timeSplit">1 / 98分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 98分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18653263489</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519784560000</td>
                            <td class="timestamp">1519784560000</td>
                            <td class="timeSplit">1 / 102分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 102分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15092105261</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1523101646000</td>
                            <td class="timestamp">1523101646000</td>
                            <td class="timeSplit">1 / 106分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 106分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>15820035366</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1519188612000</td>
                            <td class="timestamp">1519188612000</td>
                            <td class="timeSplit">1 / 2分</td>
                            <td class="timeSplit">1 / 2分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13475428326</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512562331000</td>
                            <td class="timestamp">1512562331000</td>
                            <td class="timeSplit">1 / 22分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 22分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13864854152</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513854627000</td>
                            <td class="timestamp">1513854627000</td>
                            <td class="timeSplit">1 / 39分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 39分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>02860617613</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1520152259000</td>
                            <td class="timestamp">1520152259000</td>
                            <td class="timeSplit">1 / 12分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 12分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>10086</span>
                            </td>
                            <td>中国移动</td>
                            <td>未知</td>
                            <td class="timestamp">1511746561000</td>
                            <td class="timestamp">1511746561000</td>
                            <td class="timeSplit">1 / 2分</td>
                            <td class="timeSplit">1 / 2分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>10085</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1512962915000</td>
                            <td class="timestamp">1512962915000</td>
                            <td class="timeSplit">1 / 7分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 7分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>17753255916</span>
                            </td>
                            <td>中国电信</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1512972422000</td>
                            <td class="timestamp">1512972422000</td>
                            <td class="timeSplit">1 / 25分</td>
                            <td class="timeSplit">1 / 25分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>95066</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1517640075000</td>
                            <td class="timestamp">1517640075000</td>
                            <td class="timeSplit">1 / 23分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 23分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>053285755366</span>
                            </td>
                            <td>未知</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1515740203000</td>
                            <td class="timestamp">1515740203000</td>
                            <td class="timeSplit">1 / 45分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 45分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>13954218876</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1513742377000</td>
                            <td class="timestamp">1513742377000</td>
                            <td class="timeSplit">1 / 50分</td>
                            <td class="timeSplit">1 / 50分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18864820353</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省泰安市</td>
                            <td class="timestamp">1516787027000</td>
                            <td class="timestamp">1516787027000</td>
                            <td class="timeSplit">1 / 21分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 21分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>17664052804</span>
                            </td>
                            <td>中国联通</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1511705291000</td>
                            <td class="timestamp">1511705291000</td>
                            <td class="timeSplit">1 / 147分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 147分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>18706427126</span>
                            </td>
                            <td>中国移动</td>
                            <td>山东省青岛市</td>
                            <td class="timestamp">1522817366000</td>
                            <td class="timestamp">1522817366000</td>
                            <td class="timeSplit">1 / 34分</td>
                            <td class="timeSplit">1 / 34分</td>
                            <td class="timeSplit">0 / 0分</td>
                        </tr>
                        <tr>
                            <td>
                                <span>95141405</span>
                            </td>
                            <td>未知</td>
                            <td>未知</td>
                            <td class="timestamp">1519828097000</td>
                            <td class="timestamp">1519828097000</td>
                            <td class="timeSplit">1 / 109分</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 109分</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--常用联系电话（近6个月）-->


                <!--本人通话活动地区-->
                <div class="items cross">
                    <table>
                        <caption class="middle">本人通话活动地区</caption>
                        <thead>
                        <tr>
                            <th style="width: 10%">地区</th>
                            <th style="width: 8%">通话次数</th>
                            <th style="width: 12%">呼入次数 / 呼入时间</th>
                            <th style="width: 12%">呼出次数 / 呼出时间</th>
                            <th style="width: 10%">呼入次数占比</th>
                            <th style="width: 10%">呼出次数占比</th>
                            <th style="width: 10%">呼入时间占比</th>
                            <th style="width: 10%">呼出时间占比</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>未知</td>
                            <td>300</td>
                            <td class="timeSplit">161 / 13505分</td>
                            <td class="timeSplit">139 / 7761分</td>
                            <td>100.00%</td>
                            <td>100.00%</td>
                            <td>100.00%</td>
                            <td>100.00%</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--本人通话活动地区-->


                <!--联系人通话活动地区-->
                <div class="items cross">
                    <table>
                        <caption class="middle">联系人通话活动地区</caption>
                        <thead>
                        <tr>
                            <th style="width: 10%">地区</th>
                            <th style="width: 8%">通话次数</th>
                            <th style="width: 12%">呼入次数 / 呼入时间</th>
                            <th style="width: 12%">呼出次数 / 呼出时间</th>
                            <th style="width: 10%">呼入次数占比</th>
                            <th style="width: 10%">呼出次数占比</th>
                            <th style="width: 10%">呼入时间占比</th>
                            <th style="width: 10%">呼出时间占比</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>山东省青岛市</td>
                            <td>221</td>
                            <td class="timeSplit">99 / 5997分</td>
                            <td class="timeSplit">122 / 10840分</td>
                            <td>71.22%</td>
                            <td>75.78%</td>
                            <td>77.27%</td>
                            <td>80.27%</td>
                        </tr>
                        <tr>
                            <td>山东省烟台市</td>
                            <td>61</td>
                            <td class="timeSplit">35 / 1543分</td>
                            <td class="timeSplit">26 / 1237分</td>
                            <td>25.18%</td>
                            <td>16.15%</td>
                            <td>19.88%</td>
                            <td>9.16%</td>
                        </tr>
                        <tr>
                            <td>未知</td>
                            <td>8</td>
                            <td class="timeSplit">3 / 61分</td>
                            <td class="timeSplit">5 / 203分</td>
                            <td>2.16%</td>
                            <td>3.11%</td>
                            <td>0.79%</td>
                            <td>1.50%</td>
                        </tr>
                        <tr>
                            <td>四川省达州市</td>
                            <td>4</td>
                            <td class="timeSplit">1 / 125分</td>
                            <td class="timeSplit">3 / 861分</td>
                            <td>0.72%</td>
                            <td>1.86%</td>
                            <td>1.61%</td>
                            <td>6.38%</td>
                        </tr>
                        <tr>
                            <td>浙江省温州市</td>
                            <td>2</td>
                            <td class="timeSplit">1 / 35分</td>
                            <td class="timeSplit">1 / 151分</td>
                            <td>0.72%</td>
                            <td>0.62%</td>
                            <td>0.45%</td>
                            <td>1.12%</td>
                        </tr>
                        <tr>
                            <td>江苏省苏州市</td>
                            <td>1</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 1分</td>
                            <td>0.00%</td>
                            <td>0.62%</td>
                            <td>0.00%</td>
                            <td>0.01%</td>
                        </tr>
                        <tr>
                            <td>广东省深圳市</td>
                            <td>1</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 112分</td>
                            <td>0.00%</td>
                            <td>0.62%</td>
                            <td>0.00%</td>
                            <td>0.83%</td>
                        </tr>
                        <tr>
                            <td>山东省泰安市</td>
                            <td>1</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 21分</td>
                            <td>0.00%</td>
                            <td>0.62%</td>
                            <td>0.00%</td>
                            <td>0.16%</td>
                        </tr>
                        <tr>
                            <td>广东省东莞市</td>
                            <td>1</td>
                            <td class="timeSplit">0 / 0分</td>
                            <td class="timeSplit">1 / 79分</td>
                            <td>0.00%</td>
                            <td>0.62%</td>
                            <td>0.00%</td>
                            <td>0.58%</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--联系人通话活动地区-->

                <!--分时间段统计-->
                <div class="items cross">
                    <table>
                        <caption class="middle">分时间段统计</caption>
                        <thead>
                        <tr>
                            <th style="width: 20%">时间段</th>
                            <th style="width: 15%">主叫次数</th>
                            <th style="width: 15%">主叫时间</th>
                            <th style="width: 15%">被叫次数</th>
                            <th style="width: 15%">被叫时间</th>
                            <th style="width: 20%">短信数量</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>06:00 ~ 08:29</td>
                            <td>8</td>
                            <td class="time">464分</td>
                            <td>12</td>
                            <td class="time">788分</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>08:30 ~ 11:59</td>
                            <td>38</td>
                            <td class="time">2258分</td>
                            <td>32</td>
                            <td class="time">2620分</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>12:00 ~ 13:59</td>
                            <td>20</td>
                            <td class="time">1435分</td>
                            <td>32</td>
                            <td class="time">2240分</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>14:00 ~ 17:59</td>
                            <td>44</td>
                            <td class="time">1462分</td>
                            <td>47</td>
                            <td class="time">2453分</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>18:00 ~ 19:59</td>
                            <td>14</td>
                            <td class="time">1037分</td>
                            <td>26</td>
                            <td class="time">2881分</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>20:00 ~ 23:29</td>
                            <td>15</td>
                            <td class="time">1105分</td>
                            <td>11</td>
                            <td class="time">2512分</td>
                            <td>2</td>
                        </tr>
                        <tr>
                            <td>23:30 ~ 05:59</td>
                            <td>0</td>
                            <td class="time">0分</td>
                            <td>1</td>
                            <td class="time">11分</td>
                            <td>3</td>
                        </tr>
                        </tbody>
                    </table>
                </div><!--分时间段统计-->



            </div><!--运营商数据统计分析-->



        </div><!--main-->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                reportMain: null
            };
        },
        components: {},
        computed: {},
        methods: {},
        mounted() {},
        created() {

        }
    };
</script>
