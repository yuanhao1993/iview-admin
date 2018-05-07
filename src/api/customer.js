import util from '@/libs/util';

const request = util.ajax;

export function fetch(params) {
    return request({
        url: '/yunhu/customermodel/',
        method: 'get',
        params
    });
}

export function loadCustomerById(id) {
    return request({
        url: `/yunhu/customermodel/${id}/`,
        method: 'get',
        params: {
            limit: '',
            offset: '',
            search: ''
        }
    });
}

export function fetchcheckWays(params) {
    return request({
        url: '/yunhu/checkwaymodel/',
        method: 'get',
        params
    });
}

export function fetchChCurrt(id) {
    return request({
        url: `/yunhu/channelmodel/${id}/`,
        method: 'get'
    });
}

export function newChannel(data) {
    return request({
        url: '/yunhu/channelmodel/',
        method: 'post',
        data
    });
}

export function editChannel(id, data) {
    return request({
        url: `/yunhu/channelmodel/${id}/`,
        method: 'patch',
        data
    });
}

export function deleteChannel(id) {
    return request({
        url: `/yunhu/channelmodel/${id}/`,
        method: 'delete'
    });
}

export function fetchZxyReport(id) {
    console.log("---------==========---------------")
    return request({
        url: `/yunhu/customermodel/${id}/zxy_report/`,
        method: 'get'
    });
}
