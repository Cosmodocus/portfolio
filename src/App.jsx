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
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const detailsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const ctaRef = useRef(null);

  // Function to scroll to specific section
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

      {/* Home Section */}
      <motion.div
        ref={homeRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Home />
      </motion.div>

      {/* About Section */}
      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <About />
      </motion.div>

      {/* Expertise Section */}
      <motion.div
        ref={expertiseRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Expertise />
      </motion.div>

      {/* Details Section */}
      <motion.div
        ref={detailsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Details />
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        ref={testimonialsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      {/* CTA Section */}
      <motion.div
        ref={ctaRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <CTA />
      </motion.div>

      <Footer />
    </div>
  );
};

export default App;
