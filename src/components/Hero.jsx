import { HERO } from "../constants";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center pt-[65px] font-roboto">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2"
      >
        <h1 className="text-4xl font-bold md:text-5xl lg:text-[7rem] my-8 p-2 pl-8">
          {HERO.name}
        </h1>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl pl-8">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl pl-8 text-justify">{HERO.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 lg:p-8"
      >
        <div className="flex justify-center">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            src="https://binaryblogger.com/wp-content/uploads/2022/11/cyber-security-tips-for-developer.jpg"
            alt="hero_img"
            width={600}
            height={600}
            className="rounded-xl"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
