import React from 'react'
import Gallery from './Gallery'
import Main from './Main'
import Services from './Services'
import TopPack from './TopPacks'
import NavBar from '../../Layouts/NavBar';
import Footer from '../../Layouts/Footer'
import About from './About'
import Team from './Team'
import Clients from './Clients'


const Home = () => {
    return (
        <>
            <NavBar />
            <Main />
            <About />
            <Gallery />
            <TopPack />
            <Team />
            <Clients />
            <Footer />
        </>
    )
}

export default Home
