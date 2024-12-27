import { SOCIAL_MEDIA_LINKS } from '../constants';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <div className="mt-20  p-5 w-full rounded-xl mx-2 md:flex md:justify-between md:items-center">
      <div className="flex flex-col items-start justify-center space-y-2">
        <div className="text-4xl text-white hidden md:flex">AGRIM GUPTA</div>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <a href="#" className="hover:underline">
            AgrimGupta™
          </a>
        </span>
      </div>
      <div className="flex items-center justify-center gap-8 mt-0 xsm:mt-8 md:mt-0">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: index * 0.5 }}
            key={index}
            href={link.href}
            target="blank"
            rel="noopener noreferrer"
            className="hover:scale-[1.2] hover:transition-transform duration-500"
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
