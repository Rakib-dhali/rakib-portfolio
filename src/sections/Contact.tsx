"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import grainImage from "@/assets/images/grain.jpg";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type Status = "sending" | "sent" | null;

type FormData = {
  name: string;
  email: string;
  message: string;
};

type ContactItem = {
  icon: React.ElementType;
  label: string;
  href: string | null;
};

const contactItems: ContactItem[] = [
  {
    icon: Mail,
    label: "rakibul.dev@proton.me",
    href: "mailto:rakibul.dev@proton.me",
  },
  {
    icon: Phone,
    label: "+880 1707683039",
    href: "tel:+880 1707683039",
  },
  {
    icon: MapPin,
    label: "Madaripur, Dhaka, Bangladesh",
    href: "https://maps.app.goo.gl/jsua7dEqBUPWDEH4A",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // TODO: wire up to your preferred email service (Resend, EmailJS, etc.)
    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 3000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20 px-5">
      <div className="container mx-auto lg:max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden border border-white/10 relative">

          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none z-0"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          />

          {/* ── LEFT: Contact info ── */}
          <div className="bg-gray-950 p-10 lg:p-14 relative z-10">
            {/* Label */}
            <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-emerald-300 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
              Contact
            </p>

            {/* Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-14">
              GET IN<br />TOUCH
            </h2>

            {/* Contact items with dividers */}
            <ul className="space-y-0">
              {contactItems.map(({ icon: Icon, label, href }, i) => (
                <li key={i} className="border-t border-white/10 last:border-b last:border-white/10">
                  {href ? (
                    <a
                      href={href}
                      className="flex items-center gap-4 py-5 group"
                    >
                      <Icon className="size-4 text-emerald-300 shrink-0" />
                      <span className="text-white/60 text-sm group-hover:text-white transition-colors duration-200">
                        {label}
                      </span>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-5">
                      <Icon className="size-4 text-emerald-300 shrink-0" />
                      <span className="text-white/60 text-sm">{label}</span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ── RIGHT: Send message form ── */}
          <div className="bg-gray-900 p-10 lg:p-14 relative z-10 border-t lg:border-t-0 lg:border-l border-white/10">
            <h3 className="text-white font-semibold text-lg mb-7">
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/60 focus:bg-gray-800/80 transition-all duration-200"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  required
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/60 focus:bg-gray-800/80 transition-all duration-200"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-white/50 text-xs font-medium mb-2 tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type Your Message"
                  rows={6}
                  required
                  className="w-full bg-gray-800 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-white/25 focus:outline-none focus:border-emerald-400/60 focus:bg-gray-800/80 transition-all duration-200 resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="w-full bg-linear-to-r from-emerald-300 to-sky-400 text-gray-900 font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed mt-1"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-gray-900/40 border-t-gray-900 rounded-full animate-spin" />
                    Sending…
                  </>
                ) : status === "sent" ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    Send Message
                    <Send className="size-4" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};