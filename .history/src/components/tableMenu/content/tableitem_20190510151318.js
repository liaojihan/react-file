import React, { Component } from 'react'
import { 
    Table, Divider, Popconfirm, 
    Icon, Button, Tag 
} from 'antd';
import CollectionCreateForm from '../fromItem'
import { connect } from 'react-redux'
import { 
    userInfoList, userInfoDelete, userInfoAdd,
    getUser, userInfoUpdate, clearForm
} from '../../../actions/userAction'

const { Column } = Table;

class TableItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            modalTitle: '',
            actionItem: true, // true：新增  false：编辑
            pager: {
                current: 1,
                pageSize: 3
            }
        }
    }

    componentDidMount() {
        this.props.userInfoList({...this.state.pager})
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps, prevState)
        return null
    }

    handleCancel = () => {
        this.setState({ visible: false });
    }

    handleCreate = () => {
        const form = this.formRef.props.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }
            form.resetFields();
            this.state.actionItem
                ?
                this.props.userInfoAdd(values, this.props.infoList)
                :
                this.props.userInfoUpdate(values, this.props.infoList)
            this.setState({ visible: false });
        });
    }

    saveFormRef = (formRef) => {
        this.formRef = formRef;
    }

    deleteUser = index => {
        this.props.userInfoDelete(index, this.props.infoList)
    }

    showAddModal = () => {
        this.props.clearForm()
        this.setState({
            visible: true,
            modalTitle: '新增用户',
            actionItem: true
        })
    }

    showUpdateModal = (index) => {
        this.props.getUser(index, this.props.infoList)
        this.setState({
            visible: true,
            modalTitle: '编辑用户',
            actionItem: false
        })
    }

    tableChangeHandler = (pagination, filters, sorter) => {
        const pager = { ...pagination }
        console.log(pager)
        return
        this.setState({
            pager: pager
        })
        this.props.userInfoList(pager)
    }

    render() {
        return (
            <div style={{ padding: 12, background: '#fff', minHeight: 360 }}>
                <div style={{ marginBottom: 12}}>
                    <Button type="danger" onClick={this.showAddModal}>add</Button>
                </div>
                <Table dataSource={this.props.infoList} onChange={this.tableChangeHandler}
                    pagination={{
                        current: this.state.pager.current
                    }}
                >
                    <Column
                        title="名字"
                        dataIndex="name"
                        key="name"
                    />
                    <Column
                        title="年龄"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="地址"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="标签"
                        dataIndex="pros"
                        key="pros"
                        render={pros => (
                            <span>
                                {<Tag color="blue" key={pros} title={pros}>{pros}</Tag>}
                            </span>
                        )}
                    />
                    <Column
                        title="操作"
                        key="action"
                        render={(text, record, index) => (
                            <span>
                                <Popconfirm title="确定要删除吗？" icon={<Icon type="question-circle-o" 
                                style={{ color: 'red' }} />} onConfirm={(e) => this.deleteUser(index, e)}>
                                    <a href="javascript:;">删除</a>
                                </Popconfirm>
                                <Divider type='vertical'/>
                                <a href='javascript:;' onClick={ (e) => this.showUpdateModal(record.key, e)}>
                                    编辑
                                </a>
                            </span>
                        )}
                    />
                </Table>
                <CollectionCreateForm
                    wrappedComponentRef={this.saveFormRef}
                    visible={this.state.visible}
                    record={this.props.info}
                    modalTitle={this.state.modalTitle}
                    onCancel={this.handleCancel}
                    onCreate={this.handleCreate}
                />
            </div>
        )
    }
}

const mapPropsToState = state => ({
    infoList: state.user.infoList,
    info: state.user.info,
    pageSize: state.user.pageSize,
    total: state.user.total,
    current: state.user.current
})


export default connect(
    mapPropsToState, 
    { 
        userInfoList, 
        userInfoDelete,
        userInfoAdd,
        getUser,
        userInfoUpdate,
        clearForm
    }
)(TableItem)
