import { projects } from "../constants";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <section className="border-b border-neutral-800 pb-8">
      <h1 className="my-20 text-center text-4xl font-bold">Projects</h1>
      <div className="space-y-16">
        {projects.map((project, index) => (
          <article 
            key={index}
            className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-start lg:text-left"
          >
            {/* Image on the left (centered on mobile) */}
            <div  className="w-full lg:w-1/2 flex justify-center">
              <a href={project.link}><motion.img whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}}
                className="mb-6 rounded"
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
              /></a>
            </div>

            {/* Content on the right (centered on mobile) */}
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}}
            className="w-full lg:w-1/2 max-w-xl">
              <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                {project.technology.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-purple-200 px-3 py-1 text-sm font-medium text-purple-900"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
