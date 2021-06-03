import React from 'react'
import Gallery from './Gallery'
import Main from './Main'

import TopPack from './TopPacks'
import NavBar from '../../Layouts/NavBar';
import Footer from '../../Layouts/Footer'
import About from './About'
import Team from './Team'
import Clients from './Clients'
import Events from './Events';


const Home = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Events/>
        </>
    )
}

export default Home
