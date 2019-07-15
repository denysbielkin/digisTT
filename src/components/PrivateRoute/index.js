import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import {isTokenExist} from '../../common/constants';

export default function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
            {...rest}
            render={(props) => isTokenExist
                ? <Component {...props} />
                : <Redirect to={{pathname: '/auth', state: {from: props.location}}} />}
        />
    )
}
