import { useState, useEffect } from 'react';
import DarkLightBtn from './DarkLightBtn';
import Hamburger from './Hamburger';
import PropTypes from 'prop-types';

const Navbar = ({ scrollToSection }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        } else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        }
    }, []);

    const toggleIsDarkMode = () => {
        setIsDarkMode(prevMode => {
            const newMode = !prevMode;
            if (newMode) {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('theme', 'light');
            }
            return newMode;
        });
    };

    const handleScrollToSection = (section) => {
        scrollToSection(section);
        setActiveSection(section);
    };

    return (
        <nav
            className={`w-full flex justify-between items-center py-4 px-6 fixed z-10 transition-all duration-300
                ${isDarkMode ? 'navbar-dark text-white shadow-lg' : 'navbar-light text-black shadow-lg'}`}
        >
            <span className='text-4xl font-bold cursor-pointer transition duration-300' onClick={() => handleScrollToSection('home')}>
                RezTech
            </span>
            <ul className='gap-12 md:flex hidden text-lg'>
                <li className={`navbar-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleScrollToSection('home')}>Home</li>
                <li className={`navbar-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleScrollToSection('about')}>About</li>
                <li className={`navbar-item ${activeSection === 'details' ? 'active' : ''}`} onClick={() => handleScrollToSection('details')}>Projects</li>
                <li className={`navbar-item ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={() => handleScrollToSection('testimonials')}>Testimonials</li>
                <li className={`navbar-item ${activeSection === 'cta' ? 'active' : ''}`} onClick={() => handleScrollToSection('cta')}>Contact</li>
            </ul>
            <DarkLightBtn isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} className='md:flex hidden' />
            <Hamburger scrollToSection={scrollToSection} isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
        </nav>
    );
};

Navbar.propTypes = {
    scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
