import StarIcon from "@/assets/icons/star.svg";
import Marquee from "react-fast-marquee";

// const row2: string[] = [
//   "🟢 Open to Work",
//   "Remote Only",
//   "Full Stack Dev",
//   "SaaS Builder",
//   "Available Now",
//   "AI-First Dev",
//   "Self-Taught",
//   "Bangladesh 🇧🇩",
// ];
export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-clip">
      <div className="bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 ">
            <Marquee autoFill>
             <div className=" text-sm font-extrabold uppercase mx-5 text-gray-900">🟢 Open to Work</div>
             <StarIcon className="size-6 -rotate-12  mx-5 text-gray-900" />
             <div className=" text-sm font-extrabold uppercase mx-5 text-gray-900">Remote Only</div>
             <StarIcon className="size-6 -rotate-12  mx-5 text-gray-900" />
             <div className=" text-sm font-extrabold uppercase mx-5 text-gray-900">Full Stack Dev</div>
             <StarIcon className="size-6 -rotate-12  mx-5 text-gray-900" />
             <div className=" text-sm font-extrabold uppercase mx-5 text-gray-900">Available Now</div>
             <StarIcon className="size-6 -rotate-12  mx-5 text-gray-900" />
             <div className=" text-sm font-extrabold uppercase mx-5 text-gray-900">AI-First Dev</div>
             <StarIcon className="size-6 -rotate-12  mx-5 text-gray-900" />
             <div className=" text-sm font-extrabold uppercase mx-5 text-gray-900">Bangladesh 🇧🇩</div>
             <StarIcon className="size-6 -rotate-12  mx-5 text-gray-900" />
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};
