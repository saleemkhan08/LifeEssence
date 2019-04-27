import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light" id="site-navbar">
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src="http://www.lifeessence-ev.com/image/data/cart.png" alt="" style={{ marginRight: "10px" }} />
                        Essence</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="site-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><a href="#section-about" className="nav-link">About</a></li>
                            <li className="nav-item"><a href="#section-menu" className="nav-link">Menu</a></li>
                            <li className="nav-item"><a href="#section-gallery" className="nav-link">Packages</a></li>
                            <li className="nav-item"><a href="#section-clinic" className="nav-link">Clinic</a></li>
                            <li className="nav-item"><a href="#section-contact" className="nav-link">Contact</a></li>
                            <li className="nav-item">
                                <a href="#section-login"
                                    data-toggle="modal"
                                    target="_blank"
                                    data-target="#loginModal"
                                    className="nav-link">Login</a></li>
                        </ul>
                    </div>
                    {
                        /*
                        Home Page
                        About Us
                        Daily Menu
                        Packages
                        Subscribe Items
                        Dietion Clinic
                        Special Offers
                        Contact Us
                        */
                    }
                </div>
            </nav>
        )
    }
}

export default Navbar
