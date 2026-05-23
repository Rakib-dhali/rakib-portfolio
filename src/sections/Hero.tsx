import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import SocialLinks from "@/components/SocialLinks";
import CoolBeansButton from "@/components/CoolBeansButton";

export const HeroSection = () => {
  return (
    <div id="home" className="hero">
      <div className="absolute inset-0 mask-[linear-gradient(to_bottom,black_10%,black_70%,transparent)]">
        <div
          style={{ backgroundImage: `url(${grainImage.src})` }}
          className="grain"
        ></div>
        <div className="circle size-155"></div>
        <div className="circle size-210"></div>
        <div className="circle size-255"></div>
        <div className="circle size-305"></div>

        <HeroOrbit size={430} shouldOrbit orbitDuration="30s" rotation={-14}>
          <SparkleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={440} shouldOrbit orbitDuration="32s" rotation={879}>
          <SparkleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} shouldOrbit orbitDuration="34s" rotation={-41}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={530} shouldOrbit orbitDuration="36s" rotation={178}>
          <SparkleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={550} shouldOrbit orbitDuration="38s" rotation={20}>
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={590} shouldOrbit orbitDuration="40s" rotation={98}>
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} shouldOrbit orbitDuration="42s" rotation={-5}>
          <div className="size-2 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={710} shouldOrbit orbitDuration="44s" rotation={144}>
          <SparkleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} shouldOrbit orbitDuration="46s" rotation={85}>
          <div className="size-3 bg-emerald-300/20 rounded-full"></div>
        </HeroOrbit>
        <HeroOrbit size={800} shouldOrbit orbitDuration="48s" rotation={-72}>
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white tracking-tight">
            Rakibul Hossain
          </h1>

          <h2 className="mt-2 text-xl md:text-2xl text-emerald-400 font-medium">
            Full Stack Developer
          </h2>

          <p className="mt-4 text-white/60 text-base md:text-lg max-w-xl mx-auto">
            Creating responsive and visually polished web experiences with
            modern technologies.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-8 gap-4 md:flex-row md:justify-center ">
        <CoolBeansButton label="projects" href="#projects" />
        <CoolBeansButton label="resume" href="/test.pdf" />
      </div>
      <div className="mt-10 flex items-center justify-center">
        <SocialLinks />
      </div>
    </div>
  );
};
