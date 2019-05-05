import React, { Component } from 'react'
import { auth } from "../../store"
import { Link, withRouter, Redirect } from "react-router-dom"
export class Navbar extends Component {
    state = {
        isLoggingOut: false
    }
    render() {
        let currentUserProfilePath = "/account/";
        if (auth.currentUser)
            currentUserProfilePath += auth.currentUser.uid;
        const profileActive = this.props.location.pathname === currentUserProfilePath ? "active" : "";
        const dashboardActive = this.props.location.pathname === "/dashboard" ? "active" : "";
        if (!auth.currentUser) {
            return <Redirect to="/" />
        }
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark site-navbar-light scrolled awake" id="account-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src="/images/life.png" alt="" style={{ marginRight: "10px" }} />
                        Essence</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#site-nav" aria-controls="site-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>

                    <div className="collapse navbar-collapse" id="site-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={currentUserProfilePath}
                                    className={"nav-link " + profileActive}>Profile</Link></li>
                            <li className="nav-item">
                                <Link to="/dashboard" className={"nav-link " + dashboardActive}>Dashboard</Link></li>
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
        if (auth.currentUser && this.state.isLoggingOut) {
            setTimeout(this.changeLogoutState, 1000);
        }
        return (
            <li className="nav-item">
                {this.LogoutLink()}
            </li>)
    }
    LogoutLink = () => {
        return (<a className="nav-link"
            href="#abc"
            onClick={() => {
                this.setState({
                    isLoggingOut: true
                })
                setTimeout(function () {
                    auth.signOut();
                }, 1000);

            }}> {this.state.isLoggingOut ? "Logging Out..." : "Logout"}</a>)
    }
}

export default withRouter(Navbar)