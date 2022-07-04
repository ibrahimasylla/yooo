import React from "react";
import Link from "next/link";
import * as Icon from "react-feather";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-area bg-f7fafd">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <div className="logo">
                <Link href="/it-startup">
                  <a>
                    <img src="/images/logo.png" alt="logo" />
                  </a>
                </Link>
              </div>
              <p>
                Khasyma est une agence web indépendante fondée à Montreal en
                2019. Design, UX, Développement web et Référencement SEO sur
                mesure.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget pl-5">
              <h3>Pages</h3>
              <ul className="list">
                <li>
                  <Link href="/">
                    <a>Accueil </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-1">
                    <a>À propos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/services-5">
                    <a>services</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <a> Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Horaire</h3>
              <ul className="list">
                <li>
                  <a>Lundi:08h:00-17h:00</a>
                </li>
                <li>
                  <a>Mardi:08h:00-17h:00</a>
                </li>
                <li>
                  <a>Mercredi:08h:00-17h:00</a>
                </li>
                <li>
                  <a>Jeudi:08h:00-17h:00</a>
                </li>
                <li>
                  <a>Vendredi:08h:00-15h:00</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="single-footer-widget">
              <h3>Adresse</h3>

              <ul className="footer-contact-info">
                <li>
                  <Icon.MapPin />
                  Montreal <br />
                </li>
                <li>
                  <Icon.Mail />
                  Email: <a href="mailto:startp@gmail.com">info@khasyma.com</a>
                </li>
                <li>
                  <Icon.PhoneCall />
                  Phone: <a href="tel:321984754">+ (613)-415-6925</a>
                  <br />
                  Phone: <a href="tel:321984754">+ (873)-688-2318</a>
                </li>
              </ul>
              <ul className="social-links">
                <li>
                  <a
                    href="https://m.facebook.com/Khasyma-105821402190382//"
                    className="facebook"
                    target="_blank"
                  >
                    <Icon.Facebook />
                  </a>
                </li>

                <li>
                  <a
                    href="https://instagram.com/khasymacloud?igshid=YmMyMTA2M2Y="
                    className="instagram"
                    target="_blank"
                  >
                    <Icon.Instagram />
                  </a>
                </li> 
              </ul>
            </div>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="copyright-area">
              <p>
                Copyright &copy; {currentYear} Tous droits réservés par{" "}
                <a href="https://Khasyma.com/" target="_blank">
                  Khasyma
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/map.png" className="map" alt="map" />

      {/* Shape Images */}
      <div className="shape1">
        <img src="/images/shape1.png" alt="shape" />
      </div>
      <div className="shape8 rotateme">
        <img src="/images/shape2.svg" alt="shape" />
      </div>
    </footer>
  );
};

export default Footer;
