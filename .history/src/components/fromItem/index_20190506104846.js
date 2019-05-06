import React from 'react'
import {
    Modal, Form, Input, Radio
} from 'antd';
import uuid from 'uuid'

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
    // eslint-disable-next-line
    class extends React.Component {
        render() {
            const {
                visible, onCancel, onCreate, 
                form, record, isDisabled, modalTitle
            } = this.props;
            const { getFieldDecorator } = form;
            return (
                <Modal
                    visible={visible}
                    title={modalTitle}
                    okText="确认"
                    onCancel={onCancel}
                    cancelText="取消"
                    onOk={onCreate}
                    maskStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.15)' }}
                >
                    <Form layout="vertical">
                        <Form.Item>
                            {
                                getFieldDecorator(
                                    'key',{
                                        initialValue: uuid.v4().substring(0, 6)
                                    }
                                )(
                                    <Input type='hidden'/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="名字">
                            {
                                getFieldDecorator(
                                    'name', {
                                        rules: [
                                            {
                                                max: 40,
                                                message: '超出长度'
                                            }, 
                                            {
                                                min: 2,
                                                message: '请至少输入2个字符'
                                            }, 
                                            {
                                                required: true,
                                                message: '请输入此选项'
                                            }
                                        ],
                                        initialValue: record.name
                                    }
                                )(
                                    <Input disabled={isDisabled}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="年龄">
                            {
                                getFieldDecorator(
                                    'age', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入此选项'
                                            },
                                            {
                                                pattern: /^[0-9]*$/, message: '请输入正确的年龄'
                                            }
                                        ],
                                        initialValue: record.age
                                    }
                                )(
                                    <Input disabled={isDisabled}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item label="地址">
                            {
                                getFieldDecorator(
                                    'address', {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请输入此选项'
                                            }
                                        ],
                                        initialValue: record.address
                                    }
                                )(
                                    <Input disabled={isDisabled}/>
                                )
                            }
                        </Form.Item>
                        <Form.Item className="collection-create-form_last-form-item">
                            {
                                getFieldDecorator (
                                    'pros',
                                    {
                                        rules: [
                                            {
                                                required: true,
                                                message: '请选择'
                                            }
                                        ],
                                        initialValue: record.pros ? record.pros : '学生'
                                    }
                                )(
                                    <Radio.Group>
                                        <Radio value='学生'>
                                            学生
                                        </Radio>
                                        <Radio value='上班族'>
                                            上班族
                                        </Radio>
                                        <Radio value='商人'>
                                            商人
                                        </Radio>
                                    </Radio.Group> 
                                )
                            }
                        </Form.Item>
                    </Form>
                </Modal>
            );
        }
    }
);


export default CollectionCreateForm
