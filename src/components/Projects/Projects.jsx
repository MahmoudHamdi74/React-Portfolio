import React from "react";
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from '../../hooks/useTranslation';
import projectsDict from '../../content/projects/projects.content';
import netFilm from "../../assets/images/netfilm.png";
import itihub from "../../assets/images/itihub.png";
import portfolio from "../../assets/images/portfolio.png";
import playblocks from "../../assets/images/playblocks.png";
import chat from "../../assets/images/chat.png";

const Projects_Data = [
  {
    id: 1,
    title: "Net Films",
    image: netFilm,
    description:
      "Net Films is a modern movie web application featuring a responsive design and optimized performance, built to provide users with an intuitive and enjoyable browsing experience.",
    technologies: ["React", "Tailwind CSS", "TMDB API"],
    liveUrl: "https://net-films.netlify.app/",
    githubUrl: "https://github.com/MahmoudHamdi74/NetFilm",
  },
  {
    id: 2,
    title: "ITI HUB",
    image: itihub,
    description:
      "ITI HUB is a social media platform designed for ITI students, providing a space for them to connect, share resources, and collaborate on projects. It features user profiles, a news feed, and a messaging system to foster communication and community building among ITI students.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
    ],
    liveUrl: "https://itihub.vercel.app/",
    githubUrl: "https://github.com/Ehabw57/iti-hub",
  },
  {
    id: 3,
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies to provide an engaging and responsive user experience.",
    technologies: [
      "React",
      "Tailwind CSS"
    ],
    liveUrl: "https://mahmoud-hamdi-portfolio.netlify.app/",
    githubUrl: "https://github.com/MahmoudHamdi74/React-Portfolio",
  },
  {
    id: 4,
    title: "Play Blocks",
    image: playblocks,
    description:
      "Play Blocks is a website built with HTML, CSS, and JavaScript, featuring a responsive design and interactive user interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://play-blocks.netlify.app/",
    githubUrl: "https://github.com/Ehabw57/playblocks",
  },
  {
    id: 5,
    title: "Real Time Chat",
    image: chat,
    description:
      "A real-time chat application built with Node.js, Express, and Socket.io, allowing users to communicate instantly through a web interface.",
    technologies: ["HTML", "CSS","Express", "Node.js",  "Socket.io"],
    liveUrl: "https://mahmoudhamdi74.github.io/chat-app/",
    githubUrl: "https://github.com/MahmoudHamdi74/chat-app",
  },
];

const ProjectCard = ({ project, content }) => {
  return (
    <div
      className="bg-gray-50 ring-1 ring-amber-200/80 dark:ring-purple-800/60 hover:ring-amber-300 dark:hover:ring-purple-700/60 hover:shadow-lg hover:shadow-amber-200/40 dark:hover:shadow-purple-900/40 hover:scale-102 dark:bg-gray-900/50 rounded-lg shadow-sm shadow-amber-100/50 dark:shadow-purple-900/30 p-6 flex flex-col items-center text-center transition-all duration-300 cursor-pointer"
    >
      <div className="relevent h-48 overflow-hidden bg-gray-300 dark:bg-gray-700 rounded-xl">
        <img
          src={project.image}
          alt={`Screenshot of ${project.title} project`}
          width={600}
          height={300}
          loading="lazy"
          className="w-full h-full transition-transform duration-500 group-hover:scale-110 rounded-xl"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-700 dark:text-neutral-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium bg-amber-100 dark:bg-purple-900/40 text-amber-700 dark:text-purple-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs font-medium bg-amber-200/60 dark:bg-gray-700/60 text-amber-700 dark:text-gray-400 px-3 py-1 rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-amber-500 dark:bg-purple-600/80 hover:bg-amber-600 dark:hover:bg-purple-500 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300 shadow-sm shadow-amber-200 dark:shadow-purple-900/30"
          >
            <FaExternalLinkAlt className="text-sm" /> <span> {content.liveDemo}</span>
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-gray-600 dark:bg-gray-700/30 hover:bg-gray-700 dark:hover:bg-gray-600/50 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300"
          >
           <FaGithub className="text-sm" /> <span> {content.viewGithub}</span>
          </a>
        </div>
      </div>
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-purple-700 blur-xl -z-10" />
    </div>
  );
};

const Projects = () => {
  const content = useTranslation(projectsDict);

  return (
    <section id="projects" aria-label="Featured Projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700 mb-4">
           <span aria-hidden="true">🚀</span> {content.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects_Data.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} content={content} />
          ))}
        </div>
        <div className="text-center mt-12">
        <a
          href="https://github.com/MahmoudHamdi74?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-amber-500 dark:bg-purple-700 hover:bg-amber-600 dark:hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 shadow-md shadow-amber-200/50 hover:shadow-lg hover:shadow-amber-300/60 dark:shadow-purple-900/40 dark:hover:shadow-purple-800/50"
        >
          <FaGithub className="text-xl" /> <span>{content.viewMore}</span>
        </a>
        </div>
      </div>
    </section>
  )
};

export default Projects;
