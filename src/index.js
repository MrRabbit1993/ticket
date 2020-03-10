import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.less';
import RenderRoute from './router';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RenderRoute />, document.getElementById('root'));
// serviceWorker.unregister();
