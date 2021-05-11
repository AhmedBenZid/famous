import React from 'react'
import Footer from '../../Layouts/Footer'
import NavBar from '../../Layouts/NavBar'
import PacksHeader from './PacksHeader'
import PacksList from './PacksList'

const Packs = () => {
    return (
        <div style={{ background: "black" }}>
            <NavBar />
            <PacksHeader />
            <PacksList />
            <Footer />
        </div>
    )
}

export default Packs
