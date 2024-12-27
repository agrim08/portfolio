import { motion } from "framer-motion";
import { TOOLS } from "../constants";

const Tools = () => {
  return (
    <section className="container mx-auto font-roboto" id="tools">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-10 mt-16 text-4xl text-center font-semibold"
      >
        Tools
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 lg:px-20 "
      >
        {TOOLS.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center justify-center p-6 border rounded-lg border-stone-50/30 hover:shadow-lg cursor-pointer"
          >
            <div className="text-4xl mb-4">{tool.icon}</div>
            <h3 className="text-lg font-medium text-center">{tool.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Tools;
