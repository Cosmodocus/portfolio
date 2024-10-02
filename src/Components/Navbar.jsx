// Navbar.jsx
import { useState, useEffect } from 'react';
import DarkLightBtn from './DarkLightBtn';
import Hamburger from './Hamburger';
import PropTypes from 'prop-types';

const Navbar = ({ scrollToSection }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

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

	return (
		<nav
			className={`w-full flex justify-between items-center py-4 px-6 fixed z-10 transition-all duration-300
				${isDarkMode ? 'navbar-dark text-white shadow-lg' : 'navbar-light text-black shadow-lg'}`}
		>
			<span className='text-4xl font-bold cursor-pointer hover:text-cyan-500 transition duration-300' onClick={() => scrollToSection('home')}>
				RezTech
			</span>
			<ul className='gap-12 md:flex hidden text-lg'>
				<li className='navbar-item' onClick={() => scrollToSection('home')}>Home</li>
				<li className='navbar-item' onClick={() => scrollToSection('about')}>About</li>
				<li className='navbar-item' onClick={() => scrollToSection('details')}>Projects</li>
				<li className='navbar-item' onClick={() => scrollToSection('testimonials')}>Testimonials</li>
				<li className='navbar-item' onClick={() => scrollToSection('cta')}>Contact</li>
			</ul>
			<DarkLightBtn isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} className='md:flex hidden' />
			<Hamburger scrollToSection={scrollToSection} isDarkMode={isDarkMode} toggleIsDarkMode={toggleIsDarkMode} />
		</nav>
	);
};

Navbar.propTypes = {
	scrollToSection: PropTypes.func.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
	toggleIsDarkMode: PropTypes.func.isRequired
};

export default Navbar;
