"use client";

const footerLinks = [
  {
    title: "LinkedIn",
    icon: "fa-linkedin-in",
    gradientFrom: "#a955ff",
    gradientTo: "#ea51ff",
    color: "#0077b5",
    href: "https://linkedin.com/in/rakibulhossain-dev",
  },
  {
    title: "X",
    icon: "fa-x-twitter",
    gradientFrom: "#56CCF2",
    gradientTo: "#2F80ED",
    color: "#000000",
    href: "https://x.com/Hossain__Rakib",
  },
  {
    title: "GitHub",
    icon: "fa-github",
    gradientFrom: "#FF9966",
    gradientTo: "#FF5E62",
    color: "#333333",
    href: "https://github.com/Rakib-dhali",
  },
  {
    title: "LeetCode",
    icon: "fa-code",           // ✅ fa-code as fallback (LeetCode not in FA free)
    gradientFrom: "#80FF72",
    gradientTo: "#7EE8FA",
    color: "#FFA116",
    href: "https://leetcode.com/u/rakibul343",
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

        .footer-item::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--gradient-from), var(--gradient-to));
          opacity: 0;
          transition: 0.5s;
          border-radius: 9999px;
        }

        @media (max-width: 767px) {
          .footer-item:hover::before {
            opacity: 1;
          }
          .footer-item:hover i {
            color: white !important;
          }
        }

        @media (min-width: 768px) {
          .footer-item:hover {
            width: 180px;
            border-radius: 40px;
          }
          .footer-item:hover::before {
            opacity: 1;
            border-radius: 40px;
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
            <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
              <li 
                className="footer-item cursor-pointer relative list-none w-14 h-14 md:w-16 md:h-16 bg-white rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.1)] flex items-center justify-center overflow-hidden  transition-all duration-500"
                style={
                  {
                    "--gradient-from": item.gradientFrom,
                    "--gradient-to": item.gradientTo,
                  } as React.CSSProperties
                }
              >
                <i
                  className={`fab ${item.icon} footer-icon text-2xl md:text-3xl relative z-10`}
                  style={{ color: item.color }}
                />
                <span className="footer-title absolute z-10 text-white font-bold text-xs md:text-base uppercase tracking-wider">
                  {item.title}
                </span>
              </li>
            </a>
          ))}
        </ul>
      </footer>
    </>
  );
};