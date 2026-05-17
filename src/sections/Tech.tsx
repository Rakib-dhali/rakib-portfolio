import Image from "next/image";
import Marquee from "react-fast-marquee";

const techs = [
  { src: "/m/authjs.svg", alt: "Auth.js" },
  { src: "/m/better-auth_dark.svg", alt: "Better Auth" },
  { src: "/m/copilot_dark.svg", alt: "GitHub Copilot" },
  { src: "/m/css_old.svg", alt: "CSS" },
  { src: "/m/expressjs_dark.svg", alt: "Express" },
  { src: "/m/figma.svg", alt: "Figma" },
  { src: "/m/flowbite.svg", alt: "Flowbite" },
  { src: "/m/git.svg", alt: "Git" },
  { src: "/m/github_dark.svg", alt: "GitHub" },
  { src: "/m/heroui_light.svg", alt: "Hero UI" },
  { src: "/m/html5.svg", alt: "HTML5" },
  { src: "/m/imagekit.jpeg", alt: "ImageKit" },
  { src: "/m/javascript.svg", alt: "JavaScript" },
  { src: "/m/mongodb.svg", alt: "MongoDB" },
  { src: "/m/motion_dark.svg", alt: "Motion" },
  { src: "/m/nextjs.svg", alt: "Next.js" },
  { src: "/m/npm.svg", alt: "NPM" },
  { src: "/m/postman.svg", alt: "Postman" },
  { src: "/m/react_dark.svg", alt: "React" },
  { src: "/m/reactrouter.svg", alt: "React Router" },
  { src: "/m/render.svg", alt: "Render" },
  { src: "/m/tailwindcss.svg", alt: "Tailwind CSS" },
  { src: "/m/typescript.svg", alt: "TypeScript" },
  { src: "/m/vite.svg", alt: "Vite" },
  { src: "/m/vscode.svg", alt: "VS Code" },
];

const Tech = () => {
  return (
    <div className="max-w-5xl relative mx-auto ">

      <h1 className="text-3xl text-center font font-semibold mb-10 font-calistoga">Tech & Tools</h1>
      <div className="absolute left-0 top-0 h-full md:w-36 w-20 lg:w-48 bg-linear-to-r from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full md:w-36 w-20 lg:w-48 bg-linear-to-l from-gray-900 via-gray-900/50 to-transparent z-10 pointer-events-none" />

      <div className="  md:space-y-10">
        <Marquee autoFill={true}>
          {techs.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              height={70}
              width={70}
              className="mx-10 md:mx-12 lg:mx-15 "
            />
          ))}
        </Marquee>
        <Marquee autoFill={true} direction="right">
          {techs.map(({ src, alt }) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              height={70}
              width={70}
              className="mx-10 md:mx-12 lg:mx-15 "
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Tech;
