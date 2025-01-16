import ProjectCard from "../Components/ProjectCard";
import { projects } from "../data/projects";
const Projects = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center container mx-auto px-4 py-32 overflow-hidden">

      <h1 className="md:text-6xl text-4xl font-bold pb-8 text-center">
        Current <span>projects</span> and <span>companies</span> I&apos;m working on
      </h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 gap-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
