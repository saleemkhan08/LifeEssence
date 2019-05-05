import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="site-footer site-bg-dark">
                <div className="container">
                    <div className="row site-animate">
                        <div className="col-md-12 text-center" style={{ paddingTop: "50px" }}>
                            <div className="site-footer-widget mb-4">
                                <ul className="site-footer-social list-unstyled ">
                                    <li className="site-animate"><a href="#abc"><span className="icon-twitter"></span></a></li>
                                    <li className="site-animate"><a href="#abc"><span className="icon-facebook"></span></a></li>
                                    <li className="site-animate"><a href="#abc"><span className="icon-instagram"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-12 text-center">
                            <p>
                                Copyright &copy; 2019 | All rights reserved | This website is made with the help of <a href="https://colorlib.com">
                                    Colorlib
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
