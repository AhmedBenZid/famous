import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='mastfooter'>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4 text-lg-right">
                            <a className="navbar-brand js-scroll-trigger" href="/"><img src="./logo.png" alt="" height='150' width='350' /></a>
                        </div>
                        <div className="col-lg-4 my-3 my-lg-0">
                            <a className=" btn-gold  btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a>
                            <a className=" btn-gold btn-social mx-2" href="https://www.facebook.com/famouspicturestn"><i className="fab fa-facebook-f"></i></a>
                            <a className=" btn-gold btn-social mx-2" href="#!"><i className="fab fa-instagram"></i></a>
                        </div>
                        <div className="col-lg-4  d-flex align-items-start" style={{ flexDirection: 'column' }}>
                            <h1>Contacts</h1>
                            <span ><i class="far fa-building"></i>  B7 - 4éme étage - Immeuble 2
Rue Tastour - Bab Alouj - Tunis.</span>
                            <span><i class="fas fa-phone"></i>  52 99 15 15</span>
                            <span><i class="fas fa-mobile-alt"></i>  52 55 40 40</span>
                            <span><i class="fas fa-at"></i>  tayehi.wissem@gmail.com</span>

                        </div>
                    </div>

                </div>

            </div>
            <footer className="footer py-4 text-white" style={{ backgroundColor: "black" }}>
                <div className="col-lg-4 text-lg-left">Copyright © Famous-Pictures.tn 2021</div>
            </footer>
        </>
    )
}

export default Footer
