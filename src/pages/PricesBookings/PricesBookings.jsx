import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import emailjs from "emailjs-com";

import "./PricesBookings.css";

const PricesBookings = () => {
  const [isEmailSent, setIsEmailSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nsqazbe",
        "template_of9fcai",
        e.target,
        "user_P1QCxI5DakCX6LCc5yp9B"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className="app__contactform_container">
        <form className="app__contactform_form" onSubmit={sendEmail}>
          <h1 className="headtext__peppins">Kontakta Oss</h1>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Namn"
            required
          ></input>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
          ></input>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Mobil"
            required
          ></input>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="När vill ni besöka oss?"
          ></textarea>
          <button>Skicka</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PricesBookings;
