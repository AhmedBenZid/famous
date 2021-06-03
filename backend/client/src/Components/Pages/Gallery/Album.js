import React, { useEffect, useState } from 'react';
import NavBar from '../../Layouts/NavBar';
import AlbumCarrousel from './AlbumCarrousel'

export default function Album() {
    const [album, setAlbum] = useState([]);

    useEffect(() => {
       

    })
    console.log(album)
    return (
        <>
            <NavBar />
            <AlbumCarrousel/>
        </>
    );
}
