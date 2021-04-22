import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListUsers from './ListUsers';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../JS/Actions/authActions';
import PrivateRoutes from '../Routes/PrivateRoutes'
import { Spinner } from 'reactstrap';
import ListPacks from './ListPacks';


const Dashboard = () => {
    const user = useSelector(state => state.authReducer.user);
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    if (!user) {
        return <Spinner style={{ width: '3rem', height: '3rem', margin: '20% 50%' }} />
    } else
        return (
            <>
                <nav className="navbar bg-dark">
                    <h1>
                        <a href="/"><i className="fas fa-code"></i> Famous Picture</a>
                    </h1>
                    <ul>
                        <li><a href="/dashboard/">Users</a></li>
                        <li><a href="/dashboard/packs">Packs</a></li>
                        <li><a href="/dashboard/reservations">Reservations</a></li>
                        <li className="text-info">{user && user.role.toUpperCase()}</li>
                        <li>
                            <a href="/" title="Logout" onClick={handleLogout}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span className="hide-sm">Logout</span></a
                            >
                        </li>
                    </ul>
                </nav>
                <Router>
                    <PrivateRoutes exact path='/dashboard/' component={ListUsers} />
                    <Route path='/dashboard/packs' component={ListPacks} />
                    {/* <Route path='/dashboard/reservations' component={listReservations} /> */}
                </Router>
            </>
        )
}

export default Dashboard
