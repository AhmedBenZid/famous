import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../JS/Actions/authActions';
import { Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
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

    const logged = (
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle nav caret>
                {user && user.email}
            </DropdownToggle>
            <DropdownMenu className="bg-dark">
                <DropdownItem header><span className="nav-item"><Link className="nav-link js-scroll-trigger" to="/dashboard">Profile</Link></span></DropdownItem>
                <DropdownItem divider />
                <DropdownItem><span className="nav-item "><a className="nav-link js-scroll-trigger text-danger" onClick={handleLogout}>Se déconnecter</a></span>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown >
    )
    return (
        <nav className=' navbar navbar-expand-lg navbar-dark fixed-top '
            style={navBackground ? { backgroundColor: "#000", transition: '1s ease', height: '75px' } : { transition: '1s ease' }} id="mainNav">
            <div className="container">
                <a className=" js-scroll-trigger" href="/"><img src="./logo.png" alt="" height="95" width='200' /></a>
                {/* <button className="navbar-toggler navbar-toggler-right" type="button">
                    Menu
                <i className="fas fa-bars ml-1"></i>
                </button> */}
                <div >
                    <ul className="navbar-nav text-uppercase ml-auto">
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/packs">Packs</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/gallery">Gallery</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/about-us">About-Us</Link></li>
                        <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/contact-us">Contact-Us</Link></li>
                        {!isAuth ?
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/login">Login</Link></li>
                            : logged

                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
