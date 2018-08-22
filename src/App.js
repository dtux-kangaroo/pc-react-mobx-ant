import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout} from 'antd';
import Home from 'pages/home'
import Loadable from "react-loadable";
import DevTools from 'mobx-react-devtools';
import TopNav from 'components/topNav';

const { Header, Content, Sider } = Layout;
const Loading = () => "Loading...";
const User = Loadable({
   loader: () => import("pages/user"), 
   loading: Loading,
   delay: 150
 });

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <TopNav/>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />
          <Route path="/user" component={User} />
        </Switch>
        {
          // <DevTools />
        }
        </Layout>
      </div>
    )
  }
}

export default App
