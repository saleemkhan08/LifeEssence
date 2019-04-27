import React, { Component } from 'react'

export class SignUpModal extends Component {
    render() {
        return (
            <div className="modal fade" id="signupModal" tabIndex="-1" role="dialog" aria-labelledby="signupModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-12 p-5">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <small>CLOSE </small><span aria-hidden="true">&times;</span>
                                    </button>
                                    <h1 className="mb-4">Signup</h1>
                                    <form action="#" method="post">
                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="m_fname">First Name</label>
                                                <input type="text" className="form-control" id="m_fname" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="m_lname">Last Name</label>
                                                <input type="text" className="form-control" id="m_lname" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="m_date">Date of Birth</label>
                                                <input type="text" className="form-control" id="m_date" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="m_phone">Phone</label>
                                                <input type="text" className="form-control" id="m_phone" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="s_email">Email</label>
                                                <input type="email" className="form-control" id="s_email" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="s_password">Password</label>
                                                <input type="password" className="form-control" id="s_password" />
                                            </div>
                                            <div className="col-md-6 form-group">
                                                <label htmlFor="c_password">Confirm</label>
                                                <input type="text" className="form-control" id="c_password" />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <input type="submit" className="btn btn-primary btn-lg btn-block" value="Signup" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
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

export default SignUpModal
