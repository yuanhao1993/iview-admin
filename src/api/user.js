import util from '@/libs/util';

const request = util.ajax;

export function login(data) {
    return request({
        url: '/login/',
        method: 'post',
        data: data
    });
}
