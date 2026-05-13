import Link from "next/link";

export const Header = () => {
  return (
    <div className="header">
      <nav className="nav">
        <Link className="nav-item" href="/">Home</Link>
        <Link className="nav-item" href="/projects">Projects</Link>
        <Link className="nav-item" href="/about">About</Link>
        <Link className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900" href="/contact">Contact</Link>
      </nav>
    </div>
  );
};
