import { useState } from "react";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Hero from "./components/hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parllax from "./components/parllax/Parllax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
const App = () => {
  return (
    <>
      <section id="HomePage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parllax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parllax type="portfolio" />
      </section>

      <Portfolio />

      <section id="Contact">
        <Contact />
      </section>
    </>
  );
};

export default App;
