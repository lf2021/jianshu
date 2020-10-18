import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;    
    width: 635px;
    padding-top: 30px;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`;

export const HomeRight = styled.div`
    float: right;
    padding-top: 30px;
    width: 280px;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    height: 32px;
    line-height: 32px;
    margin-left: 18px;
    margin-bottom: 18px;
    padding-right: 10px;
    background: #f7f7f7;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    .img-pic {
        display: block;
        float: left;
        margin-right: 10px;
        width: 32px;
        height: 32px;
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    margin-bottom: 20px;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: 700;
        color: #333;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    cursor: pointer;
    margin-top: -6px;
`;

export const RecommendItem = styled.div`
    display: block;
    margin: 6px 0;
    width: 280px;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    .link {
        display: block;
        width: 100%;
        height: 100%;
    }
`;

export const Code = styled.div`
    overflow: hidden;
    cursor: pointer;
    display: block;
    margin: 12px 0 30px 0;
    box-sizing: border-box;
    padding: 10px 22px;
    width: 280px;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    .left {
        float: left;
        display: block;
        width: 60px;
        height: 60px;
        background: url('${'https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-4130a7a6521701c4cb520ee6997d5fdb.png'}');
        background-size: contain;
    }
    .right {
        margin-left: 67px;
        padding: 10px;
        .title {
            font-size: 15px;
            color: #333;
            line-height: 20px;
        }
        .desc {
            margin-top: 4px;
            font-size: 13px;
            color: #999;
        }
    }
`;

export const BigCode = styled.div`
    width: 180px;
    height: 180px;
    background: #fff;
    border-radius: 4px;
    padding: 10px;
    box-sizing: border-box;
    position: absolute;
    bottom: 100px;
    left: 50px;
    .pic {
        display: block;
        width: 160px;
        height: 160px;
    }
`;

export const WriterWrapper = styled.div`
    font-size: 14px;
    color: #969696;
    .spin {
        margin-right: 4px;
        line-height: 16px;
        text-align: center;
    }
    .right {
        float: right;
    }
`;

export const WriterItem = styled.div`
    margin-top: 15px;
    .link {
        float: left;
        width: 48px;
        height: 48px;
        margin-right: 10px;
        .pic {
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    }
    font-size: 14px;
    line-height: 25px;
    color: #333;
    .focus {
        float: right;
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;
    }
    .desc {
        color: #969696;
        font-size: 12px;
        line-height: 20px;
    }
`;

export const MoreList = styled.div`
    width: 100%;
    height: 40px;
    margin: 30px auto 60px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    border-radius: 20px;
    background-color: #a5a5a5;
    cursor: pointer;
`;

export const BackTop = styled.div`
    position: fixed;
    right: 50px;
    bottom: 50px;
    width: 50px;
    line-height: 50px;
    border: 1px solid #dcdcdc;
    font-size: 12px;
    text-align: center;
    cursor: pointer;
`;
