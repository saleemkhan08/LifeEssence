import React, { Component } from 'react'

export class LoginModal extends Component {
    render() {
        return (
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12 p-5">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <small>CLOSE </small><span aria-hidden="true">&times;</span>
                                    </button>
                                    <h1 className="mb-4">Login</h1>
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="m_email">Email</label>
                                                <input type="email" className="form-control" id="m_email" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="email" className="form-control" id="password" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Login" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <a href="#signup-section"
                                                    target="_blank"
                                                    data-toggle="modal"
                                                    data-target="#signupModal"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                    className="modal-action-btn">Signup</a>
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <a href="#forgot-password-section"
                                                    className="modal-action-btn-right">Forgot Password?</a>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginModal
