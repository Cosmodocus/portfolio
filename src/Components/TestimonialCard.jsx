import PropTypes from 'prop-types';
import { useState } from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, profilePicture, title, testimonial: text } = testimonial;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden mb-6 bg-white dark:bg-gray-800 p-6 transition duration-300 ease-in-out transform ">
      <div className="flex items-center mb-4">
        <img
          src={profilePicture}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-teal-500 shadow-lg mr-4"
        />
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{name}</h3>
          <p className="text-md text-gray-600 dark:text-gray-300">{title}</p>
        </div>
      </div>
      <p className={`text-gray-700 dark:text-gray-300 ${isExpanded ? '' : 'line-clamp-3'} transition-all duration-300`}>
        {text}
      </p>
      <button
        onClick={handleToggle}
        className="mt-4 text-teal-500 hover:text-teal-700 transition duration-300 focus:outline-none"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    name: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    testimonial: PropTypes.string.isRequired,
  }).isRequired,
};

TestimonialCard.defaultProps = {
  testimonial: {
    name: 'Unknown',
    profilePicture: 'https://via.placeholder.com/150',
    title: 'Unknown',
    testimonial: '',
  },
};

export default TestimonialCard;
