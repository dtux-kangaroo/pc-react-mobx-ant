import React from "react";
import { Route, Router, Switch,Redirect } from "react-router-dom";
import Loadable from 'react-loadable'
import Loading from 'components/loading'
import AuthTpl from "./tpls/authTpl"
import createHistory from "history/createBrowserHistory";
const history = createHistory(); //暂无使用

const GlobalTpl = Loadable({loader: () => import('./tpls/globalTpl'),loading: Loading});


export default class Routers extends React.Component {
  
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <Route exact path='/' component={GlobalTpl}></Route>
          <Route  path='/login' component={AuthTpl}></Route>
          <Route  path='/app' component={GlobalTpl}></Route>
          <Redirect to="/app" />
        </Switch> 
      </Router>
    );
  }
}
