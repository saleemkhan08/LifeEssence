import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from '../Footer';
import { fetchUser } from "../users/UserActions"
import { connect } from "react-redux"
const initialState = {
    addr: "",
    displayName: "",
    email: "",
    gender: "",
    phoneNumber: "",
    regionState: "",
    type: "",
    uid: ""
}
export class Accounts extends Component {

    state = initialState;
    componentDidMount() {
        this.loadUser()
    }
    loadUser = () => {
        const uid = this.props.match.params.id;
        this.props.dispatch(fetchUser(uid))
        this.setState({
            uid
        })
    }
    render() {
        const { tempUser } = this.props.userReducer
        const uid = this.props.match.params.id;
        if (this.state.uid !== uid) {
            this.loadUser()
        }
        return (
            <div id="accounts-parent">
                <Navbar />
                <div className="container">
                    <section className="site-animate site-section">
                        <div className="container">
                            {
                                tempUser ? this.showUserInfo(tempUser) : <h2 className="loading-text">Loading...</h2>
                            }
                        </div>
                    </section>
                </div>
                <Footer />
            </div>
        )
    }
    showUserInfo = (tempUser) => {
        return (
            <div className="row clinic-container" id="user-info">
                <div className="col-md-12 text-center mb-5 site-animate">
                    <h2 className="display-4">Profile</h2>
                </div>
                <div className="col-md-4 site-animate img" data-animate-effect="fadeInRight">
                    <img src="/images/user.svg" alt="..." className="img-fluid profile-pic" />
                </div>

                <div className="col-md-8 site-animate">
                    <h3>{tempUser.displayName}</h3>
                    <p>
                        <strong>Phone No. :</strong> {tempUser.phoneNumber}<br />
                        <strong>Email ID :</strong> {tempUser.email}<br />
                        <strong>Region/State :</strong> {tempUser.regionState}<br />
                        <strong>Address :</strong> {tempUser.addr}
                    </p>
                    <button className="btn btn-outline-primary" onClick={() => {
                        alert("Coming Soon..")
                    }}>
                        Edit
                    </button>
                </div>
            </div >
        )
    }
}
const mapStateToProps = state => {
    return {
        userReducer: state.UserReducer
    };
};
export default connect(mapStateToProps)(Accounts)
