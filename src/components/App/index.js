import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import SignIn from '../../routes/SignIn';
import Main from '../../routes/Main';
import About from '../../routes/About';

import Nav from '../Nav';

import {urls} from '../../common/constants';

export default class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <Nav/>
                <Route  path={urls.routes.signIn} component={SignIn}/>
                <Route exact path={urls.routes.main} component={Main}/>
                <Route  path={urls.routes.about} component={About}/>
            </BrowserRouter>
        )
    }
}


