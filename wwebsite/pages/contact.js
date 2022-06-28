import React from "react";
import Navbar from "@/components/_App/Navbar";
import Footer from "@/components/_App/Footer";
import PageBanner from "@/components/Common/PageBanner";
import ContactInfo from "@/components/Contact/ContactInfo";
import NavbarStyleFive from "@/components/_App/NavbarStyleFive";
import GoogleMap from "@/components/Contact/GoogleMap";
import ContactForm from "@/components/Contact/ContactForm";

const Contact = () => {
  return (
    <>
      {/* <Navbar /> */}
      <NavbarStyleFive />

      <PageBanner pageTitle="Contact" />

      <ContactInfo />

      <GoogleMap />

      <ContactForm />

      <Footer />
    </>
  );
};

export default Contact;
