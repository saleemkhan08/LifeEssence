import React, { Component } from 'react'

export class Menu extends Component {
    render() {
        return (
            <section className="site-section" id="section-menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center mb-5 site-animate">
                            <h2 className="display-4">Delicious Menu</h2>
                        </div>

                        <div className="col-md-12 text-center">

                            <ul className="nav site-tab-nav nav-pills mb-5" id="pills-tab" role="tablist">
                                <li className="nav-item site-animate">
                                    <a className="nav-link active menu-link" id="pills-breakfast-tab" data-toggle="pill" href="#pills-breakfast" role="tab" aria-controls="pills-breakfast" aria-selected="true">Breakfast</a>
                                </li>
                                <li className="nav-item site-animate">
                                    <a className="nav-link menu-link" id="pills-lunch-tab" data-toggle="pill" href="#pills-lunch" role="tab" aria-controls="pills-lunch" aria-selected="false">Lunch</a>
                                </li>
                                <li className="nav-item site-animate">
                                    <a className="nav-link menu-link" id="pills-dinner-tab" data-toggle="pill" href="#pills-dinner" role="tab" aria-controls="pills-dinner" aria-selected="false">Dinner</a>
                                </li>
                            </ul>

                            <div className="tab-content text-left">
                                <div className="tab-pane fade show active" id="pills-breakfast" role="tabpanel" aria-labelledby="pills-breakfast-tab">
                                    <div className="row">
                                        <div className="col-md-6 site-animate">
                                            <div className="media menu-item">
                                                <img src="images/menu_1.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Salted Fried Chicken</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">100 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_2.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Italian Sauce Mushroom</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">150 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_3.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">85 SR</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6 site-animate">
                                            <div className="media menu-item">
                                                <img src="images/menu_2.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Italian Sauce Mushroom</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">124 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_1.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Salted Fried Chicken</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">160 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_3.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">95 SR</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-lunch" role="tabpanel" aria-labelledby="pills-lunch-tab">
                                    <div className="row">
                                        <div className="col-md-6 site-animate">

                                            <div className="media menu-item">
                                                <img src="images/menu_3.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">75 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_1.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Salted Fried Chicken</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">130 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_2.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Italian Sauce Mushroom</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">200 SR</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6 site-animate">

                                            <div className="media menu-item">
                                                <img src="images/menu_3.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">68 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_2.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Italian Sauce Mushroom</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">140 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_1.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Salted Fried Chicken</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">175 SR</h6>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-dinner" role="tabpanel" aria-labelledby="pills-dinner-tab">
                                    <div className="row">
                                        <div className="col-md-6 site-animate">

                                            <div className="media menu-item">
                                                <img src="images/menu_2.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Italian Sauce Mushroom</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">130 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_1.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Salted Fried Chicken</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">124 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_3.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">143 SR</h6>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="col-md-6 site-animate">

                                            <div className="media menu-item">
                                                <img src="images/menu_3.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Fried Potato w/ Garlic</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">156 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_2.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Italian Sauce Mushroom</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">98 SR</h6>
                                                </div>
                                            </div>

                                            <div className="media menu-item">
                                                <img src="images/menu_1.jpg" className="img-fluid mr-3" alt="" />
                                                <div className="media-body">
                                                    <h5 className="mt-0">Salted Fried Chicken</h5>
                                                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                                                    <h6 className="text-primary menu-price">125 SR</h6>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Menu
