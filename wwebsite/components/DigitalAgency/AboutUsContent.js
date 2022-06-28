import React from 'react';
import Link from 'next/link';

const AboutUsContent = () => {
    return (
        <div className="agency-about-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-img">
                            <img src="/images/agency-image/agency-about-img.jpg" alt="image" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="agency-about-content">
                            <span className="sub-title">À propos</span>
                            <h2>Créer des opportunités d’affaires </h2>
                            <div className="bar"></div>
                            <p>Khasyma a été créé dans le seul but de délivrer aux PME des résultats marketing web élevés à prix abordables. </p>
                            <p>Nous planifions, mettons en œuvre et optimisons des campagnes publicitaires en ligne qui sont vues par des millions de personnes dans le monde.</p>

                            <Link href="/about">
                                <a className="btn btn-secondary">Voir Plus</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shape Images */}
            <div className="shape2 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape3">
                <img src="/images/shape3.svg" alt="shape" />
            </div>
            <div className="shape6 rotateme">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape7">
                <img src="/images/shape4.svg" alt="shape" />
            </div>
            <div className="shape8 rotateme">
                <img src="/images/shape2.svg" alt="shape" />
            </div>
            <div className="shape10">
                <img src="/images/agency-image/agency-shape2.png" alt="image" />
            </div>
        </div>
    );
}

export default AboutUsContent;