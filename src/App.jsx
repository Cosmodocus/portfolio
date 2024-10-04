import { useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Testimonials from "./Pages/Testimonials";
import Expertise from "./Components/Expertise";
import Projects from "./Pages/Projects";
import Contacts from "./Components/Contacts";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const expertiseRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const contactsRef = useRef(null);

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
      case "projects":
        projectsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "testimonials":
        testimonialsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "contacts":
        contactsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <Navbar scrollToSection={scrollToSection} />
      </div>

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
        ref={projectsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Projects />
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
        ref={contactsRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
          <Contacts />
      </motion.div>

      <Footer />
    </div>
  );
};

export default App;
