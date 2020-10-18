import React, { PureComponent } from 'react';
import Writer from './components/Writer';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style';

class Home extends PureComponent {
    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="banner-img" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/5006/537c82a858e7b0739b26ccb64d318f5e2ba6fbab.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={() => this.handleScrollTop()}>回到顶部</BackTop> : null
                }
                
            </HomeWrapper>
        );
    }

    componentDidMount() {
        this.props.handleInitHome();
        this.bindEvents();
    }

    UNSAFE_componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollShow)
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
    handleInitHome() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollShow() {
        if (document.documentElement.scrollTop > 400) {
            dispatch(actionCreators.toggleScrollShow(true));
        } else {
            dispatch(actionCreators.toggleScrollShow(false));
        }
    }
})

export default connect(mapState, mapDispatch)(Home);
