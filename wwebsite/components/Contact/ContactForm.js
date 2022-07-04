import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);
  const { register, handleSubmit, errors } = useForm();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact);
  };

  const onSubmit = async (e) => {
    // e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      await axios.post(url, payload);
      console.log(url);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Prenez contact avec nous</h2>
          <div className="bar"></div>
          <p>Nous serons heureux de vous aider !</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <img src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="image" />
          </div>

          <div className="col-lg-6 col-md-12">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="Name"
                      placeholder="Votre Nom"
                      className="form-control"
                      value={contact.name}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.name && "Nom est Obligatoire."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Votre email "
                      className="form-control"
                      value={contact.email}
                      onChange={handleChange}
                      ref={register({ required: true, pattern: /^\S+@\S+$/i })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.email && "Email is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Votre Numero"
                      className="form-control"
                      value={contact.number}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.number && "Number is required."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Sujet "
                      className="form-control"
                      value={contact.subject}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.subject && "Sujet est Obligatoire."}
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      placeholder="Message..."
                      className="form-control"
                      value={contact.text}
                      onChange={handleChange}
                      ref={register({ required: true })}
                    />
                    <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      {errors.text && "Message est Obligatoire."}
                    </div>
                  </div>

                  {/* <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      By checking this, you agree to our{" "}
                      <Link href="/term-condition">
                        <a>Terms</a>
                      </Link>{" "}
                      and{" "}
                      <Link href="/privacy-policy">
                        <a>Privacy policy</a>
                      </Link>
                      .
                    </label>
                  </div> */}
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Envoyer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
