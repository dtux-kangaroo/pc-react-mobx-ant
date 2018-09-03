import React from "react";
import { observer, inject } from "mobx-react";
import { Button } from 'antd';
import './style.scss';

@inject("clickTimes")
@observer
class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {}
    _addHandle(num) {
        this.props.clickTimes.click(1);
    }
    render() {
        return (
            <div>
                这里是Home
                <Button type="primary" className="home" onClick={() => { this._addHandle(1);}}>
                    点击次数：{this.props.clickTimes.times}
                </Button>
            </div>
        );
    }
}

export default Home;