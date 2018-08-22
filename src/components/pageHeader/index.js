import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Breadcrumb, Button } from 'antd';
import './style.scss';

class PageHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {title,content,extra,breadcrumb}=this.props;
        return (
            <div className="pageHeader">
                <div className="pg_main">
                    {
                        breadcrumb&&(<Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>)
                    }
                    
                    <div className="pg_detail">
                        <div className="pg_title">{title}</div>
                        <div className="pg_content">{content}</div>
                    </div>
                </div>
                {
                    extra&&(
                        <div className="pg_btn_wrap">
                        {
                            extra
                        }
                         </div>
                    )
                }
            </div>
        )
    }
}

PageHeader.defaultProps={
    title:'title',
    content:'content',
    Breadcrumb:false,
    extra:null,
}
PageHeader.propTypes = {
    title:PropTypes.string,
    content:PropTypes.string,
    Breadcrumb:PropTypes.bool,
    extra:PropTypes.any,
}

export default PageHeader