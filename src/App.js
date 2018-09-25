import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import stores from './stores/index';
import Routers from './routers';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import 'public/assets/style/index.less';
import registerServiceWorker from './registerServiceWorker';
// import fastclick from 'fastclick'    //移动端
// fastclick.attach(document.body);
// import DevTools from 'mobx-react-devtools';

const render = Component =>
    ReactDOM.render(
      <Provider { ...stores }>
        <LocaleProvider locale={zhCN}>
            <Component />
            {
              // <DevTools />
            }
        </LocaleProvider>
     </Provider>,
       document.getElementById('root')
    )

render(Routers);
registerServiceWorker();
