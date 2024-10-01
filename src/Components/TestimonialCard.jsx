import PropTypes from 'prop-types';
import { useState } from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, profilePicture, title, testimonial: text } = testimonial;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-6xl mx-auto shadow-lg rounded-xl overflow-hidden mb-6  bg-opacity-50 bg-black space-x-4">
      <div className="flex items-start p-6 flex-col">
        <img
          src={profilePicture}
          alt={name}
          className="w-20 h-20 rounded-full border-2 border-gray-300 mr-6 mb-2"
        />
        <div className="flex-1">
          <h3 className="text-3xl font-semibold text-custom-white">{name}</h3>
          <p className=" mb-4 text-custom-white text-md">{title}</p>
          <p className="text-lgleading-relaxed mb-4 text-custom-white">
            {text}
          </p>
        </div>
      </div>
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
