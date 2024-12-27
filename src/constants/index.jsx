import { FaXTwitter, FaGithub, FaLinkedin } from 'react-icons/fa6';
import { FaGitAlt } from 'react-icons/fa6';
import { SiLeetcode } from 'react-icons/si';
import { SiPostman } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa';
import { IoLogoFirebase } from 'react-icons/io5';
import { SiJupyter, SiRedux } from 'react-icons/si';

import projectImage1 from '../assets/project1.jpeg';
import projectImage2 from '../assets/project2.jpeg';
import projectImage3 from '../assets/project3.jpeg';
import projectImage4 from '../assets/project4.jpeg';
import projectImage5 from '../assets/project5.jpeg';
import projectImage6 from '../assets/project6.jpeg';

import broswer from '../assets/broswer.png';
import quantumComputer from '../assets/Quantum_Computing.png';

import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { SiFlask } from 'react-icons/si';
import { FaMedium } from 'react-icons/fa';
import { SiOpenai } from 'react-icons/si';

export const NAVIGATION_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Bio', href: '#bio' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work Experience', href: '#work' },
  { label: 'Blogs', href: '#blog' },
  { label: "Let's Talk", href: '#contact' },
];

export const HERO = {
  name: 'AGRIM GUPTA',
  greet: 'Hello there! 👋🏻',
  description:
    'I am a dedicated full-stack developer who enjoys developing intuitive and visually attractive user interfaces. I take great satisfaction in turning ideas into seamless and impactful web applications.',
};

export const PROJECTS = [
  {
    id: 1,
    name: 'Chatty',
    description: (
      <>
        A real-time <b className="text-lg">chat application</b> built using{' '}
        <b className="text-lg">MERN Stack</b>, featuring instant messaging, user
        authentication, and seamless communication with a responsive interface.
      </>
    ),
    image: projectImage2,
    githubLink: 'https://github.com/agrim08/MERNChatApp',
    Link: 'https://chatapp-hyrs.onrender.com/',
  },
  {
    id: 2,
    name: 'Cool Dudes',
    description: (
      <>
        A full-stack <b className="text-lg">friend list management</b>{' '}
        application built with <b className="text-lg">React and Flask</b>.
        Featuring <b className="text-lg">dark and light modes</b>, and allowing
        users to perform multiple actions on their friend lists.
      </>
    ),
    image: projectImage3,
    githubLink: 'https://github.com/agrim08/Cool-Dudes',
    Link: 'https://cool-dudes.onrender.com/',
  },

  {
    id: 3,
    name: 'Dev Mate',
    description: (
      <>
        A collaborative platform built with the
        <b className="text-lg"> MERN stack</b>, enabling developers to connect,
        network, and collaborate on projects through an intuitive and engaging
        interface.
      </>
    ),
    image: projectImage5,
    githubLink: 'https://github.com/agrim08/DevMate',
    Link: 'https://github.com/agrim08/DevMate',
  },
  {
    id: 4,
    name: 'Netflix GPT',
    description: (
      <>
        A GPT-powered recommendation system developed using{' '}
        <b className="text-lg">Gemini APIs and Firebase</b>, offering
        personalized movie suggestions with an interactive user interface.
      </>
    ),
    image: projectImage4,
    githubLink: 'https://github.com/agrim08/netflix-gpt',
    Link: 'https://myreactapp-b3755.web.app/',
  },
  {
    id: 5,
    name: 'Food Mania',
    description: (
      <>
        A Swiggy clone built with{' '}
        <b className="text-lg">React and Tailwind CSS</b>, seamlessly
        integrating the Swiggy API to deliver a dynamic food delivery platform
        with real-time restaurant and menu data.
      </>
    ),
    image: projectImage1,
    githubLink: 'https://github.com/agrim08/React-JS',
    Link: 'https://food-mania-603ac.web.app/',
  },
  {
    id: 6,
    name: 'YouTube clone',
    description: (
      <>
        A dynamic YouTube clone built with{' '}
        <b className="text-lg">React and Tailwind</b>, featuring video
        streaming, search functionality, and seamless user experience powered by
        the YouTube API.
      </>
    ),
    image: projectImage6,
    githubLink: 'https://github.com/agrim08/youtube-clone',
    Link: 'https://myyt-clone-84ca5.web.app/',
  },
];

export const BIO = [
  <>
    I am <b>Agrim Gupta</b>, a <b>full-stack web developer</b> passionate about
    building <b>dynamic, scalable web applications</b>.
  </>,
  <>
    With expertise in <b>React and Next.js</b>, I create responsive,
    high-performance front-end interfaces, while on the back end, I work with{' '}
    <b>Node.js, Python, and Firebase</b> to develop robust APIs and server-side
    solutions.
  </>,
  <>
    I’ve built and deployed <b>multiple projects</b> using these technologies,
    from <b>single-page apps to complex web applications</b>, always focusing on
    clean code and performance optimization. I believe in continuous learning,
    constantly upgrading my skills to stay ahead of industry trends. As a{' '}
    <b>strong team player</b>, I thrive in collaborative environments, always
    eager to contribute and learn from others.
  </>,
  <>
    In addition to web development, I have a growing interest in{' '}
    <b>Machine Learning (ML) and Artificial Intelligence (AI)</b>, and I'm
    excited to explore how these fields can integrate with web technologies.
  </>,
  `Let’s connect and see how we can work together to bring your projects to life with the latest web technologies!`,
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-3xl text-cyan-400 lg:text-4xl" />,
    name: 'React',
    experience: '2+ years',
  },
  {
    icon: <SiRedux className="text-3xl text-[#7749bd] lg:text-4xl" />,
    name: 'Redux',
    experience: '1+ years',
  },
  {
    icon: <SiExpress className="tex3-4xl text-white lg:text-4xl" />,
    name: 'Express.js',
    experience: '1+ year',
  },
  {
    icon: <SiMongodb className="text-3xl text-green-600 lg:text-4xl" />,
    name: 'MongoDB',
    experience: '1.5+ years',
  },

  {
    icon: <FaNodeJs className="text-3xl text-green-600 lg:text-4xl" />,
    name: 'Node.js',
    experience: '1.5+ years',
  },

  {
    icon: <TbBrandNextjs className="text-3xl text-sky-700 lg:text-4xl" />,
    name: 'Next.js',
    experience: '1+ year',
  },
  {
    icon: <SiFlask className="text-3xl text-white lg:text-4xl" />,
    name: 'Flask',
    experience: '1+ year',
  },
];

export const BLOGS = [
  {
    title: 'Node.js JIT Compilation',
    href: 'https://medium.com/@agrimgupta0805/node-js-v8-engine-architecture-jit-compilation-b68bc0e1129a',
    image:
      'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F4anecy5mdl4pho8w7519.jpg',
    description:
      'JIT compilation in Node.js uses the V8 engine to dynamically compile JavaScript code into machine code during runtime, enhancing execution speed. It optimizes performance by analyzing frequently executed code paths and applying runtime-specific optimizations.',
  },
  {
    title: 'Browser Inner Wokring',
    href: 'https://medium.com/@agrimgupta0805/inside-the-browser-how-it-all-works-behind-the-scenes-283d6dbed1f7',
    image: broswer,
    description:
      'Browsers parse HTML, CSS, and JavaScript to build the DOM and render pages, using a rendering engine for display and managing network requests and scripts.',
  },
  {
    title: 'Quantum Computing Introduction',
    href: 'https://medium.com/@agrimgupta0805/quantum-computing-cd60211c7845',
    image: quantumComputer,
    description:
      'Quantum computers use qubits to perform computations, leveraging superposition and entanglement to solve complex problems faster than classical computers.',
  },
];

export const TOOLS = [
  {
    id: 1,
    title: 'Git',
    icon: <FaGitAlt className="" />,
  },
  {
    id: 2,
    title: 'Postman',
    icon: <SiPostman className="" />,
  },
  {
    id: 3,
    title: 'Figma',
    icon: <FaFigma className="" />,
  },
  {
    id: 4,
    title: 'Firebase',
    icon: <IoLogoFirebase className="" />,
  },
  {
    id: 5,
    title: 'Jupyter Notebook',
    icon: <SiJupyter className="" />,
  },
  {
    id: 6,
    title: 'Chat GPT',
    icon: <SiOpenai className="" />,
  },
];

export const EXPERIENCES = [
  {
    title: 'Full Stack Developer Intern',
    company: 'ByteEdu',
    duration: 'November 2024 - Present',
    description:
      'As a Full Stack Developer Intern at ByteEdu, I am responsible for designing and implementing end-to-end web applications. I work with modern technologies like React, Node.js, and Firebase to build scalable and efficient solutions. Collaborating with a dynamic team, I contribute to developing user-friendly interfaces and robust back-end functionalities, gaining practical experience in deploying production-grade applications.',
  },
  {
    title: 'Web Developer',
    company: 'Electrino Club, JSS Academy of Technical Education',
    duration: '2023 - 2024',
    description:
      "During my tenure as a Web Developer for the Electrino Club, I contributed to creating and maintaining the club's digital presence. I utilized HTML, CSS, JavaScript, and React to develop engaging web pages and streamline information sharing among club members. I also worked on integrating responsive design principles to ensure accessibility across devices.",
  },
  {
    title: 'Participant',
    company: 'Smart India Hackathon (SIH) 2023',
    duration: '2023',
    description:
      'As a participant in the prestigious Smart India Hackathon 2023, I collaborated with a team to tackle real-world challenges through innovative solutions. My role involved brainstorming ideas, designing prototypes, and developing functional web-based applications using my technical expertise. This experience enhanced my problem-solving skills and teamwork abilities.',
  },
];

export const EDUCATION = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'JSS Academy of Technical Education, Noida',
    duration: '2023 - 2027',
    description:
      'Currently pursuing a B.Tech in Computer Science, focusing on full-stack development, algorithms, data structures, software engineering, and honing problem-solving and programming skills through various tech projects.',
  },
  {
    degree: '12th Standard',
    institution: "St. Paul's Senior Secondary School, Rampur, UP, India",
    duration: '2022 - 2023',
    description:
      'Completed 12th grade with a focus on Science, securing a top 3 district-level rank with 94%, and developed an early interest in technology, leading to a career in computer science and software development.',
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: 'https://www.linkedin.com/in/agrim-gupta08/x',
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: 'https://github.com/agrim08',
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: 'https://medium.com/@agrimgupta0805',
    icon: <FaMedium fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: 'https://leetcode.com/u/kjCG65pzh9/',
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: 'https://x.com/AgrimGupta0805',
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];
