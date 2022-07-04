import React from "react";
import OwlCarousel from "react-owl-carousel3";
import * as Icon from "react-feather";

const options = {
  loop: false,
  nav: false,
  dots: true,
  autoplay: true,
  smartSpeed: 1000,
  autoplayTimeout: 5000,
  items: 1,
  animateOut: "fadeOut",
};

const FeedbackStyleFour = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <div className="ml-feedback-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Témoignage</h2>
          <div className="bar"></div>
          <p>Nos clients parlent de nous Mieux que nous</p>
        </div>

        {display ? (
          <OwlCarousel
            className="ml-feedback-slides owl-carousel owl-theme"
            {...options}
          >
            <div className="single-ml-feedback-item">
              <div className="client-info">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_CQ3IrjZcisW-FO12jxRtSA9shZYuykqA2w&usqp=CAU"
                  alt="image"
                />
                <h3>Sarah Taylor</h3>
                <span>CEO at Samidax</span>
              </div>
              <p>
                Excellente agence, compétente et professionnelle. Très bon
                contact avec Nicolas, toujours disponible, réactif et à l'écoute
                de nos besoins.
              </p>
            </div>

            <div className="single-ml-feedback-item">
              <div className="client-info">
                <img
                  src="https://cdn.pixabay.com/photo/2017/12/18/03/01/black-avatar-3025348_1280.png"
                  alt="image"
                />
                <h3> Diop</h3>
                <span>CEO at Ized </span>
              </div>
              <p>
                Nous sommes satisfait de la réalisation de notre site. La
                réactivité de l'équipe a été au RDV.
              </p>

              <div className="rating">
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />
                <Icon.Star />
              </div>
            </div>

            <div className="single-ml-feedback-item">
              <div className="client-info">
                <img
                  src="https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg"
                  alt="image"
                />
                <h3>Josie Dion</h3>
              </div>
              <p>
                Comparé aux autres entreprises que nous avons utilisées dans le
                passé, Thrive a été de loin le meilleur dans tous les domaines.
                Lors de la construction de notre nouveau site Web, le service
                client a été rapide et simple et les services réels sont bien
                documentés et logiques par rapport à nos besoins.
              </p>
            </div>
          </OwlCarousel>
        ) : (
          ""
        )}
      </div>

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape2 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
      <div className="shape3">
        <img src="/images/shape3.svg" alt="shape" />
      </div>
      <div className="shape4">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape7">
        <img src="/images/shape4.svg" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </div>
  );
};

export default FeedbackStyleFour;
