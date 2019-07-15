import React, {PureComponent} from 'react';
import {Form, Input, Icon, Button, Alert, notification} from 'antd';
import {Redirect} from 'react-router-dom';
import {isTokenExist} from '../../../common/constants';

import {storageAdminCredKey, storageTokenKey, storageTokenValue, urls} from '../../../common/constants';

const FORM = {
    NAME: 'SignIn',
    FIELDS: {
        LOGIN: {
            PRINT_NAME: 'Login',
            USAGE_NAME: 'login'
        },
        PASSWORD: {
            PRINT_NAME: 'Password',
            USAGE_NAME: 'password'
        }
    }
};

class SignIn extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isDataCorrect: isTokenExist,
            showAlert: false

        }
    }

    componentDidMount() {
        const adminCred = {
            [FORM.FIELDS.LOGIN.USAGE_NAME]: 'admin2',
            [FORM.FIELDS.PASSWORD.USAGE_NAME]: '222'
        };

        localStorage.setItem(storageAdminCredKey, JSON.stringify(adminCred))
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {getFieldsValue} = this.props.form
        const adminCred = JSON.parse(localStorage.getItem(storageAdminCredKey))
        ;
        const userInputs = getFieldsValue();

        if (
            (adminCred[FORM.FIELDS.LOGIN.USAGE_NAME] === userInputs[FORM.FIELDS.LOGIN.USAGE_NAME])
            &&
            (adminCred[FORM.FIELDS.PASSWORD.USAGE_NAME] === userInputs[FORM.FIELDS.PASSWORD.USAGE_NAME])

        ) {
            notification.success({message: 'Logged in'});
            localStorage.setItem(storageTokenKey, storageTokenValue);
            this.setState({isDataCorrect: true, showAlert: false})
            window.location.reload();

        } else {
            this.setState({showAlert: true})
        }

    };

    onChange = (value, type) => {
        const {setFieldsValue} = this.props.form;
        setFieldsValue({[type]: value});
    };

    render() {
        const {getFieldDecorator, getFieldValue} = this.props.form;
        if (!this.state.isDataCorrect) {

            return (
                <div>
                    <Form onSubmit={this.onSubmit}>
                        <Form.Item>
                            {getFieldDecorator(FORM.FIELDS.LOGIN.USAGE_NAME, {
                                rules: [{required: true, message: 'Please input your username!'}],
                            })(
                                <Input
                                    onChange={(val) => this.onChange(val, FORM.FIELDS.LOGIN.USAGE_NAME)}
                                    value={getFieldValue(FORM.FIELDS.LOGIN.USAGE_NAME)}
                                    prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    placeholder={FORM.FIELDS.LOGIN.PRINT_NAME}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator(FORM.FIELDS.PASSWORD.USAGE_NAME, {
                                rules: [{required: true, message: 'Please input your Password!'}],
                            })(
                                <Input
                                    onChange={(val) => this.onChange(val, FORM.FIELDS.PASSWORD.USAGE_NAME)}
                                    value={getFieldValue(FORM.FIELDS.PASSWORD.USAGE_NAME)}
                                    prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                    type="password"
                                    placeholder={FORM.FIELDS.PASSWORD.PRINT_NAME}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Log in
                            </Button>
                        </Form.Item>
                    </Form>
                    {this.state.showAlert && <Alert type={'error'} banner message={'Unknown user!!'}/>}
                    <small>If you are admin and you forgot your creds - Log: admin2 Pass: 222</small>
                    <br/>
                    <small>But, if you arn't, please, don't use this creds</small>
                </div>
            )

        } else {
            return <Redirect to={urls.routes.main}/>
        }

    }


}

const WrappedNormalLoginForm = Form.create({name: FORM.NAME})(SignIn);

export default WrappedNormalLoginForm;
