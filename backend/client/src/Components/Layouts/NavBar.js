import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../JS/Actions/authActions';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import DroppedNav from './DroppedNav';

const NavBar = () => {

    const user = useSelector(state => state.authReducer.user)
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch(logout())
    }

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);


    const [navBackground, setNavBackground] = useState(false)
    const navRef = useRef()
    navRef.current = navBackground
    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 100
            if (navRef.current !== show) {
                setNavBackground(show)
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return (
        <div className=" homenav" >
            <Navbar color="faded" style={(navBackground) ? { background: "hsla(0, 0%, 0%, 0.678)", transition: '1s ease', right: '45px', left: '45px' } : { transition: '1s ease', right: '45px', left: '45px' }}>
                <NavbarBrand href="/" className="mr-auto"><img src='./logo.png' alt='logo entreprise' width='126px' height='84px' /></NavbarBrand>
                {/* <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/packs">Forfait</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/gallery">Gallery</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/about-us">About-Us</NavLink>
                </NavItem> */}
                {(!isAuth ? <NavItem>
                    <a href='/login'><img src='./pics/icones/user1.png' alt="user logo" /></a>
                </NavItem> : <NavItem>
                    <a href='/login'><img className="avatar" src={(user && user.avatar) ? user.avatar : './pics/icones/user1.png'} alt="user avatar" /></a>
                </NavItem>)}
                <DroppedNav />
            </Navbar>
        </div>
    );
}

export default NavBar
