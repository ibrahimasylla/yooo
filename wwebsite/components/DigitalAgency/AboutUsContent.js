import React from "react";
import Link from "next/link";

const AboutUsContent = () => {
  return (
    <div className="agency-about-area">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <div className="agency-about-img">
              <img
                src="https://images.unsplash.com/photo-1551590192-8070a16d9f67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80"
                alt="image"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-12">
            <div className="agency-about-content">
              <span className="sub-title">À propos</span>
              <h2>
                Agence web à Montréal pour Grands comptes, PME, Associations.
              </h2>
              <div className="bar"></div>
              <p>
                Khasyma a été créé dans le seul but de délivrer aux PME des
                résultats marketing web élevés à prix abordables.{" "}
              </p>
              <p>
                Ensemble, nos compétences répondent au mieux à vos objectifs et
                aux besoins de vos utilisateurs. Gagnez en notoriété, améliorez
                votre image, optimisez votre visibilité, générez du trafic et
                des conversions avec notre agence web à Montreal.
              </p>
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
};

export default AboutUsContent;
