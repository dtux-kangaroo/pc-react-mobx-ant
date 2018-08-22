
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'
const loadingImg = require('assets/image/loading.gif')


class Loading extends Component {
  static defaultProps = {
    title: '正在载入...'
  }

  static propTypes = {
    title: PropTypes.string.isRequired
  }
  render() {
    return (
      <div className="loading">
        <img width="24" height="24" src={loadingImg} alt="加载中" />
        <p className="desc">{this.props.title}</p>
      </div>
    )
  }
}

export default Loading
