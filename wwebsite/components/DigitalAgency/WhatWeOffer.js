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
                <a>Création de site internet</a>
              </h3>
              <p>
                Vous souhaitez rendre les produits, services de votre entreprise
                visibles sur Internet? Khasyma propose un service de création de
                site web dédié aux PME pour les aider dans leur croissance sur
                le web.
              </p>
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
                <a>Boutique en ligne</a>
              </h3>
              <p>
                Vous souhaitez commercialiser vos produits sur internet et
                atteindre une nouvelle clientèle? Khasyma propose un service de
                création de boutique en ligne dédié au PME.
              </p>
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
                <a>Publicité en ligne</a>
              </h3>
              <p>
                Vous souhaitez promouvoir votre marque sur les plateformes
                préférées de vos clients? Consultez nos forfaits de publicité
                médias sociaux et contactez notre agence aujourd'hui.
              </p>
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
                <a>Gestion des médias sociaux</a>
              </h3>
              <p>
                Nous créons du contenu partageable qui élève votre marque et
                transforme les abonnés en clients. Partagez vos nouveaux
                produits ou services et augmentez le trafic de votre site Web en
                utilisant l'un de nos plans de médias sociaux
              </p>
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
