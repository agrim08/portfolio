import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <section className="pt-20" id="work">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-semibold tracking-tighter"
      >
        Work Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="space-y-8 p-10"
      >
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="rounded-lg border border-stone-50/30 bg-white/10 p-4"
          >
            <h3 className="text-2xl font-semibold">{exp.title}</h3>
            <p className="text-xl">{exp.company}</p>
            <p className="text-sm text-stone-300">{exp.duration}</p>
            <p className="mt-2 text-base">{exp.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
