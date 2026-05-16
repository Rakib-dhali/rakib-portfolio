
"use client";

import grainImage from "@/assets/images/grain.jpg"

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const aboutText =` I'm Rakibul — a Full-Stack Developer based in Bangladesh, building for the web with React, Next.js, TypeScript, Node.js, Express, and MongoDB.
My journey started with plain HTML and CSS, but I never stopped. Over the past couple of years I've gone from building simple UIs to architecting full-stack applications with auth systems, REST APIs, database pipelines, and AI integrations.
Some of my recent work includes Klipframe — a SaaS platform for AI-powered YouTube thumbnail generation — and Coursify, a full-featured online learning platform with Google OAuth, email verification, and Framer Motion animations. I don't just follow tutorials; I build things that have real moving parts.
What sets me apart is how I work: I use an AI-first development approach with Cursor daily. This isn't about shortcuts — it's about staying sharp, iterating faster, and writing better code.
I'm actively seeking remote full-stack opportunities . If you're looking for a developer who ships, learns fast, and brings genuine ownership to their work — let's talk.`

export default function AboutSection() {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".word",
        {
          opacity: 0.15,
          y: 50,
          filter: "blur(12px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 60%",
            scrub: 1.5,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative"
    >
      <div className="max-w-5xl mx-auto py-16 pt-12 lg:py-24 lg:pt-20 px-5">
        {/* Top heading */}
        <div className=" flex items-center justify-center">
         
            <h2 className="font-calistoga text-3xl md:5xl text-center mb-10">
          About Me
        </h2>
        </div>

        {/* Main card */}
        <div className=" relative overflow-hidden backdrop-blur-xl p-6 md:p-10 lg:p-14 border-2 border-white/20 rounded-2xl">
          <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
        {/* Animated paragraph */}
          <div className=" z-10">
            <p className="flex flex-wrap text-sm  md:text-lg lg:text-2xl font-normal">
              {aboutText
                .split(" ")
                .map((word, index) => (
                  <span
                    key={index}
                    className="word text-white/60 mr-3 mb-3"
                  >
                    {word}
                  </span>
                ))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
