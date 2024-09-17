import PropTypes from 'prop-types';

const ProjectTag = ({ text, bgColor, textColor }) => {
  return (
    <span
      className={`text-sm font-semibold px-2 py-1 rounded-lg ${bgColor} ${textColor}`}
    >
      {text}
    </span>
  );
};

ProjectTag.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  textColor: PropTypes.string.isRequired,
};
export default ProjectTag;
