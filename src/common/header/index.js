import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    NavSearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Additon,
    Button
} from './style';

class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur, list, login } = this.props;
        
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <Link to='/'>
                        <NavItem className="left active">首页</NavItem>
                    </Link>
                    <NavItem className="left">下载</NavItem>
                    {
                        login ?
                        <NavItem className="right" onClick={this.props.logout}>退出</NavItem> :
                        <Link to='/login'><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavSearchWrapper>
                        <CSSTransition
                            timeout={200}
                            in={focused}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'left focused' : 'left'}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i
                            className={focused ? 'iconfont zoom focused' : 'iconfont zoom'}
                        >&#xe60c;</i>
                        { this.getSearchInfoArea() }
                    </NavSearchWrapper>
                </Nav>
                <Additon>
                    <Link to='/write'>
                        <Button className="writting">写文章</Button>
                    </Link>
                    <Button className="reg">注册</Button>
                </Additon>
            </HeaderWrapper>
        )
    }

    getSearchInfoArea() {
        const { focused, list, page, totalPage, handleMouseEnter, handleMouseLeave, mouseIn, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for(let i = (page - 1) * 10; i < page * 10; i++) {
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                );
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => this.spinIcon = icon} className="iconfont spin">&#xe851;</i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            );
        } else {
            return null;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        login: state.getIn(['login', 'login'])
    }
}

const mapDispatchToProps = (dispatch) => ({
    handleInputFocus(list) {
        (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
        dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
        dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, icon) {
        let originAngle = icon.style.transform.replace(/[^0-9]/ig, '');
        if (originAngle) {
            originAngle = parseInt(originAngle, 10);
        } else {
            originAngle = 0;
        }
        icon.style.transform = 'rotate(' + (originAngle + 360 ) + 'deg)';
        if (page < totalPage) {
            dispatch(actionCreators.changePage(page + 1));
        } else {
            dispatch(actionCreators.changePage(1));
        }
    },
    logout() {
        dispatch(loginActionCreators.logout());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
