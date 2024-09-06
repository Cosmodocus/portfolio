import  { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkLightBtn from './DarkLightBtn';
import Hamburger from './Hamburger';

const Navbar = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleIsDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<nav
			className={
				isDarkMode
					? 'navbar-dark w-full flex justify-between px-8 items-center py-4  text-text shadow-md fixed'
					: 'navbar-light w-full flex justify-between px-8 items-center py-4 text-text shadow-md fixed'
			}
		>
			<h1 className='text-3xl font-bold text-[#1fc6c6]'>RezTech</h1>
			<ul className=' gap-8 md:flex hidden'>
				<li >
					<Link to='/'>Home</Link>
				</li>
				<li >
					<Link to='/details'>Projects</Link>
				</li>
				<li >
					<Link to='/testimonials'>Testimonials</Link>
				</li>
				<li >
					<Link to='/contacts'>Contact</Link>
				</li>

			</ul>
			<DarkLightBtn className='md:flex hidden' />
			<Hamburger />
		</nav>
	);
};

export default Navbar;
