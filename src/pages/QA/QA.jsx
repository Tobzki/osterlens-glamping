import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image00 from "../../assets/image00.jpg";
import Card from "../../components/Card/Card";
import "./QA.css";
const QA = () => {
  const data = [
    {
      question: "Hur hittar jag till er?",
      imageUrl: Image00,
      answer: "Det är faktiskt extremt lätt.",
    },
    {
      question: "Hur hittar jag till er?",
      imageUrl: Image00,
      answer: "Det är faktiskt extremt lätt.",
    },
    {
      question: "Hur hittar jag till er?",
      imageUrl: Image00,
      answer: "Det är faktiskt extremt lätt.",
    },
    {
      question: "Hur hittar jag till er?",
      imageUrl: Image00,
      answer: "Det är faktiskt extremt lätt.",
    },
    {
      question: "Hur hittar jag till er?",
      imageUrl: Image00,
      answer: "Det är faktiskt extremt lätt.",
    },
    {
      question: "Hur hittar jag till er?",
      imageUrl: Image00,
      answer: "Det är faktiskt extremt lätt.",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="app__qa_container">
        <Card
          title={data[0].question}
          imageUrl={data[0].imageUrl}
          body={data[0].answer}
        />
        <Card
          title={data[0].question}
          imageUrl={data[0].imageUrl}
          body={data[0].answer}
        />
        <Card
          title={data[0].question}
          imageUrl={data[0].imageUrl}
          body={data[0].answer}
        />
      </div>
      <div className="app__qa_container">
        <Card
          title={data[0].question}
          imageUrl={data[0].imageUrl}
          body={data[0].answer}
        />
        <Card
          title={data[0].question}
          imageUrl={data[0].imageUrl}
          body={data[0].answer}
        />
        <Card
          title={data[0].question}
          imageUrl={data[0].imageUrl}
          body={data[0].answer}
        />
      </div>
      <Footer />
    </>
  );
};

export default QA;
