import { SKILLS } from "../constants";

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-4xl text-center font-semibold font-montserrat">
        Skills
      </h2>
      <div className="flex flex-col mx-2 rounded-3xl lg:px-20 px-4 py-2 border border-stone-50/30">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className={`py-6 flex items-center justify-between ${
              index !== SKILLS.length - 1 ? "border-b border-stone-50/30" : ""
            }`}
          >
            <div className="flex items-center">
              {skill.icon}
              <h3 className="px-6 tex-lg lg:text-2xl">{skill.name}</h3>
            </div>
            <div className="text-md font-semibold lg:text-lg">
              <span>{skill.experience}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
