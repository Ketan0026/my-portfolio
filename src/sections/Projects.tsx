import netflixLandingPage from "@/assets/images/netflix-landing-page.png";
import airbnbLandingPage from "@/assets/images/airbnb-landing-page.png";
import ycDirectoryLandingPage from "@/assets/images/yc-directory-landing-page.png";
import GithubIcon from "@/assets/icons/github.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ReduxIcon from "@/assets/icons/redux.svg";
import TailwindIcon from "@/assets/icons/tailwindcss.svg";
import NextIcon from "@/assets/icons/nextjs.svg";
import ExpressIcon from "@/assets/icons/expressjs.svg";
import MongoDBIcon from "@/assets/icons/mongodb.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import CssIcon from "@/assets/icons/css.svg";
import Image from "next/image";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import TechIcon from "@/components/TechIcon";

const portfolioProjects = [
  {
    company: "YC Directory",
    year: "2025",
    description:
      "YC Directory is a platform that showcases startups, offering intuitive search and dynamic filtering for effortless discovery.",
    techStack: [
      { title: "NextJS", icon: NextIcon },
      { title: "Tailwind CSS", icon: TailwindIcon },
      { title: "ReactJS", icon: ReactIcon },
      { title: "TypeScript", icon: TypeScriptIcon },
    ],
    link: "https://yc-directory-five-nu.vercel.app/",
    github: "https://github.com/Ketan0026/yc_directory",
    image: ycDirectoryLandingPage,
  },
  {
    company: "Airbnb Clone",
    year: "2024",
    description:
      "An Airbnb clone offering a dynamic booking experience with detailed property listings, interactive maps, and a user-friendly interface.",
    techStack: [
      { title: "ReactJS", icon: ReactIcon },
      { title: "MongoDB", icon: MongoDBIcon },
      { title: "Express.js", icon: ExpressIcon },
      { title: "Tailwind", icon: TailwindIcon },
    ],
    link: "https://airbnb-ten-tawny.vercel.app/",
    github: "https://github.com/Ketan0026/Airbnb",
    image: airbnbLandingPage,
  },
  {
    company: "Netflix Clone",
    year: "2024",
    description:
      "A Netflix clone with a cinematic experience, offering free trailers and premium access to movies and series.",
    techStack: [
      { title: "ReactJS", icon: ReactIcon },
      { title: "Redux", icon: ReduxIcon },
      { title: "CSS3", icon: CssIcon },
    ],
    link: "https://netflix-dun-one.vercel.app/",
    github: "https://github.com/Ketan0026/netflix-clone",
    image: netflixLandingPage,
  },
];

const Projects = () => {
  return (
    <section id="project" className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Real-world Results"
          title="Featured Projects"
          description="See how I transformed concepts into engaging digital experiences."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.company}
              className="px-6 sm:px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="sm:text-lg bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-transparent bg-clip-text">
                    <span className="text-nowrap">{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-poppins text-white/50 md:text-xl mt-4 md:mt-5 ">
                    {project.description}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-wrap gap-2 md:gap-4 mt-4 md:mt-5">
                    {project.techStack.map((result) => (
                      <li
                        key={result.title}
                        className="flex items-center gap-2 w-min text-xs sm:text-sm md:text-base text-white/50 border border-white/20 rounded-lg py-2 px-3 md:px-4"
                      >
                        <TechIcon component={result.icon} sizeSmall={true} />
                        <span className="text-nowrap">{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-4 mt-8">
                    <a href={project.link} target="_blank">
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
                      <span className="sm:hidden">Live Site</span>
                      <span className="hidden sm:inline">View Live Site</span>
                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </a>
                    <a href={project.github} target="_blank">
                      <GithubIcon className="size-12" />
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.company}
                    className="border-2 rounded-xl border-white/20 border-b-0 rounded-b-none mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;