import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "../constants";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="container mx-auto" id="skills" ref={ref}>
      <h2 className="mb-12 mt-20 text-4xl text-center font-semibold font-montserrat">
        Skills
      </h2>
      <div className="flex flex-col mx-2 rounded-3xl lg:px-20 px-4 py-2 border border-stone-50/30">
        {SKILLS.map((skill, index) => (
          <motion.div
            key={index}
            className={`py-6 flex items-center justify-between ${
              index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: "easeOut",
            }}
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 tex-lg lg:text-2xl">{skill.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-lg">
              <span>{skill.experience}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
