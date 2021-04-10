import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import Login from './Login';
import Register from './Register';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../JS/Actions/authActions';

function NavBar() {
    const user = useSelector(state => state.authReducer.user)
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Navbar.Brand href="#home">Famous Picture</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/packs">Packs</Nav.Link>
                <Nav.Link href="/aboutus">About-Us</Nav.Link>
            </Nav>

            {(!isAuth) ? (<div >
                <Login />
                <Register /></div>) :
                <div >
                    <h4 className='text-white'> {user && user.firstname} {user && user.lastname}</h4> <span className='btn btn-danger' onClick={handleLogout}>Logout</span>
                </div>}

        </Navbar >
    )
}

export default NavBar
