import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {urls} from '../../../common/constants';

export default class  SignIn extends Component{

    render(){
        return (
            <div>
                some form
                <Link to={urls.routes.about} >ABOUT</Link>
            </div>
        )

    }

}