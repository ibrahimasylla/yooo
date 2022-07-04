import React from "react";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div className="agency-main-banner">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="agency-banner-content">
              <span className="sub-title">Nous sommes </span>
              <h1>Khasyma</h1>
              <p>
                Khasyma est une agence web indépendante fondée à Montreal en
                2019. Design, UX, Développement web et Référencement SEO sur
                mesure. Développez votre stratégie digitale, créez votre Site
                Internet et améliorez votre visibilité sur Google avec notre
                agence web.
              </p>

              <Link href="/contact">
                <a className="btn btn-secondary">Contact</a>
              </Link>
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="agency-banner-image">
              <img
                src="https://images.unsplash.com/photo-1562577308-9e66f0c65ce5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Shape Images */}
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
    </div>
  );
};

export default MainBanner;
