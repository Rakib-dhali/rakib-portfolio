"use client";

import grainImage from "@/assets/images/grain.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";
import { TbRocket } from "react-icons/tb";

gsap.registerPlugin(ScrollTrigger);

interface Experience {
  company: string;
  website: string;
  location: string;
  position: string;
  duration: string;
  type: string;
  description: string[];
  techStack?: string[];
  current?: boolean;
}

const experiences: Experience[] = [
  {
    company: "Leren Leren (LerenLabs.com)",
    website: "https://lerenlabs.com",
    location: "Lisbon / Aveiro, Portugal",
    position: "Full-Stack Developer Intern",
    duration: "August 15, 2026 — Present",
    type: "Remote",
    current: true,
    description: [
      "Building and maintaining full-stack web applications using modern technologies",
      "Collaborating with international teams in a remote-first environment",
      "Contributing to product development from ideation to deployment",
    ],
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  // Add more experiences here
];

export default function ExperienceSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const rocketRef = useRef<HTMLDivElement | null>(null);
  const rocketIconRef = useRef<HTMLDivElement | null>(null);
  const lastDirection = useRef<number>(1);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate section heading
      gsap.fromTo(
        ".exp-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-heading",
            start: "top 88%",
          },
        }
      );

      // Animate experience cards
      gsap.fromTo(
        ".exp-card",
        { opacity: 0, x: -60, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          stagger: 0.25,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".exp-timeline",
            start: "top 80%",
          },
        }
      );

      // Rocket follows scroll along the timeline
      const timeline = timelineRef.current;
      const rocket = rocketRef.current;
      if (timeline && rocket) {
        gsap.to(rocket, {
          y: () => timeline.scrollHeight - 60,
          ease: "none",
          scrollTrigger: {
            trigger: timeline,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1.2,
            onUpdate: (self) => {
              if (self.direction !== lastDirection.current) {
                lastDirection.current = self.direction;
                if (self.direction === 1) {
                  // Scrolling down - face upward
                  gsap.to(rocketIconRef.current, { rotation: 135, duration: 0.4, overwrite: "auto" });
                } else {
                  // Scrolling up - face downward
                  gsap.to(rocketIconRef.current, { rotation: -45, duration: 0.4, overwrite: "auto" });
                }
              }
            }
          },
        });

        // Rocket glow pulse
        gsap.to(".rocket-glow", {
          scale: 1.5,
          opacity: 0.3,
          repeat: -1,
          yoyo: true,
          duration: 1.5,
          ease: "sine.inOut",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 lg:py-28"
    >
      <div className="max-w-5xl mx-auto px-5">
        {/* Section heading */}
        <div className="exp-heading text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-bold uppercase tracking-widest text-sm mb-3">
            <span>Where I&apos;ve Worked</span>
          </div>
          <h2 className="font-calistoga text-3xl md:text-5xl">Experience</h2>
          <p className="text-white/50 mt-3 max-w-lg mx-auto text-sm md:text-base">
            My professional journey and the teams I&apos;ve been part of
          </p>
        </div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="exp-timeline relative"
        >
          {/* Timeline vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/50 via-sky-400/30 to-transparent" />

          {/* Rocket indicator */}
          <div
            ref={rocketRef}
            className="absolute left-6 md:left-8 top-0 -translate-x-1/2 z-20 flex flex-col items-center"
          >
            {/* Glow behind rocket */}
            <div className="rocket-glow absolute size-10 rounded-full bg-emerald-400/20 blur-xl" />
            <div className="relative size-10 rounded-full bg-gray-900 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-400/20">
              <div ref={rocketIconRef} className="flex items-center justify-center" style={{ transform: 'rotate(-45deg)' }}>
                <TbRocket className="size-5 text-emerald-400" />
              </div>
            </div>
            {/* Exhaust trail */}
            <div className="w-px h-8 bg-gradient-to-b from-emerald-400/60 to-transparent" />
          </div>

          {/* Experience cards */}
          <div className="flex flex-col gap-12">
            {experiences.map((exp, index) => (
              <div key={index} className="exp-card relative pl-16 md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-6 -translate-x-1/2 z-10">
                  <div className="relative">
                    <div className="size-3 rounded-full bg-emerald-400" />
                    {exp.current && (
                      <div className="absolute inset-0 size-3 rounded-full bg-emerald-400 animate-ping-large" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-all duration-500 hover:border-emerald-400/20 hover:bg-white/[0.06]">
                  <div
                    className="absolute inset-0 -z-10 opacity-5"
                    style={{
                      backgroundImage: `url(${grainImage.src})`,
                    }}
                  />
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-400/40 to-transparent" />

                  {/* Hover glow */}
                  <div className="absolute -top-20 -right-20 size-40 rounded-full bg-emerald-400/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <div className="p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {exp.current && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-400/15 text-emerald-400 border border-emerald-400/20">
                              <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/5 text-white/50 border border-white/10">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="font-calistoga text-xl md:text-2xl text-white mt-2">
                          {exp.position}
                        </h3>
                        <a
                          href={exp.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-emerald-400/80 hover:text-emerald-300 transition-colors duration-300 text-sm md:text-base font-medium mt-1 group/link"
                        >
                          <HiOutlineBriefcase className="size-4" />
                          {exp.company}
                          <svg
                            className="size-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </a>
                      </div>

                      <div className="flex flex-col items-start sm:items-end gap-1 text-sm text-white/40 shrink-0">
                        <div className="flex items-center gap-1.5">
                          <HiOutlineLocationMarker className="size-3.5" />
                          <span>{exp.location}</span>
                        </div>
                        <span className="text-white/30 text-xs">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-white/50 text-sm md:text-base"
                        >
                          <span className="mt-2 size-1 rounded-full bg-emerald-400/50 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    {exp.techStack && (
                      <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-white/5">
                        {exp.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-lg bg-white/[0.05] border border-white/10 text-white/50 text-xs font-medium hover:text-white/80 hover:border-white/20 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* "More coming" indicator at bottom */}
          <div className="relative pl-16 md:pl-20 mt-12">
            <div className="absolute left-6 md:left-8 top-3 -translate-x-1/2 z-10">
              <div className="size-2 rounded-full bg-white/20 ring-4 ring-white/5" />
            </div>
            <p className="text-white/25 text-sm italic">
              More experiences coming soon...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
