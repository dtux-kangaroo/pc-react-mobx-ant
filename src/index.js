import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import stores from './stores/index'
import { BrowserRouter as Router } from 'react-router-dom'
import 'assets/style/index.less';
import App from './App'

import registerServiceWorker from './registerServiceWorker'
// import fastclick from 'fastclick'    //移动端
// fastclick.attach(document.body);

ReactDOM.render(
  <Provider {...stores}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
