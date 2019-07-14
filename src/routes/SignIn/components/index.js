import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import {Form, Input, Icon, Button, Alert} from 'antd';

import {urls} from '../../../common/constants';


 class  SignIn extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            isCorrectData: false,
            isSubmitTriggered: false

        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        const adminCred = {
            log:'admin2',
            pass:'222'
        };


      console.log(e, '---data')
    };

    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>


                <Form onSubmit={this.onSubmit}>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
                {this.state.isSubmitTriggered && !this.state.isCorrectData && <Alert type={'error'} banner message={'Unknown user!!'}/>}
                <small>If you are admin and you forgot your creds - Log: admin2 Pass: 222</small>
                <br/>
                <small>But, if you arn't, please, don't use this creds</small>
            </div>
        )

    }

}

const WrappedNormalLoginForm = Form.create({ name: 'signin' })(SignIn);

 export default WrappedNormalLoginForm;
