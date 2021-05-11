import React from 'react'
import Footer from '../../Layouts/Footer'
import NavBar from '../../Layouts/NavBar'
import ContactHeader from './ContactHeader'

const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <ContactHeader />
            <section className="page-section" id="contact">
                <div className="container">
                    <form id="contactForm" name="sentMessage" noValidate>
                        <div className="row align-items-stretch mb-5">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input className="form-control" id="name" type="text" placeholder="Nom & Prénom" required="required" data-validation-required-message="Please enter your name." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group">
                                    <input className="form-control" id="email" type="email" placeholder="E-mail *" required="required" data-validation-required-message="Please enter your email address." />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div className="form-group mb-md-0">
                                    <input className="form-control" id="phone" type="tel" placeholder="Numero de Tel *" required="required" data-validation-required-message="Please enter your phone number." />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group form-group-textarea mb-md-0">
                                    <textarea className="form-control" id="message" placeholder="Votre Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <div id="success"></div>
                            <button className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Envoye Message</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default ContactUs
