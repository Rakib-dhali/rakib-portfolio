import { motion } from "motion/react";

const container = (delay) => ({
  hidden: { y: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-800 pb-4 ">
      <div className="flex items-center justify-center">
        {/* Left Section */}
        <div className="w-full ">
          <div className="flex flex-col items-center justify-center ">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-12 text-5xl md:text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Rakibul Hossain
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-600 bg-clip-text text-3xl text-transparent tracking-tight"
            >
              Frontend Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light text-center text-balance "
            >
              Junior Frontend Developer creating fast, responsive, and visually
              engaging web experiences with React, Next.js, and Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
