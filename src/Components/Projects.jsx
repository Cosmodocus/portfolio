import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16 px-2">
      <h1 className="text-4xl font-bold pb-8">Featured Projects</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="mx-2 flex flex-col items-start text-left gap-4 border rounded-lg p-4 shadow-md"
          >
            <img
              className="border-4 rounded-lg w-full h-auto object-cover"
              src={project.image}
              alt={project.title}
            />
            <div className="flex flex-col items-start">
              <h2 className="md:text-4xl text-2xl font-bold mt-4">
                {project.title}
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.mainFocus && (
                  <span className="text-sm bg-blue-500 text-white font-semibold px-2 py-1 rounded-lg">
                    Main Focus
                  </span>
                )}
                {project.comingSoon && (
                  <span className="text-sm bg-yellow-300 text-black font-semibold px-2 py-1 rounded-lg">
                    Coming Soon
                  </span>
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
                    className="w-12 h-12 max-w-[3rem] max-h-[3rem] object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="flex justify-start mt-2 gap-2">
              <button
                className={`border-2 rounded-full py-2 px-4 ${
                  project.comingSoon ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={project.comingSoon}
              >
                <Link
                  className={`flex items-center gap-2 ${
                    project.comingSoon && "text-gray-500"
                  }`}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-disabled={project.comingSoon}
                >
                  <FaGithub size={20} />
                  GitHub
                </Link>
              </button>
              <button
                className={`border-2 rounded-full py-2 px-4 ${
                  project.comingSoon ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={project.comingSoon}
              >
                {project.comingSoon ? (
                  "Live Demo"
                ) : (
                  <Link
                    href={project.liveDemoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </Link>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
