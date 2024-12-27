import { HERO } from "../constants";

const Hero = () => {
  return (
    <section className="flex min-h-screen flex-wrap items-center pt-[85px]">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-[7rem] my-8 p-2">
          {HERO.name}
        </h1>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </div>
      <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <img
            src="https://binaryblogger.com/wp-content/uploads/2022/11/cyber-security-tips-for-developer.jpg"
            alt="hero_img"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
