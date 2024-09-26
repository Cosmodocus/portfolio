import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Details from "./Pages/Details";
import CTA from "./Pages/CTA";
import Footer from "./Components/Footer";
import Testimonials from "./Pages/Testimonials";
import Expertise from "./Components/Expertise";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const detailsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);


  const scrollToSection = (section) => {
    switch (section) {
      case "home":
        homeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "expertise":
        expertiseRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "details":
        detailsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonials":
        testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "cta":
        ctaRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} />

      <motion.div
        ref={homeRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Home scrollToSection={scrollToSection} />
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>

      <motion.div
        ref={expertiseRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Expertise />
      </motion.div>

      <motion.div
        ref={detailsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Details />
      </motion.div>

      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Testimonials />
      </motion.div>

      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <CTA />
      </motion.div>

      <Footer />
    </div>
  );
};

export default App;
