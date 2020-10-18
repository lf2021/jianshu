import React from 'react';
import ReactDOM from 'react-dom';
import { GolbalStyle } from './style.js';
import { IconFont } from './statics/iconfont/iconfont';
import App from './App';

ReactDOM.render(
  <React.Fragment>
    <GolbalStyle />
    <IconFont />
    <App />
  </React.Fragment>,
  document.getElementById('root')
);
