import React from 'react'
import Footer from '../../Layouts/Footer'
import NavBar from '../../Layouts/NavBar'
import AboutUsHeader from './AboutUsHeader'
import Content from './Content'

const AboutUs = () => {
    return (
        <div>
            <NavBar />
            <AboutUsHeader />
            <Content />
            <Footer />
        </div>
    )
}

export default AboutUs
