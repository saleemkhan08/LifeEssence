import React, { Component } from 'react'
import { auth } from "../../store"
import { validateEmail } from "./UserActions"
import jQuery from 'jquery';
import "bootstrap/js/dist/modal";
window.jQuery = jQuery;
const initialState = {
    p_email: "",
    email_error_msg: undefined,
    isSendingEmail: false
}
export class ForgotPassword extends Component {
    state = initialState

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value,
            email_error_msg: undefined
        });
    };

    render() {
        const { p_email, email_error_msg, isSendingEmail } = this.state;
        return (
            <div className="modal fade" id="forgotPasswordModal" tabIndex="-1" role="dialog" aria-labelledby="forgotPasswordModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12 p-5">
                                    <button id="closeForgotPasswordModal" type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <img className="close-img" src="/images/close.svg" alt="close" />
                                    </button>
                                    <h1 className="mb-4">Forgot Password</h1>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="p_email">Email</label>
                                            <input type="email"
                                                className="form-control"
                                                id="p_email"
                                                value={p_email}
                                                disabled={isSendingEmail}
                                                onChange={this.handleChange} />
                                            <div className={email_error_msg ? "invalid" : "hide"}>
                                                {email_error_msg}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group mt-2">
                                            <button className="btn btn-primary btn-lg btn-block"
                                                disabled={isSendingEmail}
                                                onClick={() => {
                                                    this.validateAndSendMail();
                                                }}
                                            >{isSendingEmail ? "Sending Email..." : "Reset"}</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 form-group modal-left-bottom">
                                            <a href="#signup-section"
                                                target="_blank"
                                                data-toggle="modal"
                                                data-target="#loginModal"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                className="modal-action-btn">Login</a>
                                        </div>
                                        <div className="col-6 form-group modal-right-bottom">
                                            <a href="#signup-section"
                                                target="_blank"
                                                data-toggle="modal"
                                                data-target="#signupModal"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                className="modal-action-btn-right">Signup</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    validateAndSendMail = () => {
        const { p_email } = this.state;
        console.log("validateAndSendMail")
        if (typeof p_email !== "undefined") {
            if (validateEmail(p_email)) {
                this.setState({
                    isSendingEmail: true
                })
                auth.sendPasswordResetEmail(p_email).then(task => {
                    this.setState({
                        isSendingEmail: false
                    })
                    console.log("SendingEmail")
                    this.closeModal()
                }).catch(error => {
                    this.setState({
                        isSendingEmail: false
                    })
                    console.log("SendingEmail error")
                });
            } else {
                this.setState({
                    email_error_msg: "Please enter valid email-ID."
                })
            }
        }
    }
    closeModal = () => {
        jQuery("#closeForgotPasswordModal").click();
        jQuery("#closeForgotPasswordModal").click();
        this.setState(initialState)
    }

}

export default ForgotPassword
