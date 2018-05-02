import util from '@/libs/util';

const request = util.ajax;

export function fetch(params) {
    return request({
        url: '/yunhu/customeraudit/',
        method: 'get',
        params
    });
}

export function loadById(id) {
    return request({
        url: `/yunhu/customeraudit/${id}/`,
        method: 'get',
        params: {
            limit: '',
            offset: '',
            search: ''
        }
    });
}

export function fetchUserList() {
    return request({
        url: '/yunhu/usermodel/?department=2',
        method: 'get'
    });
}

export function update(id, data) {
    return request({
        url: `/yunhu/customeraudit/${id}/`,
        method: 'patch',
        data: data
    });
}
