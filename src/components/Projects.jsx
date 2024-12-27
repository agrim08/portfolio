import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <h2 className="text-2xl lg:text-4xl text-center mb-8">Projects</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-3xl "
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div
              className={`absolute inset-0 opacity-0 text-white flex flex-col items-center justify-center
                backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100
            `}
            >
              <h3 className="mb-3 text-xl">{project.name}</h3>
              <p className="mb-12 p-4">{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener norefferer"
                className="rounded-full bg-white text-black hover:bg-gray-300 px-4 py-2"
              >
                <div className="flex items-center">
                  <span>View on GitHub</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
