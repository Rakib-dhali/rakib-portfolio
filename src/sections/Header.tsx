"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [hoveredItem, setHoveredItem] =
    useState<number | null>(null);

  const [indicatorStyle, setIndicatorStyle] =
    useState({
      left: 0,
      width: 0,
    });

  const navRef = useRef<HTMLDivElement | null>(
    null
  );

  const itemRefs = useRef<
    (HTMLAnchorElement | null)[]
  >([]);

  const moveIndicator = (index: number) => {
    const item = itemRefs.current[index];
    const nav = navRef.current;

    if (!item || !nav) return;

    const navRect =
      nav.getBoundingClientRect();
    const itemRect =
      item.getBoundingClientRect();

    setIndicatorStyle({
      left: itemRect.left - navRect.left,
      width: itemRect.width,
    });
  };

  // Initial active item
  useEffect(() => {
    moveIndicator(activeItem);
  }, []);

  // Resize safety
  useEffect(() => {
    const handleResize = () => {
      moveIndicator(activeItem);
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () =>
      window.removeEventListener(
        "resize",
        handleResize
      );
  }, [activeItem]);

  const handleMouseEnter = (
    index: number
  ) => {
    setHoveredItem(index);
    moveIndicator(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    moveIndicator(activeItem);
  };

  const handleClick = (
    index: number
  ) => {
    setActiveItem(index);
    moveIndicator(index);
  };

  return (
    <header className="fixed top-3 w-full flex justify-center z-20 px-4">
      <nav
        ref={navRef}
        onMouseLeave={handleMouseLeave}
        className="relative flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur overflow-hidden"
      >
        {/* Animated Background */}
        <span
          className="absolute top-1 bottom-1 rounded-full bg-white transition-all duration-300 ease-out"
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
          }}
        />

        {navItems.map((item, index) => {
          const isActive =
            activeItem === index;

          const isHovered =
            hoveredItem === index;

          return (
            <Link
              key={item.label}
              href={item.href}
              ref={(el) => {
                itemRefs.current[index] =
                  el;
              }}
              onMouseEnter={() =>
                handleMouseEnter(index)
              }
              onClick={() =>
                handleClick(index)
              }
              className={`relative z-10 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-300 ${
                isActive || isHovered
                  ? "text-gray-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};