import { FaXTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";

import Project1 from "../assets/image.png";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaMedium } from "react-icons/fa";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "AGRIM GUPTA",
  greet: "Hello there! 👋🏻",
  description:
    "I am a dedicated full-stack developer with a passion for crafting intuitive and visually appealing user interfaces. I thrive on turning ideas into seamless and impactful web applications.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Chat-Aplication",
    description:
      "A real-time chat application built using MERN Stack, featuring instant messaging, user authentication, and seamless communication with a sleek and responsive interface.",
    image: projectImage2,
    githubLink: "https://github.com/agrim08/MERNChatApp",
  },
  {
    id: 2,
    name: "Flask App",
    description:
      "A friend list management application built with React and Flask for managing CRUD opearations.",
    image: projectImage3,
    githubLink: "https://github.com/agrim08/Cool-Dudes",
  },

  {
    id: 3,
    name: "Dev Mate",
    description:
      "A collaborative platform built with the MERN stack, enabling developers to connect, network, and collaborate on projects through an intuitive and engaging interface.",
    image: projectImage5,
    githubLink: "https://github.com/agrim08/DevMate",
  },
  {
    id: 4,
    name: "Netflix GPT",
    description:
      "A GPT-powered recommendation system developed using Google Gemini APIs and Firebase, offering personalized movie and show suggestions with an intuitive and interactive user interface.",
    image: projectImage4,
    githubLink: "https://github.com/agrim08/netflix-gpt",
  },
  {
    id: 5,
    name: "YouTube clone",
    description:
      "A dynamic YouTube clone built with React and Tailwind, featuring video streaming, search functionality, and seamless user experience powered by the YouTube API.",
    image: projectImage6,
    githubLink: "https://github.com/agrim08/youtube-clone",
  },
  {
    id: 6,
    name: "Swiggy Clone",
    description:
      "A Swiggy clone built with React and Tailwind CSS, seamlessly integrating the Swiggy API to deliver a dynamic food delivery platform with real-time restaurant and menu data.",
    image: projectImage1,
    githubLink: "https://github.com/agrim08/React-JS",
  },
];

export const BIO = [
  "Agrim Gupta is a dedicated full-stack developer currently pursuing a Bachelor of Technology in Computer Science at JSS Academy of Technical Education, Noida, India. As a second-year student, he has already begun making strides in web development, showcasing his passion for crafting functional and engaging digital experiences.",
  "In 2024, Agrim developed a real-time chat application using the MERN stack, featuring instant messaging, user authentication, and a responsive design. This project demonstrates his commitment to building user-friendly and reliable solutions, highlighting his expertise in modern web technologies and his ability to solve real-world challenges.",
  "As a multi-faceted developer, Agrim has also worked on projects like Netflix GPT, a GPT-powered recommendation platform, and DevTinder, a collaborative network for developers. With proficiency in React, Node.js, and Tailwind, coupled with a growing interest in generative AI, Agrim Gupta continues to refine his skills and contribute to innovative solutions in the tech space.",
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "2+ years",
  },

  {
    icon: <SiExpress className="text-4xl text-white lg:text-5xl" />,
    name: "Express.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl text-green-600 lg:text-5xl" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },

  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "1.5+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiFlask className="text-4xl text-sky-700 lg:text-5xl" />,
    name: "Flask",
    experience: "1+ year",
  },
];

export const EXPERIENCES = [
  {
    title: "Full Stack Developer Intern",
    company: "ByteEdu",
    duration: "November 2024 - Present",
    description:
      "As a Full Stack Developer Intern at ByteEdu, I am responsible for designing and implementing end-to-end web applications. I work with modern technologies like React, Node.js, and Firebase to build scalable and efficient solutions. Collaborating with a dynamic team, I contribute to developing user-friendly interfaces and robust back-end functionalities, gaining practical experience in deploying production-grade applications.",
  },
  {
    title: "Web Developer",
    company: "Electrino Club, JSS Academy of Technical Education",
    duration: "2023 - 2024",
    description:
      "During my tenure as a Web Developer for the Electrino Club, I contributed to creating and maintaining the club's digital presence. I utilized HTML, CSS, JavaScript, and React to develop engaging web pages and streamline information sharing among club members. I also worked on integrating responsive design principles to ensure accessibility across devices.",
  },
  {
    title: "Participant",
    company: "Smart India Hackathon (SIH) 2023",
    duration: "2023",
    description:
      "As a participant in the prestigious Smart India Hackathon 2023, I collaborated with a team to tackle real-world challenges through innovative solutions. My role involved brainstorming ideas, designing prototypes, and developing functional web-based applications using my technical expertise. This experience enhanced my problem-solving skills and teamwork abilities.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "JSS Academy of Technical Education, Noida",
    duration: "2023 - 2027",
    description:
      "Currently pursuing a B.Tech in Computer Science, focusing on full-stack development, algorithms, data structures, and software engineering. Actively involved in various tech projects, exploring modern web development technologies, and honing problem-solving and programming skills.",
  },
  {
    degree: "12th Standard",
    institution: "St. Paul's Senior Secondary School, Rampur, UP, India",
    duration: "2022 - 2023",
    description:
      "Completed 12th grade with a focus on Science, achieving strong academic performance in subjects like Mathematics, Physics, and Computer Science. Secured a place in the top 3 at the district level with 94%. Developed an early interest in technology, which led to pursuing a career in computer science and software development.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/agrim-gupta08",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/agrim08",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://medium.com/@agrimgupta0805",
    icon: <FaMedium fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://leetcode.com/u/kjCG65pzh9/",
    icon: <SiLeetcode fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/AgrimGupta0805",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
];
