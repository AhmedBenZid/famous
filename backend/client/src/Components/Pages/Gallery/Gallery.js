import React from 'react'
import NavBar from '../../Layouts/NavBar'
import Album from './Album'

import Catgegory from './Category'
import GalleryHeader from './GalleryHeader'
import VideoSlider from './VideoSlider'


const Gallery = () => {
    return (
        <div>
            <NavBar />
            <GalleryHeader />
            <Catgegory />
            <Album />
            <VideoSlider />

        </div>
    )
}

export default Gallery
