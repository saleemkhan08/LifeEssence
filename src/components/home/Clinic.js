import React, { Component } from 'react'

export class Clinic extends Component {
    render() {
        return (
            <section className="site-section bg-light" id="section-clinic">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5 site-animate">
                            <h2 className="display-4">Dietician Clinic</h2>
                            <p>
                                Life Essence Clinic is staffed with professional dietician,
                                to council each client to work towards making improvements to their nutrition
                                that contributes to lifelong health.
                            </p>
                        </div>
                    </div>
                    <div className="row clinic-container">
                        <div className="col-md-6 site-animate clinic-text container">
                            <h4>Our Services</h4>
                            <p>
                                We also help in choosing the perfect Package to reach your target
                                by analysing your body composition using the latest and most accurate device
                                </p>
                            <p>
                                We give individual food-related counseling and provide information about Nutrition for obesity,
                                hyperlipidemia, hypertension, diabetes, renal failures, Eating Disorders, Vegetarians, Exercise,
                                and other nutrition related conditions.
                                </p>
                            <p>
                                Seca Mbca 515 The medical Body Composition Analyzer
                                breaks down weight into body compartments relevant to the practice of medicine.
                                </p>
                            <ol>
                                <li>Suitable for weighing patients up to 300 kilograms</li>
                                <li>Precise. Proven by international medical studies</li>
                                <li>Fast. Measurements executed in 17 seconds</li>
                                <li>Versatile. Analysis of fat and fat-free mass, total body water,
                                        extracellular water, intracellular water and skeletal muscle mass</li>
                            </ol>
                        </div>
                        <div className="col-md-6 site-animate img clinic-img-container" data-animate-effect="fadeInRight">
                            <img src="images/seca.png" alt="" className="img-fluid clinic-img" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Clinic
