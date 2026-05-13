import StarIcon from "@/assets/icons/star.svg";
const row2: string[] = [
  "🟢 Open to Work",
  "Remote Only",
  "Full Stack Dev",
  "SaaS Builder",
  "Available Now",
  "AI-First Dev",
  "Self-Taught",
  "Bangladesh 🇧🇩",
];
export const TapeSection = () => {
  return (
    <section className="py-16 lg:py-24 overflow-clip">
      <div className="bg-linear-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3 ">
            {row2.map((word: string, i: number) => (
              <div key={i} className="inline-flex gap-4 items-center">
                <span className="text-gray-900 font-extrabold uppercase text-sm">{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
