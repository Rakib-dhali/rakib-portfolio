"use client";

const footerLinks = [
  {
    title: "LinkedIn",
    icon: "fa-linkedin-in",
    gradientFrom: "#a955ff",
    gradientTo: "#ea51ff",
    color: "#0077b5",
  },
  {
    title: "X",
    icon: "fa-x-twitter",
    gradientFrom: "#56CCF2",
    gradientTo: "#2F80ED",
    color: "#000000",
  },
  {
    title: "GitHub",
    icon: "fa-github",
    gradientFrom: "#FF9966",
    gradientTo: "#FF5E62",
    color: "#333333",
  },
  {
    title: "LeetCode",
    icon: "fa-brands fa-leetcode",
    gradientFrom: "#80FF72",
    gradientTo: "#7EE8FA",
    color: "#FFA116",
  },
];

export const FooterIcons = () => {
  return (
    <>
      <style>{`
        .footer-title {
          transform: scale(0);
          opacity: 0;
          transition: 0.5s;
          white-space: nowrap;
        }

        .footer-icon {
          transition: 0.5s;
        }

        /* MOBILE */
        @media (max-width: 767px) {
          .footer-item:hover::before {
            opacity: 1;
          }

          .footer-item:hover i {
            color: black !important;
          }
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .footer-item:hover {
            width: 180px;
          }

          .footer-item:hover i {
            transform: scale(0);
          }

          .footer-item:hover .footer-title {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>

      <footer className="w-full py-8 md:py-10 flex justify-center items-center px-4">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-5">
          {footerLinks.map((item) => (
            <li
              key={item.title}
              className="footer-item relative list-none w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden cursor-pointer transition-all duration-500"
              style={
                {
                  "--gradient-from": item.gradientFrom,
                  "--gradient-to": item.gradientTo,
                } as React.CSSProperties
              }
            >
              {/* ICON */}
              <i
                className={`fab ${item.icon} footer-icon text-gray-500 text-2xl md:text-3xl`}
                style={{ color: item.color }}
              />

              {/* TITLE */}
              <span className="footer-title absolute text-gray-900 font-bold text-xs md:text-base uppercase tracking-wider">
                {item.title}
              </span>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};
