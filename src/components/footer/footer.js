import React from 'react';
import { Layout,Icon } from 'antd';
import './style.scss';
const { Footer } = Layout;

export default function Foot() {
  return <Footer style={{padding:0}}>
    <div className="globle_footer">
    <div className="links">
      <a target="_blank" href="">帮助</a>
      <a target="_blank" href="">隐私</a>
      <a target="_blank" href="">条款</a>
    </div>
    <div className="copyright">Copyright <Icon type="copyright" /> 2018 蓝光BRC数字门户</div>
    </div>
  </Footer>
}
