import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem, Code, BigCode } from '../style';

class Recommend extends PureComponent {
    render() {
        const { list, handleMouseEnter, handleMouseLeave } = this.props;
        return (
            <RecommendWrapper style={{position: "relative"}}>
                {
                    list.map((item) => {
                        return (
                            <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                                <a className='link' href={item.get('href')}> </a>
                            </RecommendItem>
                        )
                    })
                }
                <Code
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="left"></div>
                    <div className="right">
                        <div className="title">
                            下载简书手机App
                            <span className="link">&gt;</span>
                        </div>
                        <div className="desc">随时随地发现和创作内容</div>
                    </div>
                </Code>
                { this.handleCodeShow() }
            </RecommendWrapper>
        )
    }

    handleCodeShow() {
        const { show } = this.props;
        if (show) {
            return (
                <BigCode>
                    <img className='pic' alt='' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png' />
                </BigCode>
            )
        }else {
            return null;
        }
    }
}

const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList']),
    show: state.getIn(['home', 'codeShow'])
})

const mapDispatch = (dispatch) => ({
    handleMouseEnter() {
        const action = {
            type: 'mouse_enter'
        };
        dispatch(action);
    },
    handleMouseLeave() {
        const action = {
            type: 'mouse_leave'
        };
        dispatch(action);
    }
})

export default connect(mapState, mapDispatch)(Recommend);
