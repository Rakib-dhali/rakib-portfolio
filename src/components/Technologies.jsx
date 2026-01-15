import { RiReactjsLine, RiTailwindCssLine } from "react-icons/ri";
import { SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandFramerMotion, TbBrandNextjs } from "react-icons/tb";
import { motion } from "motion/react";

const iconVariants = (delay) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: 2,        // smooth float speed
      delay,              // stagger start
      ease: "easeInOut",  // natural easing
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});


const techStack = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" /> },
  { icon: <TbBrandNextjs className="text-7xl text-neutral-100" /> },
  { icon: <RiTailwindCssLine className="text-7xl text-cyan-400" /> },
  { icon: <SiRedux className="text-7xl text-violet-600" /> },
  { icon: <TbBrandFramerMotion className="text-7xl text-yellow-300" /> },
  { icon: <SiTypescript className="text-7xl text-blue-600" /> },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-34">
      <motion.h1 whileInView={{opacity: 1, y:0 }} initial={{opacity:0, y: -100}} transition={{duration: 2}} className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div whileInView={{opacity: 1, x:0 }} initial={{opacity:0, x: -100}} transition={{duration: 2, delay: .4}} className="flex flex-wrap justify-center items-center gap-6">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            variants={iconVariants(index * 0.2)} // stagger each icon by 0.2s
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
