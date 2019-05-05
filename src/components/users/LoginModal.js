import React, { Component } from 'react'
import { auth } from "../../store"
import { Redirect } from "react-router-dom"
import { validateEmail, validatePassword } from "./UserActions"
import jQuery from 'jquery';
import "bootstrap/js/dist/modal";
window.jQuery = jQuery;

const initialState = {
    m_email: "",
    password: "",
    email_error_msg: undefined,
    password_error_msg: undefined,
    isLoggingIn: false,
    isloginStarted: false,
    loginErr: ""
}
export class LoginModal extends Component {
    state = initialState

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
            email_error_msg: undefined,
            password_error_msg: undefined,
            loginErr: ""
        });
    };

    render() {
        const { m_email, password, email_error_msg, password_error_msg, isLoggingIn } = this.state;
        return (
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12 p-5">
                                    <button id="closeLoginModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <img className="close-img" src="/images/close.svg" alt="close" />
                                    </button>
                                    <h1 className="mb-4">Login</h1>
                                    <p className="invalid">{this.state.loginErr}</p>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="m_email">Email</label>
                                            <input type="email"
                                                className="form-control"
                                                id="m_email"
                                                value={m_email}
                                                disabled={isLoggingIn}
                                                onChange={this.handleChange} />
                                            <div className={email_error_msg ? "invalid" : "hide"}>
                                                {email_error_msg}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password"
                                                className="form-control"
                                                id="password"
                                                value={password}
                                                disabled={isLoggingIn}
                                                onChange={this.handleChange} />
                                            <div className={password_error_msg ? "invalid" : "hide"}>
                                                {password_error_msg}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 form-group mt-2">
                                            <button className="btn btn-primary btn-lg btn-block"
                                                disabled={isLoggingIn}
                                                onClick={() => {
                                                    this.validateAndLogin();
                                                }}
                                            >{isLoggingIn ? "Logging in..." : "Login"}</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4 form-group modal-left-bottom">
                                            <a href="#signup-section"
                                                target="_blank"
                                                data-toggle="modal"
                                                data-target="#signupModal"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                className="modal-action-btn">Signup</a>
                                        </div>
                                        <div className="col-8 form-group modal-right-bottom">
                                            <a href="#forgot-password-section"
                                                target="_blank"
                                                data-toggle="modal"
                                                data-target="#forgotPasswordModal"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                className="modal-action-btn-right">Forgot Password?</a>
                                        </div>
                                        {
                                            (auth.currentUser && !this.state.isLoggingIn && this.state.isloginStarted)
                                                ? this.redirect()
                                                : ""
                                        }
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
    redirect = () => {
        this.closeModal()
        return <Redirect to={"/account/" + auth.currentUser.uid} />
    }

    validateAndLogin = () => {
        const { m_email, password } = this.state;
        console.log("validateAndLogin")
        if (typeof m_email !== "undefined") {
            if (validateEmail(m_email)) {
                if (validatePassword(password)) {
                    this.setState({
                        isLoggingIn: true,
                        isloginStarted: true
                    })
                    auth.signInWithEmailAndPassword(m_email, password).then(task => {
                        this.setState({
                            isLoggingIn: false
                        })
                        console.log("Logged in")
                        this.closeModal()
                    }).catch(error => {
                        this.setState({
                            isLoggingIn: false
                        })
                        this.setState({
                            loginErr: "Email ID or Password is incorrect!"
                        })
                        console.log("Login error")
                    });
                } else {
                    this.setState({
                        password_error_msg: "Password should be atleast 6 characters long"
                    })
                }
            } else {
                this.setState({
                    email_error_msg: "Please enter valid email-ID."
                })
            }
        }
    }
    closeModal = () => {
        jQuery("#closeLoginModal").click();
        jQuery("#closeLoginModal").click();
        this.setState(initialState)
    }

}

export default LoginModal
