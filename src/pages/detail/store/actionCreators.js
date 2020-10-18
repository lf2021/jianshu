import axios from 'axios';
import * as constant from './constant'

const changeDetail = (result) => ({
    type: constant.GET_DETAIL,
    data: result
})

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id).then(res => {
            const result = res.data.data;
            dispatch(changeDetail(result));
        })
    }
}
