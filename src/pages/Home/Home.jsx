import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import image00 from "../../assets/image00.jpg";
import image01 from "../../assets/image01.jpg";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="app__home_container">
        <div className="app__home_content">
          <div className="app__home_info">
            <h1 className="headtext__peppins">Om Oss</h1>
            <p className="p__cormorant app__home__cormorant">
              Robin och Hanna heter vi somRobin och Hanna heter vi somRobin och
              Hanna heter vi somRobin och Hanna heter vi somRobin och Hanna
              heter vi som Robin och Hanna heter vi somRobin och Hanna heter vi
              somRobin och Hanna heter vi somRobin och Hanna heter vi somRobin
              och Hanna heter vi som
            </p>
          </div>
          <img src={image00} alt="tent" />
          <div className="app__home_info">
            <h1 className="headtext__peppins">Vår Historia</h1>
            <p className="p__opensans app__home__cormorant">
              Robin och Hanna heter vi somRobin och Hanna heter vi somRobin och
              Hanna heter vi somRobin och Hanna heter vi somRobin och Hanna
              heter vi somRobin och Hanna heter vi somRobin och Hanna heter vi
              somRobin och Hanna heter vi somRobin och Hanna heter vi somRobin
              och Hanna heter vi som
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
