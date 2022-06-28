import React, { Component } from 'react';
import Link from 'next/link';
import * as Icon from 'react-feather';

class PricingStyleThree extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="pricing-area pb-50">
                <div className="container">
                    <div className="section-title st-fs-28">
                        <span className="sub-title">Pricing</span>
                        <h2>Maintenance  </h2>
                        <div className="bar"></div>
                        <p>

                        Votre site Web doit être votre meilleur agent de marketing et de vente, 
                        et doit être à la hauteur pour chaque visiteur. Nos forfaits de maintenance 
                        vous aident à le faire fonctionner au maximum de ses performances.
                        </p>
                    </div>
                    
                    <div className="tab pricing-tab bg-color">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                Plan Mensuel
                            </li>
                            
                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                 Plan Annuel<i data-feather="calendar"></i>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $150 <span>/m</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Get Started Free</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> Drag & Drop Builder</li>
                                                <li><Icon.Check /> Lead Generation & Sales</li>
                                                <li><Icon.Check /> Boot & Digital Assistants</li>
                                                <li><Icon.Check /> Customer Service</li>
                                                <li><Icon.Check /> Up to 1000 Subscribers</li>
                                                <li><Icon.Check /> Unlimited Broadcasts</li>
                                                <li><Icon.Check /> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Pro</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $200 <span>/m</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Start 3 Days Free Trial</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> Drag & Drop Builder</li>
                                                <li><Icon.Check /> Lead Generation & Sales</li>
                                                <li><Icon.Check /> Boot & Digital Assistants</li>
                                                <li><Icon.Check /> Customer Service</li>
                                                <li><Icon.Check /> Up to 3300 Subscribers</li>
                                                <li><Icon.Check /> Unlimited Broadcasts</li>
                                                <li><Icon.Check /> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row justify-content-center">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                            $1300 <span>/y</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Get Started Free</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> Drag & Drop Builder</li>
                                                <li><Icon.Check /> Lead Generation & Sales</li>
                                                <li><Icon.Check /> Boot & Digital Assistants</li>
                                                <li><Icon.Check /> Customer Service</li>
                                                <li><Icon.Check /> Up to 1000 Subscribers</li>
                                                <li><Icon.Check /> Unlimited Broadcasts</li>
                                                <li><Icon.Check /> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="pricing-box">
                                            <div className="pricing-header">
                                                <h3>Pro</h3>
                                                <p>Get your business up <br /> and running</p>
                                            </div>

                                            <div className="price">
                                                $2200 <span>/y</span>
                                            </div>

                                            <div className="buy-btn">
                                                <Link href="#">
                                                    <a className="btn btn-primary">Start 3 Days Free Trial</a>
                                                </Link>
                                            </div>

                                            <ul className="pricing-features">
                                                <li><Icon.Check /> Drag & Drop Builder</li>
                                                <li><Icon.Check /> Lead Generation & Sales</li>
                                                <li><Icon.Check /> Boot & Digital Assistants</li>
                                                <li><Icon.Check /> Customer Service</li>
                                                <li><Icon.Check /> Up to 3300 Subscribers</li>
                                                <li><Icon.Check /> Unlimited Broadcasts</li>
                                                <li><Icon.Check /> Landing Pages & Web Widgets</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Image */}
                <div className="shape9 mobile-dnone">
                    <img src="/images/agency-image/agency-shape1.png" alt="image" />
                </div>
            </div>
        );
    }
}

export default PricingStyleThree;