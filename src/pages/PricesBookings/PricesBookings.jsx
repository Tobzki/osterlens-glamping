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
        setIsEmailSent(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navbar />
      <div className="app__contactform_prices_container">
        <div className="app__contactform_prices">
          <h1 className="headtext__peppins">Priser</h1>
          <p className="p__cormorant">1 Natt - 1500kr</p>
          <p className="p__cormorant">1 Natt - 1500kr</p>
          <p className="p__cormorant">1 Natt - 1500kr</p>
          <p className="p__cormorant">1 Natt - 1500kr</p>
          <p className="p__opensans">
            Gör gärna en bokningsförfrågan nedan så svarar vi så snart vi kan.
          </p>
        </div>
      </div>
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
          {isEmailSent && (
            <p className="p__cormorant">Vi kommer kontakta dig!</p>
          )}
          <button>Skicka</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PricesBookings;
