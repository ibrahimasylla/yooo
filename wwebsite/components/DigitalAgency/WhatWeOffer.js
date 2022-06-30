import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const WhatWeOffer = () => {
  return (
    <div className="solutions-area ptb-80">
      <div className="container">
        <div className="section-title st-fs-28">
          <span className="sub-title">Ce que nous offrons</span>
          <h2>Nos solutions vedettes</h2>
          <div className="bar"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="solutions-box">
              <div className="icon">
                <i className="bx bx-landscape"></i>
                <img
                  src="/images/agency-image/agency-icon-bg.png"
                  alt="image"
                />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Creation de site internet</a>
                </Link>
              </h3>
              <p>
                Vous souhaitez rendre les produits, services de votre entreprise
                visibles sur Internet? Khasyma propose un service de création de
                site web dédié aux PME pour les aider dans leur croissance sur
                le web.
              </p>

              <Link href="/service-details">
                <a className="learn-more-btn">
                  <Icon.PlusCircle /> voir plus
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="solutions-box">
              <div className="icon">
                <i className="bx bx-bar-chart-alt"></i>
                <img
                  src="/images/agency-image/agency-icon-bg.png"
                  alt="image"
                />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Boutique en ligne</a>
                </Link>
              </h3>
              <p>
                Vous souhaitez commercialiser vos produits sur internet et
                atteindre une nouvelle clientèle? Khasyma propose un service de
                création de boutique en ligne dédié au PME.
              </p>

              <Link href="/service-details">
                <a className="learn-more-btn">
                  <Icon.PlusCircle /> voir plus
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="solutions-box">
              <div className="icon">
                <i className="bx bx-devices"></i>
                <img
                  src="/images/agency-image/agency-icon-bg.png"
                  alt="image"
                />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Publicité en ligne</a>
                </Link>
              </h3>
              <p>
                Vous souhaitez promouvoir votre marque sur les plateformes
                préférées de vos clients? Consultez nos forfaits de publicité
                médias sociaux et contactez notre agence aujourd'hui.
              </p>

              <Link href="/service-details">
                <a className="learn-more-btn">
                  <Icon.PlusCircle /> voir plus
                </a>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-6">
            <div className="solutions-box">
              <div className="icon">
                <i className="bx bx-bar-chart-alt"></i>
                <img
                  src="/images/agency-image/agency-icon-bg.png"
                  alt="image"
                />
              </div>

              <h3>
                <Link href="/service-details">
                  <a>Boutique en ligne</a>
                </Link>
              </h3>
              <p>
                Vous souhaitez commercialiser vos produits sur internet et
                atteindre une nouvelle clientèle? Khasyma propose un service de
                création de boutique en ligne dédié au PME.
              </p>

              <Link href="/service-details">
                <a className="learn-more-btn">
                  <Icon.PlusCircle /> voir plus
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="shape9 slow mobile-dnone">
        <img
          src="/images/agency-image/agency-shape1.png"
          className="animate__animated animate__fadeInLeft animate__delay-0.7s"
          alt="image"
        />
      </div>
    </div>
  );
};

export default WhatWeOffer;
