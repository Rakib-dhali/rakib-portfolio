import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 lg:mb-10 flex items-center justify-between py-6">
      <div className="flex shrink-0 items-center">
        <a href="/">
          <img className="mx-2 w-10 cursor-pointer" src={logo} alt="logo" />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/Rakib-dhali"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/rakibulhossain-dev"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Hossain__Rakib"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter / X"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href="https://leetcode.com/u/rakibul343/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="leetcode"
        >
          <SiLeetcode />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
