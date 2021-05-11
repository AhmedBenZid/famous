import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Alert } from 'reactstrap';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const isAuth = useSelector(state => state.authReducer.isAuth)

    const user = useSelector(state => state.authReducer.user);
    if (!isAuth) {
        return <Redirect to='/login' />;
    } else
        return <Route component={Component} {...rest} />
}

export default PrivateRoute