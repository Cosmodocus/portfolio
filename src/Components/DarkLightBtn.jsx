// DarkLightBtn.jsx
import { LuLightbulb, LuLightbulbOff } from 'react-icons/lu';
import PropTypes from 'prop-types';

const DarkLightBtn = ({ isDarkMode, toggleIsDarkMode, className }) => {
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

DarkLightBtn.propTypes = {
	className: PropTypes.string.isRequired,
	isDarkMode: PropTypes.bool.isRequired,
	toggleIsDarkMode: PropTypes.func.isRequired,
};

export default DarkLightBtn;
