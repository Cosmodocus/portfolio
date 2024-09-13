import  { useState } from 'react';
import { LuLightbulb, LuLightbulbOff } from 'react-icons/lu';

const DarkLightBtn = ({ className }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleIsDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (!isDarkMode) {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
			document.querySelectorAll('nav').forEach((nav) => {
				nav.classList.add('navbar-dark');
				nav.classList.remove('navbar-light');
			});
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			document.querySelectorAll('nav').forEach((nav) => {
				nav.classList.remove('navbar-dark');
				nav.classList.add('navbar-light');
			});
			localStorage.setItem('theme', 'light');
		}
	};

	return (
		<div>
			<button
				className={`px-4 py-2 rounded-full border-4 ${className}`}
				onClick={toggleIsDarkMode}
			>
				{isDarkMode ? <LuLightbulb size={30} /> : <LuLightbulbOff size={30} />}
			</button>
		</div>
	);
};

export default DarkLightBtn;
