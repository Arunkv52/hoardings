import React from "react";
import Header from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import About from "./sections/About";
import Gallery from "./sections/Gallery";
import ScrollVelocity from "./components/ScrollVelocity";
import Service from "./sections/Service";
import Contact from "./sections/Contact";
import Clients from "./sections/Clients";
// import MyAccordition from "./sections/MyAccordition";

const App = () => {
  return (
    <>
      <Header />
      <About />
      <Gallery />
      <ScrollVelocity />
      <Service />
      <Clients />
      {/* <MyAccordition/> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
