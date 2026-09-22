import Image from "next/image";
import ArrowRightUp from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import Github from "@/assets/icons/github.svg";
import klipframe from "@/assets/images/klipframe.png";
import trackify from "@/assets/images/trackify.png";
import skillswap from "@/assets/images/skillswap.png";
import whispr from "@/assets/images/whispr.png";


const portfolioProjects = [
  {
    company: "Self Project",
    year: "2025",
    title: "KlipFrame - AI Thumbnail Generator",
    description:
      "AI-powered YouTube thumbnail generator. Describe your vision and let AI bring it to life with FLUX.2-pro model. Generate stunning, click-worthy thumbnails with multiple styles, aspect ratios, and color schemes.",
    repo: "https://github.com/Rakib-dhali/Klipframe",
    live: "https://klipframe.vercel.app",
    image: klipframe,
    techStack: ["React 19", "TypeScript", "Express", "MongoDB", "Silicon Flow API"],
  },
  {
    company: "Self Project",
    year: "2025",
    title: "Trackify - Job Application Tracker",
    description:
      "Comprehensive job application tracking system with visual Kanban pipeline, smart analytics dashboard, and detailed contact management. Organize your job search and track interview stages effortlessly.",
    repo: "https://github.com/Rakib-dhali/Trackify",
    live: "https://tracki-fy.vercel.app/",
    image: trackify,
    techStack: ["Next.js 15", "PostgreSQL", "Prisma", "Better Auth", "Zustand"],
  },
  {
    company: "Self Project",
    year: "2024",
    title: "SkillSwap - Freelance Marketplace",
    description:
      "Modern freelance marketplace connecting clients with skilled freelancers. Features role-based access, task posting, bidding system, Stripe payment integration, and comprehensive admin dashboard.",
    repo: "https://github.com/Rakib-dhali/skillswap-client",
    live: "https://skillswap-client-a10.vercel.app/",
    image: skillswap,
    techStack: ["Next.js","Express", "MongoDB", "Better Auth", "Stripe",],
  },
  {
    company: "Self Project",
    year: "2024",
    title: "Whispr - Real-Time Chat Application",
    description:
      "Ultra-fast real-time web chat with Socket.io, live presence tracking, rich media sharing, and enterprise security. WhatsApp-inspired UI with Arcjet bot protection and transactional email workflows.",
    repo: "https://github.com/Rakib-dhali/whispr",
    live: "https://whispr-7h13.onrender.com/",
    image: whispr,
    techStack: ["React 19", "TypeScript", "Socket.io", "Node.js", "MongoDB","Cloudinary"],
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
              key={project.title}
              className="bg-gray-800 rounded-3xl overflow-hidden z-0 after:z-10 after:content-[''] after:absolute after:inset-0  after:outline-2  after:-outline-offset-2 after:rounded-3xl after:outline-white/20
              px-8 pt-8 md:pt-12 lg:pt-16 lg:px-20 md:px-10 after:pointer-events-none sticky top-20" style={{
                top: '48px',
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
                  <div className="flex flex-wrap gap-2 mt-1 md:mt-2 lg:mt-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-white/10 text-white/50 hover:text-white/80 transition-all duration-300 ease-in-out text-sm font-medium px-4 py-2 rounded-lg mt-4"
                    >
                      {tech}
                    </span>
                  ))}</div>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <p className="text-sm md:text-base  text-white/50 mt-4 md:mt-5">
                    {project.description}
                  </p>
                  <div className="flex w-full gap-4">
                    <a
                      href={project.live}
                      className="flex-1 sm:hover:flex-[1.2] transition-all duration-300 ease-in-out"
                    >
                      <button className="bg-white hover:text-gray-800 hover:bg-white/80 transition-all duration-300 ease-in-out text-gray-950 h-12 w-full px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        View Live <ArrowRightUp className="hidden md:block" />
                      </button>
                    </a>
                    <a
                      href={project.repo}
                      className="flex-1  sm:hover:flex-[1.2] transition-all duration-500 ease-in-out"
                    >
                      <button className="bg-white hover:text-gray-800 hover:bg-white/80 transition-all duration-300 ease-in-out  text-gray-950 h-12 w-full  px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        Github <Github className="size-5 hidden md:block" />
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:mb-0 rounded-[19px] lg:rounded-[25px] md: lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
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
