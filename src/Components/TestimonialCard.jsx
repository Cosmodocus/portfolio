import PropTypes from 'prop-types';
import { useState } from 'react';

const TestimonialCard = ({ testimonial }) => {
  const { name, profilePicture, title, testimonial: text } = testimonial;
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden mb-6 border border-gray-200">
      <div className="flex items-start p-6">
        <img
          src={profilePicture}
          alt={name}
          className="w-16 h-16 rounded-full border-2 border-gray-300 mr-6"
        />
        <div className="flex-1">
          <h3 className="text-xl font-semibold ">{name}</h3>
          <p className=" mb-4">{title}</p>
          <p className=" leading-relaxed mb-4">
            {isExpanded ? text : (text.length > 150 ? `${text.substring(0, 150)}...` : text)}
          </p>
          {text.length > 150 && (
            <button
              onClick={handleToggle}
              className="text-blue-500 hover:underline">
              {isExpanded ? 'Show less' : 'Read more'}
            </button>
          )}
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
