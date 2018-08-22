import React from 'react';
import { Layout, Icon, Dropdown, Menu,Badge ,Avatar,Popover} from 'antd';
import classnames from 'classnames';
import { Link } from "react-router-dom";
const { Header } = Layout;

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props !== nextProps;
  }
  componentWillReceiveProps(nextProps) {
    //  console.log(nextProps);
  }
  componentDidMount() {}

  logout = () => {
    this.props.logout();
  }
  render() {
    return  <Header className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['2']}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
    </Menu>
  </Header>
  }
}
