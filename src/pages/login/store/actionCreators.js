import axios from 'axios';
import * as constant from './constant';

const changeLogin = () => ({
    type: constant.CHANGE_LOGIN,
    value: true
});

const changeLogout = () => ({
    type: constant.CHANGE_LOGIN,
    value: false
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account=' + account + '&password=' + password).then(res => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            } else {
                alert('登录失败');
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(changeLogout());
    }
}
