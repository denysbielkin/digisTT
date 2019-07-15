import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import SignIn from '../../routes/SignIn';
import Main from '../../routes/Main';
import About from '../../routes/About';

import Nav from '../Navigator';

import {urls} from '../../common/constants';
import PrivateRoute from '../PrivateRoute';

import {StyledLayout} from './styled';

export default class App extends Component {


    render() {
        return (
            <StyledLayout>
            <BrowserRouter>
                <Nav/>
                <Route  path={urls.routes.signIn} component={SignIn}/>
                <PrivateRoute exact path={urls.routes.main} component={Main}/>
                <PrivateRoute  path={urls.routes.about} component={About}/>
            </BrowserRouter>
            </StyledLayout>
        )
    }
}


