import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import TechSection from "@/sections/Tech";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <TechSection />
      <ProjectsSection/>
      <TapeSection/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
