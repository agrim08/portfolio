import { motion } from 'framer-motion';
import { BLOGS } from '../constants';
import { MdArrowOutward } from 'react-icons/md';

const Blogs = () => {
  return (
    <div className="container mx-auto px-4 py-8" id="blog">
      <h1 className="text-4xl font-bold text-center mb-10">Blogs</h1>
      {BLOGS.map((blog, index) => (
        <motion.div
          key={index}
          className="flex flex-col md:flex-row items-center mb-12"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Image Section */}
          <div className="md:w-1/3 w-full mb-4 md:mb-0">
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-2/3 w-full md:pl-8">
            <h2 className="text-2xl font-bold mb-4">{blog.title}</h2>
            <p className="text-lg mb-4">{blog.description}</p>
            <div className='flex items-center gap-1 cursor-pointer '>
            <a
              href={blog.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium underline hover:no-underline hover:scale-95"
            >
              Read More
            </a>
            <MdArrowOutward className='h-5 w-5 hover:scale-95'/>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Blogs;
