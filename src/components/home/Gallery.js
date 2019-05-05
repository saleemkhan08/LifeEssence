import React, { Component } from 'react'

export class Gallery extends Component {
    render() {
        return (
            <section className="site-section" id="section-gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5 site-animate">
                            <h2 className="display-4">Our Packages</h2>
                        </div>
                        <div className="col-md-4 site-animate">
                            <a href="images/menu_1.jpg" className="site-thumbnail image-popup">
                                <img src="images/menu_1.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-4 site-animate">
                            <a href="images/menu_2.jpg" className="site-thumbnail image-popup">
                                <img src="images/menu_2.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-4 site-animate">
                            <a href="images/menu_3.jpg" className="site-thumbnail image-popup">
                                <img src="images/menu_3.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>

                        <div className="col-md-4 site-animate">
                            <a href="images/menu_2.jpg" className="site-thumbnail image-popup">
                                <img src="images/menu_2.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-4 site-animate">
                            <a href="images/menu_3.jpg" className="site-thumbnail image-popup">
                                <img src="images/menu_3.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                        <div className="col-md-4 site-animate">
                            <a href="images/menu_1.jpg" className="site-thumbnail image-popup">
                                <img src="images/menu_1.jpg" alt="" className="img-fluid" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery
