import { motion } from 'framer-motion';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <section className="container mx-auto" id="skills">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-10 mt-16 text-4xl text-center font-semibold"
      >
        Skills
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col mx-2 rounded-3xl lg:px-20 px-4  border border-stone-50/30"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className={`h-[84px] flex items-center justify-between ${
              index !== SKILLS.length - 1 ? 'border-b border-stone-50/30' : ''
            }`}
          >
            <div className="flex items-center h-40 w-40 mr-2">
              {skill.icon}
              <h3 className="px-6 text-lg lg:text-xl">{skill.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-lg text-stone-200">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
