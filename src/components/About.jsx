import about from "../assets/about.jpg";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-10  p-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>

      <div className="flex flex-wrap items-center">
        {/* Left side - Image */}
        <motion.div 
        whileInView={{x: 0, opacity: 1}}
        initial={{x: -100, opacity: 0}}
        transition={{duration: .5}}
        className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img
            className="w-[395px] rounded-2xl shadow-lg"
            src={about}
            alt="About Me"
          />
        </motion.div>

        {/* Right side - Text */}
        <motion.div 
        whileInView={{x: 0, opacity: 1}}
        initial={{x: 100, opacity: 0}}
        transition={{duration: .5}}
        
        className="w-full lg:w-1/2 pt-10 lg:p-8 ">

          <p className="text-lg leading-relaxed text-neutral-300">
            Hi, I’m <span className="font-semibold text-white">Rakib Dhali</span>, 
            a passionate <span className="text-indigo-400">Frontend Developer </span> 
            with a focus on building modern, user-friendly, and responsive web applications. 
            I enjoy turning complex problems into simple, clean, and intuitive designs 
            using <span className="font-semibold">HTML, CSS, JavaScript, React, Tailwind, 
            and Next.js</span>.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            I started my journey in web development out of curiosity, and over 
            time it turned into a strong career goal. Right now, I’m sharpening 
            my skills in <span className="text-indigo-400">Next.js</span> and exploring 
            ways to create fast, scalable, and SEO-friendly websites.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-neutral-300">
            When I’m not coding, I love learning new technologies, solving 
            challenges, and experimenting with side projects that help me grow 
            as a developer. My goal is to <span className="font-semibold">
            secure a role as a web developer</span> where I can contribute, learn, 
            and create meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
