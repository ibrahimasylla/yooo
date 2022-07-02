import React from "react";
import Navbar from "@/components/_App/Navbar";
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import Team from "@/components/Common/Team";
import FunFactsArea from "@/components/Common/FunFactsArea";
import Partner from "@/components/Common/Partner";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import FeedbackStyleFour from "@/components/Common/FeedbackStyleFour";

const About1 = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyleFive />

      <PageBanner pageTitle="À propos" />

      <div className="about-area ptb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img src="/images/about-one.png" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="about-content">
                <div className="section-title">
                  <h2>À propos</h2>
                  <div className="bar"></div>
                  <p>
                    Nous sommes une agence numérique primée, passionnée, dévouée
                    et engagée à fournir d'excellents résultats. Nous sommes
                    fiers de nos compétences exceptionnelles en communication et
                    nous nous efforçons de dépasser les attentes de nos clients.
                  </p>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  sagittis egestas ante, sed viverra nunc tincidunt nec nteger
                  nonsed condimntum elit, sit amet feugiat lorem. Proin tempus
                  sagittis velit vitae scelerisque.
                </p>

                <p>
                  Lorem ipsum dolor sit amet, con se ctetur adipiscing elit. In
                  sagittis eg esta ante, sed viverra nunc tinci dunt nec elei
                  fend et tiram.
                </p>

                <p>
                  Business-to-business metrics analytics value proposition
                  funding angel investor entrepreneur alpha ramen equity
                  gamification. Social proof partner network research.
                </p>
              </div>
            </div>
          </div>

          <div className="about-inner-area">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Des experts digitaux dédiés</h3>
                  <p>
                    Nos petites équipes, interdisciplinaires et passionnées
                    (consultants, designers, développeurs, chefs de projet web),
                    travaillent en étroite collaboration avec nos Clients, pour
                    trouver de nouvelles opportunités de visibilité et de
                    croissance.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3> Une communication fluide</h3>
                  <p>
                    Notre approche collaborative favorise des relations de
                    travail agréables, une communication transparente, une
                    utilisation efficace des ressources projets. Nos valeurs
                    sont fondées sur l'écoute, l'humilité, le partage.
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3>Agence digitale de proximité</h3>
                  <p>
                    Nous prenons le temps de comprendre votre entreprise afin de
                    générer une réelle valeur ajoutée. Nous sommes un partenaire
                    de confiance, participant à des initiatives de marque, de
                    marketing et de technologie pour vous aider à réussir.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FeedbackStyleFour />

      <Footer />
    </>
  );
};

export default About1;
