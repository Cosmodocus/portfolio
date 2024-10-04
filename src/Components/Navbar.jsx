import { useState, useEffect } from 'react';
import DarkLightBtn from './DarkLightBtn';
import Hamburger from './Hamburger';
import PropTypes from 'prop-types';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const Navbar = ({ scrollToSection }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [visible, setVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { scrollYProgress } = useScroll();

    useMotionValueEvent(scrollYProgress, "change", (current) => {
        if (typeof current === "number") {
            const previous = scrollYProgress.getPrevious();
            const direction = previous !== undefined ? current - previous : 0;
            setVisible(current >= 0.05 ? direction < 0 : false);
        }
    });

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        setIsDarkMode(theme === 'dark');
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.classList.toggle('light', theme === 'light');
    }, []);

    const toggleIsDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', newMode);
            document.documentElement.classList.toggle('light', !newMode);
            return newMode;
        });
    };

    const handleScrollToSection = (section) => {
        scrollToSection(section);
        setActiveSection(section);
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <AnimatePresence mode="wait">
            <motion.nav
                initial={{ opacity: 1, y: -100 }}
                animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -100 }}
                transition={{ duration: 0.2 }}
                className={`flex md:flex-row justify-between items-center px-4 py-2 fixed top-4 transform -translate-x-1/2
                    ${isDarkMode ? 'navbar-dark text-white' : 'navbar-light text-black'}
                    rounded-lg shadow-lg z-50`}
                style={{ maxWidth: '700px', width: '100%' }}
            >
                {/* Navbar links */}
                <ul className={`flex-col md:flex-row md:flex md:space-x-4 text-lg ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                    {['home', 'about', 'projects', 'testimonials', 'contacts'].map(section => (
                        <li
                            key={section}
                            className={`navbar-item ${activeSection === section ? 'active' : ''} py-2 px-4 cursor-pointer`}
                            onClick={() => handleScrollToSection(section)}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </li>
                    ))}
                </ul>

                {/* Hamburger menu for mobile */}
                <div className="md:hidden flex items-center ml-auto">
                    <Hamburger
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                        scrollToSection={scrollToSection}
                        isDarkMode={isDarkMode}
                        toggleIsDarkMode={toggleIsDarkMode}
                    />
                </div>

                {/* Dark/Light Mode Toggle Button */}
                <div className="md:flex hidden space-x-2">
                    <DarkLightBtn isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
                </div>
            </motion.nav>
        </AnimatePresence>
    );
};

Navbar.propTypes = {
    scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
