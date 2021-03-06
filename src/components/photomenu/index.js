import React, { Component } from 'react';
import { Card, Button, Layout, Modal } from 'antd'
import Shuffle from 'shufflejs'
import BreadTitle from '../header/breadtitle'

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
                },
            ]
        }
    }

    componentDidMount() {
        this.shuffle = new Shuffle(this.shuffleDemo, {
            itemSelector: '.photo-item',
            sizer: this.sizer,
        });
    }

    componentWillUnmount() {
        this.shuffle.destroy();
        this.shuffle = null;
    }

    _whenPhotosLoaded(photos) {
        return Promise.all(photos.map(photo => new Promise((resolve) => {
            const image = document.createElement('img');
            image.src = photo.src;

            if (image.naturalWidth > 0 || image.complete) {
                resolve(photo);
            } else {
                image.onload = () => {
                    resolve(photo);
                };
            }
        })));
    }

    showImg = (src) => {
        this.setState({
            visible: true,
            image: src
        })
    }

    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>
                        <BreadTitle list={['相册']} />
                        <Card bordered={false}>
                            <Button style={{ marginRight: 20 }} onClick={() => this.shuffle.filter()}>全部</Button>
                            <Button style={{ marginRight: 20 }} onClick={() => this.shuffle.filter('scenery')}>风景</Button>
                            <Button style={{ marginRight: 20 }} onClick={() => this.shuffle.filter('nature')}>自然</Button>
                            <Button style={{ marginRight: 20 }} onClick={() => this.shuffle.filter('other')}>其他</Button>
                        </Card>
                        <div style={{ padding: '20px 32px', minHeight: 500 }}>
                            <div ref={(div) => this.shuffleDemo = div}>
                                {
                                    this.state.photos.map((item, index) => (
                                        <div
                                            className='photo-item'
                                            data-groups={JSON.stringify(item.groups)}
                                            onClick={() => this.showImg(item.src)}
                                            style={styles[item.style]} key={item.src}>
                                            <div className={'aspect aspect--' + item.size}>
                                                <div className='aspect__inner'>
                                                    <img src={item.src} alt="" width='100%' height='100%' />
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                <div style={{ width: '8.33333%' }} ref={(div) => this.sizer = div} />
                            </div>
                        </div>
                        <Modal
                            footer={null} closable={false}
                            visible={this.state.visible}
                            wrapClassName="vertical-center-modal"
                            onCancel={() => this.setState({ visible: false })}>
                            <img src={this.state.image} alt="" width='100%' />
                        </Modal>
                </Content>
            </div>
        );
    }
}

const styles = {
    itemOne: {
        width: '25%',
        marginBottom: 8,
        padding: '0 4px'

    },
    itemTwoCol: {
        width: '50%',
        marginBottom: 8,
        padding: '0 4px'
    },
    itemTwoRow: {
        width: '25%',
        marginBottom: 8,
        padding: '0 4px'
    }

}

export default PhotoMenu;