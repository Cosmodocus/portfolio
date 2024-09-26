import PropTypes from 'prop-types';

const ProjectTag = ({ text, bgColor, textColor }) => {
  return (
    <h1
      className={`text-sm font-semibold px-2 py-1 rounded-xl ${bgColor} ${textColor}`}
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
