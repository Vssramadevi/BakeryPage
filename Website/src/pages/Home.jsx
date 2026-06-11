import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  const [device, setDevice] = useState("desktop");

  return (
    <>
      <Navbar setDevice={setDevice} />

      <div className={`preview-frame ${device}`}>
        <Hero />
        <About />
        <Products />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;