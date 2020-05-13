import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.less';
import '@/common/iconFont.css';
import RenderRoute from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RenderRoute />, document.getElementById('root'));
if (process.env.NODE_ENV === 'production') {
    serviceWorker.register();
} else {
    serviceWorker.unregister();
}
