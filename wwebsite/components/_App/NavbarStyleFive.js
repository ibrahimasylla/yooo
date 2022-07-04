import React, { useState } from "react";
import Link from "@/utils/ActiveLink";
import * as Icon from "react-feather";

const NavbarStyleFive = () => {
  const [menu, setMenu] = React.useState(true);

  const toggleNavbar = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    let elementId = document.getElementById("header");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  return (
    <header id="header" className="headroom navbar-style-three">
      <div className="startp-nav">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link href="/">
              <a onClick={toggleNavbar} className="navbar-brand">
                <img src="/images/khasyma.png" alt="logo" />
              </a>
            </Link>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link href="/" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Accueil
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-1" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      À propos
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/services-5" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      services{" "}
                    </a>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link href="/contact" activeClassName="active">
                    <a onClick={toggleNavbar} className="nav-link">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarStyleFive;
