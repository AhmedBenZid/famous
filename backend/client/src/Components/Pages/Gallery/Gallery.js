import React from 'react'
import Footer from '../../Layouts/Footer'
import NavBar from '../../Layouts/NavBar'
import Album from './Album'
import GalleryHeader from './GalleryHeader'

const Gallery = () => {
    return (
        <div>
            <NavBar />
            <GalleryHeader />
            <Album />
            <Footer />
        </div>
    )
}

export default Gallery
