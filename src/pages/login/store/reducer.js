import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultStore = fromJS({
    login: false
});

export default (state = defaultStore, action) => {
    switch(action.type) {
        case constant.CHANGE_LOGIN:
            return state.set('login', action.value);
        default:
            return state;
    }
}
