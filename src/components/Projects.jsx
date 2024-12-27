import { MdArrowOutward } from "react-icons/md";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="pt-20 font-roboto" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl text-center mb-12 font-semibold"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 px-6 lg:px-16">
        {PROJECTS.map((project) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id}
            className="relative overflow-hidden rounded-xl shadow-md border border-gray-200 cursor-pointer"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={project.image}
              alt={project.name}
              className="w-full h-64 object-cover transition-transform duration-500"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black/50 bg-opacity-60 p-6 opacity-100 backdrop-blur-lg"
            >
              <h3 className="text-xl lg:text-2xl font-bold mb-4">
                {project.name}
              </h3>
              <p className="text-sm lg:text-base text-center mb-6">
                {project.description}
              </p>
              <div className="flex items-center justify-between space-x-5">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-medium px-4 py-2 rounded-full flex items-center gap-2 transition hover:bg-gray-300"
                >
                  <span>GitHub</span>
                  <MdArrowOutward />
                </a>
                <a
                  href={project.Link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black font-medium px-4 py-2 rounded-full flex items-center gap-2 transition hover:bg-gray-300"
                >
                  <span>Visit</span>
                  <MdArrowOutward />
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
