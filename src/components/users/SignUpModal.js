import React, { Component } from 'react';
import { validateEmail, validatePassword, validateName, validatePhoneNo } from "./UserActions";
import { auth } from "../../store";
import { addUsers, addUsersBegin } from "./UserActions";
import { connect } from "react-redux"
import jQuery from 'jquery';
import "bootstrap/js/dist/modal";
window.jQuery = jQuery;

const initialState = {
    fname: "",
    lname: "",
    phone: "",
    addr: "",
    s_email: "",
    s_password: "",
    c_password: "",
    gender: "Male",
    regionState: "Al Khobar",
    isLoading: false,
    addr_error_msg: undefined,
    s_email_error_msg: undefined,
    password_error_msg: undefined,
    phone_error_msg: undefined,
    fname_error_msg: undefined,
    signupErr: ""
}
export class SignUpModal extends Component {
    state = initialState

    handleChange = event => {
        this.setState({
            fname_error_msg: undefined,
            phone_error_msg: undefined,
            s_email_error_msg: undefined,
            password_error_msg: undefined,
            addr_error_msg: undefined,
            signupErr: "",
            [event.target.id]: event.target.value,
        });
    };
    render() {
        const { fname,
            lname,
            phone,
            s_email,
            s_password,
            c_password,
            addr,
            regionState,
            gender,
            s_email_error_msg,
            password_error_msg,
            phone_error_msg,
            addr_error_msg,
            fname_error_msg } = this.state;
        const { isLoading } = this.props.userReducer
        const isSiginingUp = isLoading || this.state.isLoading;
        const femaleClass = gender === "Female" ? "bg-primary color-white" : "";
        const maleClass = gender === "Male" ? "bg-primary color-white" : "";
        return (
            <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12 p-4">
                                    <button type="button" id="closeSignupModal" className="close" data-dismiss="modal" aria-label="Close">
                                        <img className="close-img" src="/images/close.svg" alt="close" />
                                    </button>
                                    <h1 className="mb-4" id="signup_label">Signup</h1>
                                    <p className="err_msg invalid" id="signup_err">{this.state.signupErr}</p>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label id="fname_label" htmlFor="fname">First Name</label>
                                            <input type="text" disabled={isSiginingUp} className="form-control" id="fname" value={fname} onChange={this.handleChange} />
                                            <div id="fname_err" className={"err_msg " + (fname_error_msg ? "invalid" : "hide")}>
                                                {fname_error_msg}
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="lname">Last Name</label>
                                            <input type="text" disabled={isSiginingUp} className="form-control" id="lname" value={lname} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label id="phone_label" htmlFor="phone">Phone</label>
                                            <input type="text" disabled={isSiginingUp} className="form-control" id="phone" value={phone} onChange={this.handleChange} />
                                            <div id="phone_err" className={"err_msg " + (phone_error_msg ? "invalid" : "hide")}>
                                                {phone_error_msg}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label id="s_email_label" htmlFor="s_email">Email</label>
                                            <input type="email" disabled={isSiginingUp} className="form-control" id="s_email" value={s_email} onChange={this.handleChange} />
                                            <div id="s_email_err" className={"err_msg " + (s_email_error_msg ? "invalid" : "hide")}>
                                                {s_email_error_msg}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12"><label>Gender</label></div>
                                        <div className="col-6 form-group">
                                            <button disabled={isSiginingUp} className={"btn btn-outline-primary btn-full " + maleClass}
                                                onClick={() => {
                                                    this.setState({ gender: "Male" })
                                                }}>Male</button>
                                        </div>
                                        <div className="col-6 form-group">
                                            <button disabled={isSiginingUp} className={"btn btn-outline-primary btn-full " + femaleClass}
                                                onClick={() => {
                                                    this.setState({ gender: "Female" })
                                                }}>Female</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="input-group-prepend col-12">
                                            <label className="input-group-text" htmlFor="regionState">Region/State</label>
                                        </div>
                                        <div className="input-group col-12 mb-3">
                                            <select disabled={isSiginingUp} className="custom-select form-control"
                                                value={regionState}
                                                onChange={this.handleChange}
                                                id="regionState">
                                                <option value="Al Khobar" >Al Khobar</option>
                                                <option value="Dammam" >Dammam</option>
                                                <option value="Dhahran" >Dhahran</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 form-group">
                                            <label id="addr_label" htmlFor="addr">Address</label>
                                            <textarea rows="4" type="text" disabled={isSiginingUp} className="form-control" id="addr" value={addr} onChange={this.handleChange} />
                                            <div id="addr_err" className={"err_msg " + (addr_error_msg ? "invalid" : "hide")}>
                                                {addr_error_msg}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <label id="s_password_label" htmlFor="s_password">Password</label>
                                            <input type="password" disabled={isSiginingUp} className="form-control" id="s_password" value={s_password} onChange={this.handleChange} />
                                            <div id="s_password_err" className={"err_msg " + (password_error_msg ? "invalid" : "hide")}>
                                                {password_error_msg}
                                            </div>
                                        </div>
                                        <div className="col-md-6 form-group">
                                            <label htmlFor="c_password">Confirm</label>
                                            <input type="password" disabled={isSiginingUp} className="form-control" id="c_password" value={c_password} onChange={this.handleChange} />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-12 form-group mt-2">
                                            <button className="btn btn-primary btn-lg btn-block"
                                                disabled={isSiginingUp}
                                                onClick={
                                                    () => {
                                                        this.validateAndSignup()
                                                    }
                                                }
                                            > {isSiginingUp ? "Signing up..." : "Signup"} </button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 modal-center-bottom">
                                            <a href="#section-login"
                                                data-toggle="modal"
                                                target="_blank"
                                                data-target="#loginModal"
                                                data-dismiss="modal"
                                                aria-label="Close"
                                                className="modal-action-btn-center">
                                                Already have an account?
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        )
    }

    validateAndSignup = () => {
        const { fname,
            phone,
            s_email,
            addr,
            s_password,
            c_password } = this.state;

        if (validateName(fname)) {
            if (validatePhoneNo(phone)) {
                if (validateEmail(s_email)) {
                    if (addr.length >= 4) {
                        if (validatePassword(s_password)) {
                            if (s_password === c_password) {
                                this.signup();
                            } else {
                                this.setState({
                                    password_error_msg: "Passwords do not match"
                                })
                            }
                        } else {
                            this.setState({
                                password_error_msg: "Password should be atleast 6 characters long"
                            })
                        }
                    } else {
                        this.setState({
                            addr_error_msg: "Address is too short"
                        })
                    }
                } else {
                    this.setState({
                        s_email_error_msg: "Please enter a valid e-mail ID"
                    })
                }
            } else {
                this.setState({
                    phone_error_msg: "Please enter a valid phone number"
                })
            }
        } else {
            this.setState({
                fname_error_msg: "Please enter a valid name"
            })
        }
    }

    signup = () => {
        this.setState({
            isLoading: true
        })
        this.props.dispatch(addUsersBegin)
        const { fname,
            lname,
            phone,
            s_email,
            gender,
            addr,
            regionState,
            s_password } = this.state;

        const showError = () => {
            this.setState({
                signupErr: "This Email Id is already used!"
            })
        }
        auth.createUserWithEmailAndPassword(s_email, s_password)
            .then((task) => {
                this.closeModal()
                console.log(task.user)
                const currentUser = {
                    uid: task.user.uid,
                    displayName: fname + " " + lname,
                    email: s_email,
                    phoneNumber: phone,
                    type: "user",
                    gender,
                    addr,
                    regionState,
                    timeStamp: - Date.now()
                };

                if (auth.currentUser) {
                    this.props.dispatch(addUsers(currentUser))
                    auth.currentUser.updateProfile({
                        displayName: fname + " " + lname,
                        phoneNumber: phone
                    });
                }
            })
            .catch(function (error) {
                console.log(error)
                console.log(this)
                showError();
            });
    }
    closeModal = () => {
        jQuery("#closeSignupModal").click();
        jQuery("#closeSignupModal").click();
        this.setState(initialState)
    }
}

const mapStateToProps = state => {
    return {
        userReducer: state.UserReducer
    };
};

export default connect(mapStateToProps)(SignUpModal)