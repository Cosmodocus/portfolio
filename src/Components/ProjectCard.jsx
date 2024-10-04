import {motion} from "framer-motion";
import {FaGithub} from "react-icons/fa";
import {FaLocationArrow} from "react-icons/fa6";
import ProjectTag from "./ProjectTag";
import PropTypes from "prop-types";

const ProjectCard = ({project, cardVariants, index}) => {
  return (
    <motion.div
      className="mx-2 flex flex-col items-start text-left gap-4 border rounded-lg p-4 shadow-md"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{duration: 0.6, delay: index * 0.1}}
    >
      <img
        className="border-4 rounded-lg w-full h-auto object-cover"
        src={project.image}
        alt={project.title}
      />
      <div className="flex flex-col items-start">
        <h2 className="md:text-4xl text-2xl font-bold mt-4">{project.title}</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {project.ongoingTag && (
            <ProjectTag
              text="In Progress"
              bgColor="bg-teal-400"
              textColor="text-white"
            />
          )}
          {project.newTag && (
            <ProjectTag
              text="Just Launched"
              bgColor="bg-teal-500"
              textColor="text-white"
            />
          )}
          {project.comingSoon && (
            <ProjectTag
              text="Stay Tuned"
              bgColor="bg-teal-600"
              textColor="text-white"
            />
          )}
        </div>
      </div>
      <p className="text-lg text-gray-600">{project.description}</p>
      <div className="mt-2">
        <h3 className="text-xl font-semibold">Skills Used:</h3>
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, i) => (
            <img
              key={i}
              src={skill}
              alt={`skill-${i}`}
              className="w-12 h-12 max-w-[3rem] max-h-[3rem] object-contain bg-white rounded-md p-1 shadow-md"
            />
          ))}
        </div>
      </div>
      {/* GITHUB AND LIVE DEMO BUTTONS */}
      <div className="flex justify-start mt-2 gap-2">
        <button
          className={`border-2 rounded-md py-2 px-4 ${
            project.comingSoon && "cursor-not-allowed opacity-50"
          }`}
          disabled={project.comingSoon}
        >
          <a
            className={`flex items-center gap-2 ${
              project.comingSoon && "text-gray-500"
            }`}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <FaGithub size={20} />
          </a>
        </button>
        <button
          className={`highlight-btn border-2 rounded-md py-2 px-4 ${
            project.comingSoon && "cursor-not-allowed opacity-50"
          }`}
          disabled={project.comingSoon}
        >
          {project.comingSoon ? (
            "Live Demo"
          ) : (
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Live Demo
              <FaLocationArrow
                size={20}
                className="ml-2"
              />
            </a>
          )}
        </button>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    githubLink: PropTypes.string.isRequired,
    liveDemoLink: PropTypes.string.isRequired,
    ongoingTag: PropTypes.bool,
    newTag: PropTypes.bool,
    comingSoon: PropTypes.bool.isRequired,
  }).isRequired,
  cardVariants: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectCard;
