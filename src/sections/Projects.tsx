import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";

import Image from "next/image";
import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Github from "@/assets/icons/github.svg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    description:
      "If problem different — tell me: file exist but show browser SVG icon instead of render? That = browser need proper MIME or file serve issue. Explain more.",
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    description:
      "If problem different — tell me: file exist but show browser SVG icon instead of render? That = browser need proper MIME or file serve issue. Explain more.",
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    description:
      "If problem different — tell me: file exist but show browser SVG icon instead of render? That = browser need proper MIME or file serve issue. Explain more.",
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: darkSaasLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24 ">
      <div className="container px-5 mx-auto lg:max-w-5xl">
        <h2 className="font-calistoga text-3xl md:5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl max-w-md mx-auto">
          Project I have built now on
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2  after:-outline-offset-2 after:rounded-3xl after:outline-white/20
              px-8 pt-8 md:pt-12 lg:pt-16 lg:px-20 md:px-10 after:pointer-events-none sticky top-20" style={{
                top: `calc(64px + ${i * 64}px)`
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-linear-to-r from-emerald-300 to-sky-400 inline-flex font-bold uppercase tracking-widest text-sm gap-2 text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-calistoga text-2xl md:text-4xl mt-2 md:mt-4">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="text-sm md:text-base  text-white/50 mt-4 md:mt-5">
                    {project.description}
                  </p>
                  <div className="flex w-full gap-4">
                    <a
                      href={project.link}
                      className="flex-1 sm:hover:flex-[1.2] transition-all duration-300 ease-in-out"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        {" "}
                        View Live <ArrowRightUp className="hidden md:block" />
                      </button>
                    </a>
                    <a
                      href={project.link}
                      className="flex-1 sm:hover:flex-[1.2] transition-all duration-500 ease-in-out"
                    >
                      <button className="bg-white text-gray-950 h-12 w-full  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        Github <Github className="size-5 hidden md:block" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
