import React, { useState } from 'react'


const GalleryHeader = () => {

    return (
        <div className="galheader">
            <div>
                <video autoPlay muted loop id="myVideo" src="https://firebasestorage.googleapis.com/v0/b/famous-pictures.appspot.com/o/%23spot%20%23photography%20%23video%20%23pubblicit%20%23nature%20%23art%20%23love%20%23instagood%20%23photo%20%23instagram%20%23music%20%23led%20%23tv%20%23k%20%23film%20%23travel%20%23m%20%23follow%20%23like%20%23street%20%23photooftheday%20%23s%20%23o%20%23picoftheday%20%23shooting%20%23advertising%20%23style%20%23design.mp4?alt=media&token=c052962f-5469-4491-9a6b-722518be5609" type="video/mp4">
                </video>
            </div>
            <div className='about'>
                <p>
                    Famous Pictures Tunisia a adorétravailler et se connecter avec les gens de l'émission, et il s'est rapidement imposé comme photographe de mode et de beauté à plein temps.  </p>
            </div>
        </div>
    )
}

export default GalleryHeader
