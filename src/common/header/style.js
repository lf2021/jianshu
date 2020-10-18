import styled from 'styled-components';
import logoPic from '../../statics/Logo.png';

export const HeaderWrapper = styled.div`
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    position: relative;
`;

export const Logo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 56px;
    width: 100px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin-right: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 38px;
    margin-top: 9px;
    padding: 0 15px;
    font-size: 17px;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        float: right;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearchWrapper = styled.div`
    z-index: 1;
    float: left;
    position: relative;
    .zoom {
        position: absolute;
        right: 5px;
        top: 12px;
        width: 32px;
        line-height: 32px;
        border-radius: 16px;
        text-align: center;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all 0.2s ease-in;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all 0.2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: inline-block;
        margin-right: 5px;
        width: 20px;
        line-height: 20px;
        text-align: center;
        transition: all .2s ease-in;
        // transform: rotate(80deg);
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    margin-top: 15px;
`;

export const SearchInfoItem = styled.a`
    float: left;
    display: block;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #333;
    border-radius: 3px;
    margin-right: 10px;
    margin-bottom: 15px;
`;

export const Additon = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    font-size: 15px;
    line-height: 38px;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 19px;
    border: 1px solid #ea6f5a;
    cursor: pointer;
    &.reg {
        color: #ea6f5a;
    }
    &.writting {
        color: #fff;
        background-color: #ea6f5a;
    }
`;
