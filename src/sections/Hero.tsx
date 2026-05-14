import memojiImage from "@/assets/images/memoji-computer.png";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import SparkleIcon from "@/assets/icons/sparkle.svg";
import HeroOrbit from "@/components/HeroOrbit";
import { SocialIcons } from "@/components/SocialIcons";

export const HeroSection = () => {
  return (
    <div className="hero">
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
        <HeroOrbit size={800} shouldOrbit orbitDuration="48s" rotation={-72} >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col items-center ">
          <Image src={memojiImage} className="size-25" alt="memoji" />
          <div className="bg-gray-950 border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg ">
            <div className="bg-green-300 size-2.5 relative rounded-full shadow-2xl shadow-green-300">
              <div className="bg-green-300 size-2.5 animate-ping rounded-full shadow-2xl shadow-green-300 animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">available for new project</div>
          </div>
        </div>
        <div className="max-w-lg mx-auto font-">
          <h1 className="text-3xl md:text-5xl font-calistoga text-center mt-8 tracking-wide">
            Building exceptional user experiences
          </h1>
          <p className="mt-4 text-center text-white md:text-lg ">
            i specialized in transforming complex ideas into beautiful
            experiences
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center mt-8 gap-4 md:flex-row md:justify-center ">
        <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl ">
          <span className="font-semibold">explore my work</span>
          <ArrowDown className="size-4" />
        </button>
        <button className="inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
          <span className="font-semibold ">explore my work</span>
        </button>
      </div>
      <div className="mt-10 flex items-center justify-center">
        <SocialIcons />
      </div>
    </div>
  );
};
