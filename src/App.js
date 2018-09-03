import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Loading from 'components/loading';
import Loadable from "react-loadable";
import TopNav from 'components/topNav';

import DevTools from 'mobx-react-devtools';

const { Header, Content, Sider } = Layout;

const User = Loadable({
   loader: () => import("pages/user"), 
   loading: Loading,
 });
 const Home = Loadable({
  loader: () => import("pages/home"), 
  loading: Loading,
});
class App extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          style={{height:'100vh'}}
          >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: '0 20px' }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
              <Switch>
                <Redirect exact from="/" to="/home" />
                <Route path="/home" component={Home} />
                <Route path="/user" component={User} />
              </Switch>
                {
                  // <DevTools />
                }
          </Content>
        </Layout>
      </Layout>
    );
  }
}


export default App
