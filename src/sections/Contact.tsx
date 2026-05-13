
import grainImage from "@/assets/images/grain.jpg";
import { ArrowUpRight } from "lucide-react";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20 px-5">
      <div className="container mx-auto lg:max-w-5xl">
        <div className="bg-linear-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            <div>
          <h2 className="font-calistoga text-2xl md:text-3xl">
            let&#39;s create some thing amazing together
          </h2>
          <p className="text-sm md:text-base mt-2 ">
            Ready to bring your next project to life ? lets connect and discuss
            how i can help you to achieve your goal
          </p>
          </div>
          <div className="shrink-0">
          <button className="text-white bg-gray-900 inline-flex items-center gap-2 px-6 h-12 rounded-xl w-max border border-gray-900">
            <span className="font-semibold">Contact Me</span>
            <ArrowUpRight className="size-6" />
          </button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};
