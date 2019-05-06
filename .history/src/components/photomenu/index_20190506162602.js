import React, { Component } from 'react';
import { Layout } from "antd";

const { Content } = Layout

class Pho extends Component {
    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>this is chart Component</Content>
            </div>
        );
    }
}

export default ChartMenu;