import React, { Component } from 'react';
import { Layout } from "antd";
import Shuffle from 'shufflejs'

const { Content } = Layout

class PhotoMenu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            photos: [
                {
                    groups: ['nature'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/01.jpeg')
                },
                {
                    groups: ['nature'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/02.jpeg')
                },
                {
                    groups: ['nature'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/03.jpeg')
                },
                {
                    groups: ['scenery'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/04.jpeg')
                },
                {
                    groups: ['scenery'],
                    style: 'itemTwoRow',
                    size: '1x2',
                    src: require('./img/05.jpeg')
                },
                {
                    groups: ['nature'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/06.jpeg')
                },
                {
                    groups: ['nature', 'scenery'],
                    style: 'itemTwoCol',
                    size: '2x1',
                    src: require('./img/07.jpeg')
                },
                {
                    groups: ['other'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/08.jpeg')
                },
                {
                    groups: ['other'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/09.jpeg')
                },
                {
                    groups: ['nature'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/10.jpeg')
                },
                {
                    groups: ['other'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/11.jpeg')
                },
                {
                    groups: ['other', 'scenery'],
                    style: 'itemOne',
                    size: '1x1',
                    src: require('./img/12.jpeg')
                }
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>this is chart Component</Content>
            </div>
        );
    }
}

export default PhotoMenu;