import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsers from './ListUsers';
import { useSelector } from 'react-redux'


const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user)
    if (!user) {
        return <h1>Spinner</h1>
    } else
        return (
            <>
                <nav className="navbar bg-dark">
                    <h1>
                        <a href="/"><i className="fas fa-code"></i> Famous Picture</a>
                    </h1>
                    <ul>
                        <li><a href="/dashboard/users">Users</a></li>
                        <li><a href="posts.html">Packs</a></li>
                        <li><a href="posts.html">Reservations</a></li>
                        <li>
                            <a href="login.html" title="Logout">
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="hide-sm">Logout</span></a
                            >
                        </li>
                    </ul>
                </nav>
                <Router>
                    <Route path='/dashboard/users' component={ListUsers} />
                </Router>
            </>
        )
}

export default Dashboard
