import React, { Component } from 'react';
import { Layout } from "antd";
import from 'sh'

const { Content } = Layout

class PhotoMenu extends Component {
    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>this is chart Component</Content>
            </div>
        );
    }
}

export default PhotoMenu;