const socialLinks = [
  {
    icon: "fa-linkedin-in",
    bg: "#0077b5",
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: "fa-x-twitter",
    bg: "#000000",
    href: "#",
    label: "X",
  },
  {
    icon: "fa-github",
    bg: "#333333",
    href: "#",
    label: "GitHub",
  },
  {
    icon: "fa-brands fa-leetcode",
    bg: "#FFA116",
    href: "#",
    label: "LeetCode",
  },
];

export const SocialIcons = () => {
  return (
    <>
      <style>{`
        .social-link::before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          transition: top 0.5s;
          z-index: 0;
          background: var(--social-color);
        }

        .social-link:hover::before {
          top: 0;
        }

        .social-link:hover .social-icon {
          color: #fff;
          transform: rotateY(360deg);
        }
      `}</style>

      <ul className="flex">
        {socialLinks.map(({ icon, bg, href, label }) => (
          <li key={label} className="list-none mx-2.5 md:mx-5">
            <a
              href={href}
              aria-label={label}
              className="social-link relative size-12 md:15  bg-white flex items-center justify-center rounded-full border-[3px] border-white overflow-hidden"
              style={{ "--social-color": bg } as React.CSSProperties}
            >
              <i
                className={`fab ${icon}  social-icon relative text-[#262626] text-[20px] md:text-2xl  transition-all duration-500 z-10`}
              />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};