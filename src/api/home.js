import util from '@/libs/util';

const request = util.ajax;

export function statusAnalysisToday (params) {
    return request({
        url: '/yunhu/customermodel/status_analysis_today/',
        method: 'get',
        params
    });
}
export function channelAnalysis (params) {
    return request({
        url: '/yunhu/customermodel/channel_analysis/',
        method: 'get',
        params
    });
}
// 消费量
export function expensemodel (params) {
    return request({
        url: '/yunhu/expensemodel/user_analysis/',
        method: 'get',
        params
    });
}
// 客户状态
export function customerStatus (params) {
    return request({
        url: '/yunhu/customermodel/status_analysis/',
        method: 'get',
        params
    });
}
// 客户来源统计
export function customerSource (params) {
    return request({
        url: '/yunhu/customermodel/channel_analysis/',
        method: 'get',
        params
    });
}
// 客户消费
export function customerExpense (params) {
    return request({
        url: '/yunhu/expensemodel/',
        method: 'get',
        params
    });
}