import { fromJS } from 'immutable';
import * as constant from './constant';

const defaultStore = fromJS({
    topicList: [],
    articleList: [],
    recommendList: [],
    codeShow: false,
    writerList: [],
    showScroll: false
});

const initHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.data.topicList),
        articleList: fromJS(action.data.articleList),
        recommendList: fromJS(action.data.recommendList),
        writerList: fromJS(action.data.writerList)
    });
}

export default (state = defaultStore, action) => {
    switch(action.type) {
        case 'mouse_enter':
            return state.set('codeShow', true);
        case 'mouse_leave':
            return state.set('codeShow', false);
        case constant.INIT_HOME_DATA:
            return initHomeData(state, action);
        case constant.MORE_LIST:
            return state.set('articleList', state.get('articleList').concat(action.data))
        case constant.TOGGLE_SCROLL:
            return state.set('showScroll', action.data);
        default:
            return state;
    }
}
