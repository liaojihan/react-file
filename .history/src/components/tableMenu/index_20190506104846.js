import React, { Component } from 'react'
import { Layout } from "antd";
import TableItem from './content/tableitem'
import BreadTitle from './content/breadtitle'

const { Content } = Layout;

export class TableMenu extends Component {

    constructor(props){
        super(props)
        this.state = {
            breadList: ['用户', '列表']
        }
    }
    render() {
        return (
            <div>
                <Content style={{ margin: '0 16px' }}>
                    <BreadTitle list={this.state.breadList}/>
                    <TableItem />
                </Content>
            </div>
        )
    }
}

export default TableMenu
