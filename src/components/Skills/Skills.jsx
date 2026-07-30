import { useState, useEffect } from 'react';
import {
  FaAngular,
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FcServices } from "react-icons/fc";
import {
  SiClaude,
  SiExpress,
  SiGooglegemini,
  SiHuggingface,
  SiMongodb,
  SiNestjs,
  SiNetlify,
  SiNextdotjs,
  SiOpenai,
  SiTailwindcss,
} from "react-icons/si";
import { useTranslation } from '../../hooks/useTranslation';
import skillsDict from '../../content/skills/skills.content';
import LightHouseScoreCard from './LightHouseScoreCard';

// Skills Data مباشرة في الملف
const SKILLS_DATA = {
  frontend: {
    icon: "🎨",
    skills: [
      { name: "React.js", level: 85, icon: <FaReact className="text-blue-400 text-2xl" />, label: "Expert", years: 3, projects: 15 },
      { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-black bg-amber-50 rounded-full text-2xl" />, label: "Advanced", years: 2, projects: 12 },
      { name: "Angular", level: 70, icon: <FaAngular className="text-red-600 text-2xl" />, label: "Advanced", years: 2, projects: 10 },
      { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-blue-400 text-2xl" />, label: "Expert", years: 2, projects: 20 },
      { name: "Bootstrap", level: 85, icon: <FaBootstrap className="text-purple-600 text-2xl" />, label: "Expert", years: 3, projects: 18 }
    ],
    badges: ["React", "Next", "Angular", "+2 more"]
  },
  backend: {
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 85, icon: <FaNodeJs className="text-green-400" />, label: "Expert", years: 3, projects: 18 },
      { name: "Nest.js", level: 70, icon: <SiNestjs className="text-red-600 text-2xl" />, label: "Intermediate", years: 1, projects: 8 },
      { name: "Express", level: 80, icon: <SiExpress className="text-2xl" />, label: "Advanced", years: 3, projects: 15 }
    ],
    badges: ["Node.js", "Nest.js", "Express"]
  },
  ai: {
    icon: "🤖",
    skills: [
      { name: "OpenAI", level: 85, icon: <SiOpenai className="text-2xl" />, label: "Expert", years: 2, projects: 12 },
      { name: "Gemini", level: 70, icon: <SiGooglegemini className="text-2xl" />, label: "Intermediate", years: 1, projects: 6 },
      { name: "Claude", level: 80, icon: <SiClaude className="bg-orange-400 p-0.5 rounded-full text-2xl" />, label: "Advanced", years: 1, projects: 8 }
    ],
    badges: ["OpenAI", "Gemini", "Claude"]
  },
  cloud: {
    icon: "☁️",
    skills: [
      { name: "MongoDB", level: 85, icon: <SiMongodb className="text-green-400 text-2xl" />, label: "Advanced", years: 3, projects: 16 },
      { name: "Hugging Face", level: 75, icon: <SiHuggingface className="bg-amber-500 fill-black rounded-full text-2xl" />, label: "Advanced", years: 1, projects: 7 },
      { name: "Netlify", level: 80, icon: <SiNetlify className="text-cyan-300 text-2xl" />, label: "Expert", years: 2, projects: 20 },
      { name: "Git & GitHub", level: 85, icon: <FaGithub className="text-black rounded-full bg-amber-50 text-2xl" />, label: "Expert", years: 4, projects: 50 },
      { name: "Docker", level: 65, icon: <FaDocker className="text-blue-500 text-2xl" />, label: "Intermediate", years: 1, projects: 5 }
    ],
    badges: ["MongoDB", "Hugging Face", "Netlify", "+2 more"]
  }
};

// Skill Bar Component
const SkillBar = ({ skill, index, isVisible }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, index]);

  return (
    <div className="group">
      {/* Skill Header */}
      <div className="flex items-center justify-between m-2">
        <h4 className="text-xl font-bold gap-4 flex items-center">
          <span aria-hidden="true">{skill.icon}</span> {skill.name}
          <span className={`text-sm ml-3 ${
            skill.label === 'Expert' ? 'text-amber-600 dark:text-purple-300' :
            skill.label === 'Advanced' ? 'text-amber-500 dark:text-purple-400' :
            'text-amber-400 dark:text-purple-500'
          }`}>
            {skill.label}
          </span>
        </h4>
        <span className="text-sm font-mono" aria-label={`${animatedLevel} percent`}>{animatedLevel}%</span>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-transparent">
        {/* Animated progress bar */}
        <div
          className="absolute top-0 left-0 h-full rounded-full bg-linear-to-r from-amber-400 to-amber-600 dark:from-purple-500 dark:to-cyan-400"
          style={{ width: `${animatedLevel}%` }}
          role="progressbar"
          aria-valuenow={animatedLevel}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-label={`${skill.name} proficiency`}
        />
      </div>

      {/* Skill Details on Hover - اختياري */}
      
    </div>
  );
};

// Category Card Component
const CategoryCard = ({ categoryName, data, isOpen, toggleOpen, content }) => {
  return (
    <details
      open={isOpen}
      onToggle={toggleOpen}
      className="collapse collapse-arrow transition-all duration-500 border border-amber-300 ring-2 ring-amber-300/60 dark:border-purple-700/60 dark:ring-purple-700/40 bg-gray-50 dark:bg-gray-900/40 backdrop-blur-xl hover:scale-102"
    >
      <summary className="collapse-title font-semibold text-2xl block items-center gap-2">
        <span className="text-3xl">{data.icon}</span> {categoryName}
        
        {/* Badges */}
        <div className="m-4 flex items-center gap-2">
          {data.badges.map((badge, idx) => (
            <div key={idx} className="badge badge-lg p-2 bg-amber-500/20 text-amber-800 dark:bg-purple-800/40 dark:text-purple-200">
              {badge}
            </div>
          ))}
        </div>
      </summary>

      {/* Expanded Content */}
      <div className="collapse-content text-sm">
        <div className="w-full bg-amber-200 dark:bg-cyan-400 h-0.5 mb-7" />

        {/* Skills List */}
        <div className="space-y-4">
          {data.skills.map((skill, skillIndex) => (
            <SkillBar
              key={skill.name}
              skill={skill}
              index={skillIndex}
              isVisible={isOpen}
              content={content}
            />
          ))}
        </div>
      </div>
    </details>
  );
};

// Main Component
export default function SkillsVisualization() {
  const [openCategories, setOpenCategories] = useState({});
  const content = useTranslation(skillsDict);

  const QUICK_STATS = [
    { label: content.yearsExperience, value: "1+", icon: "📅" },
    { label: content.projectsBuilt, value: "5+", icon: "🚀" },
    { label: content.technologies, value: "15+", icon: "⚡" },
    { label: content.commits, value: "100+", icon: "💻" }
  ];

  const toggleCategory = (category) => {
    setOpenCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id="skills" aria-label="Skills" className="text-gray-900 dark:text-white transition-colors">
      <div className="pt-10">
        {/* Header */}
        <div>
          <h2 className="flex justify-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700">
            <FcServices className="mr-3" aria-hidden="true" /> {content.title}
          </h2>
          <p className="flex justify-center text-center mt-6 md:mt-10 text-base md:text-lg lg:text-xl max-w-3xl w-full mx-auto px-4 font-medium text-gray-500 dark:text-gray-400">
            {content.description}
          </p>
        </div>

        {/* Skills Grid - First Row */}
        <div className="mx-auto flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-6 mt-10 md:mt-20 max-w-7xl px-4">
          {Object.entries(SKILLS_DATA).slice(0, 2).map(([category, data], index) => (
            <CategoryCard
              key={category}
              category={category}
              categoryName={content.categoryNames[category]}
              data={data}
              index={index}
              isOpen={openCategories[category]}
              toggleOpen={() => toggleCategory(category)}
              content={content}
            />
          ))}
        </div>

        {/* Skills Grid - Second Row */}
        <div className="mx-auto flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-6 mt-6 md:mt-20 max-w-7xl px-4">
          {Object.entries(SKILLS_DATA).slice(2, 4).map(([category, data], index) => (
            <CategoryCard
              key={category}
              category={category}
              categoryName={content.categoryNames[category]}
              data={data}
              index={index + 2}
              isOpen={openCategories[category]}
              toggleOpen={() => toggleCategory(category)}
              content={content}
            />
          ))}
        </div>

        {/* Performance Metrics */}
        <div className="mx-auto mt-10 md:mt-20 max-w-7xl px-4">
          <h2 className="font-bold mb-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-purple-100 dark:drop-shadow-lg dark:drop-shadow-purple-700">
            {content.performanceMetrics}
          </h2>
          <LightHouseScoreCard />
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto px-4">
          {QUICK_STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl transition-all duration-300 bg-amber-50 dark:bg-gray-900/50 border border-amber-200 dark:border-purple-800/50 shadow-sm shadow-amber-100 dark:shadow-purple-900/30 hover:scale-105 hover:-translate-y-1"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}