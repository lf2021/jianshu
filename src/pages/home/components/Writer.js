import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { WriterWrapper, WriterItem } from '../style';

class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <div>
                <WriterWrapper>
                    <span className='left'>推荐作者</span>
                    <span className='right'>
                        <i className="iconfont spin">&#xe851;</i>
                        换一批
                    </span>
                </WriterWrapper>
                {
                    list.map((item) => {
                        return (
                            <WriterItem key={item.get('id')}>
                                <a className='link' href={item.get('hrefUrl')}>
                                    <img className='pic' src={item.get('imgUrl')} alt='' />
                                </a>
                                <div>
                                    {item.get('name')}
                                    <span className="focus">+关注</span>
                                </div>
                                <div className='desc'>{item.get('desc')}</div>
                            </WriterItem>
                        )
                    })
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'writerList'])
})

export default connect(mapState)(Writer);
