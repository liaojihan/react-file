import React, { Component } from 'react'
import { Breadcrumb } from "antd"

export class BreadTitle extends Component {
    render() {
        const { list } = this.props
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                {
                    list.map( (value, index) => {
                        return (
                            <Breadcrumb.Item key={index}>{value}</Breadcrumb.Item>
                        );
                    })
                }
            </Breadcrumb>
        )
    }
}

export default BreadTitle
