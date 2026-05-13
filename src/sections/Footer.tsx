import { FooterIcons } from "@/components/FooterIcons";

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-hidden">
      <div className="absolute h-100 w-400 bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 mask-[radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container mx-auto px-5 max-w-5xl">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row  justify-between items-center gap-4">
          <div className="">&copy; 2026. All right reserved</div>
          <div>
            <FooterIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};
