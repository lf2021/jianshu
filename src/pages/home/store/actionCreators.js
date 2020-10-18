import axios from 'axios';
import { fromJS } from 'immutable';
import * as constant from './constant';

const getHomeData = (result) => ({
    type: constant.INIT_HOME_DATA,
    data: result
});

const getMoreData = (result) => ({
    type: constant.MORE_LIST,
    data: fromJS(result) // 因为这里是要传到reducer去做immutable数组的拼接，所以这里也必须是immutable数组
})

const toggleShow = (data) => ({
    type: constant.TOGGLE_SCROLL,
    data
})

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then(res => {
            const result = res.data.data;
            dispatch(getHomeData(result));
        })
    }
}

export const getMoreList = () => {
    return (dispatch) => {
        axios.get('/api/homeList.json').then(res => {
            const result = res.data.data;
            dispatch(getMoreData(result));
        })
    }
}

export const toggleScrollShow = (data) => {
    return (dispatch) => {
        dispatch(toggleShow(data))
    }
}
