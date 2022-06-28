import React from "react";
import * as Icon from "react-feather";

const ContactInfo = () => {
  return (
    <div className="contact-info-area ptb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Mail />
              </div>
              <h3>Mail </h3>
              <p>
                <a href="mailto:admin@startp.com">admin@startp.com</a>
              </p>
              <p>
                <a href="mailto:info@startp.com">info@startp.com</a>
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.MapPin />
              </div>
              <h3>Visitez ici</h3>
              <p>
                27 Division St, New York, NY 10002, United States of America
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="contact-info-box">
              <div className="icon">
                <Icon.Phone />
              </div>
              <h3>Appelez ici</h3>
              <p>
                <a href="tel:+16134156925">+1 613 415 6925</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
