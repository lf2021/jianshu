import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultStore = fromJS({
    title: '',
    content: ''
});


export default (state = defaultStore, action) => {
    switch(action.type) {
        case constant.GET_DETAIL:
            return state.merge({
                title: action.data.title,
                content: action.data.content
            });
        default:
            return state;
    }
}
