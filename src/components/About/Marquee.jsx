import Marquee from "react-fast-marquee";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAngular,
  FaBootstrap,
  FaGithub,
  FaNpm,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNestjs, SiExpress } from "react-icons/si";

export default function TechMarquee() {
  return (
    <Marquee
      speed={80}
      gradient={false}
      pauseOnHover
      className="py-6"
    >
      <TechItem react={<FaReact />} name="React" />
      <TechItem angular={<FaAngular />} name="Angular" />
      <TechItem nextjs={<SiNextdotjs />} name="Next.js" />
      <TechItem tailwind={<SiTailwindcss />} name="Tailwind" />
      <TechItem bootstrap={<FaBootstrap />} name="Bootstrap" />
      <TechItem nodejs={<FaNodeJs />} name="Node.js" />
      <TechItem nestjs={<SiNestjs />} name="Nest.js" />
      <TechItem docker={<FaDocker />} name="Docker" />
      <TechItem github={<FaGithub />} name="Github" />
      <TechItem express={<SiExpress />} name="Express" />
      <TechItem npm={<FaNpm />} name="NPM" />
    </Marquee>
  );
}

function TechItem({ react, angular, nextjs, tailwind, bootstrap, nodejs, nestjs, docker, github, express, npm, name }) {
  return (
    <div className="flex items-center mx-8 gap-0.5 text-xl font-semibold">
      <span className="text-blue-500 text-3xl ">{react}</span>
      <span className="text-red-500 text-3xl ">{angular}</span>
      <span className="text-black bg-amber-50 rounded-full text-3xl ">{nextjs}</span>
      <span className="text-blue-500 text-3xl ">{tailwind}</span>
      <span className="text-purple-500 text-3xl ">{bootstrap}</span>
      <span className="text-green-500 text-3xl ">{nodejs}</span>
      <span className="text-red-500 text-3xl ">{nestjs}</span>
      <span className="text-blue-500 text-3xl">{docker}</span>
      <span className="text-black bg-amber-50 rounded-full text-3xl ">{github}</span>
      <span className="text-3xl ">{express}</span>
      <span className="text-red-500 text-3xl ">{npm}</span>
      {name}
      
    </div>
  );
}
