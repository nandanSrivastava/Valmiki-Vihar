import { motion } from "framer-motion";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Destinations from "../components/sections/Destinations";
import Packages from "../components/sections/Packages";
import About from "../components/sections/About";
import Testimonials from "../components/sections/Testimonials";
import Gallery from "../components/sections/Gallery";
import FAQ from "../components/sections/FAQ";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <Hero />
        <Destinations />
        <Packages />
        <About />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
