import React, { Component } from 'react'

export class Banner extends Component {
    render() {
        return (
            <section className="site-cover" style={{ backgroundImage: `url(images/bg_3.jpg)` }} id="section-home">
                <div className="container">
                    <div className="row align-items-center justify-content-center text-center site-vh-100">
                        <div className="col-md-12">
                            <h1 className="site-heading site-animate mb-3">Welcome To Life Essence</h1>
                            <h2 className="h5 site-subheading mb-5 site-animate">It's not a diet.. It's a lifestyle. </h2>
                            <p>
                                <a href="#signup-section"
                                    target="_blank"
                                    data-toggle="modal"
                                    data-target="#signupModal"
                                    className="btn btn-outline-white btn-lg site-animate">
                                    Signup Today
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Banner
