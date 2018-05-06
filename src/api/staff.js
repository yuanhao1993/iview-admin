import util from '@/libs/util';

const request = util.ajax;

export function fetchStaff(params) {
    return request({
        url: '/yunhu/usermodel/',
        method: 'get',
        params
    });
}
export function newStaff(data) {
    return request({
        url: '/yunhu/usermodel/',
        method: 'post',
        data
    });
}
export function editStaff(id, data) {
    return request({
        url: `/yunhu/usermodel/${id}/`,
        method: 'patch',
        data
    });
}

export function fetchCurrtStaff(id) {
    return request({
        url: `/yunhu/usermodel/${id}/`,
        method: 'get'
    });
}
export function deleteStaff(id) {
    return request({
        url: `/yunhu/usermodel/${id}/`,
        method: 'delete'
    });
}
