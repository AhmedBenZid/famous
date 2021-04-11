import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest }) => {

    const user = useSelector(state => state.authReducer.user);
    if (user && user.role != "admin") {
        return <Redirect to='/' />;
    } else
        return <Route component={Component} {...rest} />
}

export default AdminRoute
