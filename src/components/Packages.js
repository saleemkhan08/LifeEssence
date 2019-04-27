import React, { Component } from 'react'
import Package from "./PackageItem"
export class Packages extends Component {
    state = {
        seeMorePackages: false
    }
    render() {
        return (
            <section className="sub-section bg-light last-sub-section" id="section-gallery">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5 site-animate">
                            <h2 className="display-4">Our Packages</h2>
                        </div>
                        <Package name="Student Package"
                            description=""
                            period1="28 Days"
                            period2="14 Days"
                            period1Price="1800 SR"
                            period2Price="1000 SR"
                            meals="3"
                            mealsDesc="(+1 School Meal)"
                            snacks="3"
                            appetizer="2"
                        />
                        <Package name="Platinum Package"
                            description=""
                            period1="28 Days"
                            period2="14 Days"
                            period1Price="1800 SR"
                            period2Price="1000 SR"
                            meals="3"
                            snacks="3"
                            appetizer="2"
                        />
                        <Package name="Office Box"
                            description=""
                            period1="20 Days"
                            period1Price="900 SR"
                            meals="1"
                            snacks="2"
                            appetizer="1"
                            appetizerDesc="(Soup or Salad)"
                        />
                        <div id="morePackages" className="collapse col-12">
                            <div className="row">
                                <Package name="Fittness Package"
                                    description="High Protien"
                                    period1="28 Days"
                                    period1Price="2200 SR"
                                    meals="3"
                                    snacks="4"
                                    appetizer="2"
                                    colSize="6"
                                />

                                <Package name="Special Organic Detox"
                                    description="High Protien - Low Carbo"
                                    period1="28 Days"
                                    period1Price="3000 SR"
                                    meals="3"
                                    snacks="3"
                                    appetizer="0"
                                    colSize="6"
                                />
                            </div>
                        </div>
                        <div className="col-12 more-less-btn-container">
                            <button className="btn btn-outline-primary site-animate more-btn"
                                type="button"
                                onClick={() => {
                                    this.setState({
                                        seeMorePackages: !this.state.seeMorePackages
                                    })
                                }}
                                data-toggle="collapse"
                                data-target="#morePackages"
                                aria-expanded="false"
                                aria-controls="morePackages">
                                {this.state.seeMorePackages ? "View Less Packages" : "View More Packages"}
                            </button>
                        </div>
                    </div>
                </div>
                <section className="sub-section bg-white" id="our-clients">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center mb-5 site-animate">
                                <h3>Special Packages</h3>
                            </div>
                            <div className="col-md-12">
                                <div className="owl-carousel site-owl">
                                    <CarouselItem img="images/pregnant_package.jpg"
                                        name="Pregnant Women Diet"
                                        desc="Special programs for pregnant women which maintains the natural increase in weight during pregnancy" />
                                    <CarouselItem img="images/breast_feeding_package.jpg"
                                        name="Breastfeeding Women Diet"
                                        desc="Special programs for women who does breastfeeding to ensure the healthy decrease after birth without affecting the baby" />
                                    <CarouselItem img="images/elderly_package.jpg"
                                        name="Elderly People Diet"
                                        desc="Special programs for the elderly to maintain their health and vitality with healthy meals" />
                                    <CarouselItem img="images/kids_package.jpg"
                                        name="Young Kids Diet"
                                        desc="Special programs for children to help them gain weight, while maintaing their vitality and energy" />
                                    <CarouselItem img="images/fitness_package.jpg"
                                        name="Fitness &amp; Excercise Diet"
                                        desc="Integrated diet programs that ensure healthy diet while maintaining a healthy body" />
                                    <CarouselItem img="images/blood_pressure_package.jpg"
                                        name="Medical Condition Diet"
                                        desc="Special programs for diabetics, high blood pressure and GERD patients" />
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
                <div className="media-body p-md-5 p-4">
                    <h5 className="mt-0 h4">{props.name}</h5>
                    <p className="mb-4">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Packages
