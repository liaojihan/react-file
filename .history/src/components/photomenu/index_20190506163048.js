import React, { Component } from 'react';
import { Layout } from "antd";
import Shuffle from 'shuff'

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