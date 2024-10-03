import PropTypes from 'prop-types';

const ProjectTag = ({ text, bgColor, textColor }) => {
  return (
    <h1
      className={`text-sm font-bold uppercase px-3 py-1 rounded-full ${bgColor} ${textColor} shadow-md hover:shadow-lg transition-all duration-200`}
    >
      {text}
    </h1>
  );
};

ProjectTag.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};

export default ProjectTag;
