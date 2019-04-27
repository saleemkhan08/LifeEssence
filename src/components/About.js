import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <section className="sub-section bg-light" id="section-about">
                <div className="container">
                    <div className="row clinic-container">
                        <div className="col-md-12 text-center mb-5 site-animate">
                            <h2 className="display-4">About Life Essence</h2>
                        </div>
                        <div className="col-md-5 site-animate">
                            <h3>Our Story</h3>
                            <br />
                            <p>
                                Life Essence provides a healthy diet with a tailor – made program designed for each individual client.
                                We provide the most convenient way to have fresh, delicious and healthy food delivered to your door.
                            </p>

                            <p>
                                All of our meals balance all the nutrient your body needs to stay healthy and slim without sacrificing any taste.
                                Our chef prepared menus are nutritionally balanced and never frozen or vacuum packed
                            </p>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-6 site-animate img" data-animate-effect="fadeInRight">
                            <img src="images/about_img_1.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <section className="site-section last-sub-section bg-white" id="why-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mb-5 site-animate">
                                <h3>Why us?</h3>
                            </div>
                            <Usp title1="Competitive" title2="Pricing" image="images/pricing.png">
                                We offer healthy and delicious food at your door step at a competitive price
                        </Usp>
                            <Usp title1="Latest" title2="Equipments" image="images/equipment.png">
                                We use the latest medical devices for analyzing the body components
                        </Usp>
                            <Usp title1="Refrigerated" title2="Vehicals" image="images/delivery.png">
                                We use refrigerated vehicals to keep your food fresh and deliver it on time
                        </Usp>
                            <Usp title1="Finest" title2="Chefs" image="images/chef.png">
                                We have the finest chefs in town, trained to prepare the healthiest food
                        </Usp>
                        </div>
                    </div>
                </section>
                <section className="site-section last-sub-section bg-light" id="our-clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mb-5 site-animate">
                                <h3 >Our Clients</h3>
                            </div>
                            <div className="col-md-12">
                                <div className="owl-carousel site-owl">
                                    <CarouselItem img="images/client_1.png" />
                                    <CarouselItem img="images/client_2.png" />
                                    <CarouselItem img="images/client_3.png" />
                                    <CarouselItem img="images/client_4.png" />
                                    <CarouselItem img="images/client_5.png" />
                                    <CarouselItem img="images/client_6.png" />
                                    <CarouselItem img="images/client_7.png" />
                                    <CarouselItem img="images/client_8.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}

const CarouselItem = props => {
    return (
        <div className="item">
            <div className="media d-block mb-4 text-center site-media site-animate border-0">
                <img src={props.img} alt="" className="img-fluid" />
            </div>
        </div>
    )
}

const Usp = props => {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="media d-block mb-4 text-center site-media site-animate">
                <img src={props.image} alt="" className="img-fluid why-us-img" />
                <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h5">
                        {props.title1} <br /> {props.title2}
                    </h5>
                    <p className="mb-4">{props.children}</p>
                </div>
            </div>
        </div>
    )
}

export default About
