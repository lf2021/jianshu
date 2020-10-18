import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
    ListItem,
    ListInfo,
    MoreList
} from '../style';

class List extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                {
                    list.map((item, index) => {
                        return (
                            <Link key={index} to={'/detail/' + item.get('id')}>
                                <ListItem>
                                    <img
                                        className="pic"
                                        src={item.get('imgUrl')}
                                        alt=""
                                    />
                                    <ListInfo>
                                        <h3 className="title">{item.get('title')}</h3>
                                        <p className="desc">{item.get('desc')}</p>
                                    </ListInfo>
                                </ListItem>
                            </Link>
                        )
                    })
                }
                <MoreList onClick={() => this.props.getMoreList()}>阅读更多</MoreList>
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'articleList'])
})

const mapDispatch = (dispatch) => ({
    getMoreList() {
        dispatch(actionCreators.getMoreList());        
    }
})

export default connect(mapState, mapDispatch)(List);
