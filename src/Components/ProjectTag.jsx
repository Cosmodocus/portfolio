import PropTypes from 'prop-types';

const ProjectTag = ({ text, bgColor, textColor }) => {
  return (
    <h1
      className={`text-sm font-bold px-3 py-1 rounded-full ${bgColor} ${textColor} shadow-md glow-effect`}
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
