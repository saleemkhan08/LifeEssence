import React, { Component } from 'react'
import { Link } from "react-router-dom"
import { auth } from "../../store"
export class Navbar extends Component {
    state = {
        isLoggingOut: false
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark site_navbar bg-dark site-navbar-light" id="site-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/life.png" alt="" style={{ marginRight: "10px" }} />
                        Essence</Link>
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
                            {this.userOptions()}
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    changeLogoutState = () => {
        this.setState({ isLoggingOut: false })
    }
    userOptions = () => {
        console.log("userOptions : auth.currentUser")
        console.log(auth.currentUser)
        if (auth.currentUser && this.state.isLoggingOut) {
            setTimeout(this.changeLogoutState, 1000);
        }
        return (
            <li className="nav-item">
                {auth.currentUser ? <AccountLink uid={auth.currentUser.uid} /> : <LoginLink />}
            </li>)
    }
}

const AccountLink = (params) => {
    return (<Link to={"/account/" + params.uid}
        className="nav-link">
        Account
    </Link>)
}

const LoginLink = () => {
    return (<a href="#section-login"
        data-toggle="modal"
        target="_blank"
        data-target="#loginModal"
        className="nav-link">
        Login
    </a>)
}

export default Navbar