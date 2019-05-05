import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <section className="site-section" id="section-contact">
                <div className="container">
                    <div className="row clinic-container">
                        <div className="col-md-12 text-center mb-5 site-animate">
                            <h2 className="display-4">Get In Touch</h2>
                        </div>
                        <div className="col-md-7 site-animate">
                            <div className="form-group">
                                <label htmlFor="name" className="sr-only">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" className="sr-only">Email</label>
                                <input type="text" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message" className="sr-only">Message</label>
                                <textarea name="message" id="message" cols="30" rows="8" className="form-control" placeholder="Write your message"></textarea>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-lg" onClick={() => {
                                    alert("Coming soon..")
                                }}>
                                    Send Message
                                </button>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-4 site-animate" >
                            <p className="text-black">
                                Address:
                                    <br />
                                Al Khobar - Alrashed Mall - Expansion - Food Court - Front of Games
                                    <br /><br />
                                Main Center :  Euro Village Copound  Front of Taba Center Al-Rakah District
                                    <br /> 34236 Saudi Arabia <br /> <br />
                                Phone : 013 85 758 38 <br />
                                Mobile: 054 97 57 134 / 112 / 820
                                <br /> <br />
                                Dietician Clinic :
                                For  Appointments <br /> Call 054 975 7346 / 054 986 4154
                                <br /> <br />
                                Email : <a href="mailto:info@lifeessence-ev.com">info@lifeessence-ev.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div id="map"></div>
            </section>
        )
    }
}

export default Contact
