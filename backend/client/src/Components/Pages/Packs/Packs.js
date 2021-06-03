import React from 'react'
import Footer from '../../Layouts/Footer'
import NavBar from '../../Layouts/NavBar'
import Socail from '../../Layouts/Socail'
import PacksHeader from './PacksHeader'
import PacksList from './PacksList'

const Packs = () => {
    return (
        <div >
            <NavBar />
            <Socail />
            <PacksList />
        </div>
    )
}

export default Packs
