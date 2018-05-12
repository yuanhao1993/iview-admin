import util from '@/libs/util';

const request = util.ajax;

export function fetchBlack(params) {
    return request({
        url: '/yunhu/customermodel/',
        method: 'get',
        params: {
            is_black: true
        }
    });
}

// 移除黑名单api
export function outCurrt(id, data) {
    return request({
        url: `/yunhu/customermodel/${id}/`,
        method: 'patch',
        data
    });
}