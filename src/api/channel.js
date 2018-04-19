import util from '@/libs/util';

const request = util.ajax;

export function fetchchannel (params) {
    console.log('login work;');
    return request({
        url: '/yunhu/channelmodel/',
        method: 'get',
        params
    });
}
