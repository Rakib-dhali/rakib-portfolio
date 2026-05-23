"use client";

import Link from "next/link";
import Logo from "@/assets/images/logo .png"
import { motion } from "motion/react";
import {
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import CoolBeansButton from "@/components/CoolBeansButton";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Projects",
    href: "#projects",
  },
  { label: "About", href: "#about" },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const Header = () => {
  const [activeItem, setActiveItem] =
    useState(0);

  const [hoveredItem, setHoveredItem] =
    useState<number | null>(null);

  const [showNavbar, setShowNavbar] =
    useState(true);

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [indicatorStyle, setIndicatorStyle] =
    useState({
      left: 0,
      width: 0,
    });

  const navRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const itemRefs = useRef<
    (HTMLAnchorElement | null)[]
  >([]);

  const lastScrollY = useRef(0);

  const moveIndicator = (
    index: number
  ) => {
    const item =
      itemRefs.current[index];

    const nav =
      navRef.current;

    if (!item || !nav) return;

    const navRect =
      nav.getBoundingClientRect();

    const itemRect =
      item.getBoundingClientRect();

    setIndicatorStyle({
      left:
        itemRect.left -
        navRect.left,
      width: itemRect.width,
    });
  };

  // Initial indicator
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

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY =
        window.scrollY;

      // Shrink navbar state
      setIsScrolled(
        currentScrollY > 50
      );

      // Always visible at top
      if (currentScrollY < 50) {
        setShowNavbar(true);
      }
      // Hide on scroll down
      else if (
        currentScrollY >
        lastScrollY.current
      ) {
        setShowNavbar(false);
      }
      // Show on scroll up
      else {
        setShowNavbar(true);
      }

      lastScrollY.current =
        currentScrollY;
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

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
    <motion.header
      animate={{
        y: showNavbar
          ? 0
          : -120,
        opacity:
          showNavbar ? 1 : 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      <motion.div
        animate={{
          width: isScrolled
            ? "fit-content"
            : "100%",
        }}
        transition={{
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="mx-auto flex items-center justify-center  sm:justify-between max-w-6xl"
      >
        {/* LEFT LOGO */}
        <motion.div 
          animate={{
            opacity:
              isScrolled
                ? 0
                : 1,
            x: isScrolled
              ? -40
              : 0,
            width:
              isScrolled
                ? 0
                : "auto",
          }}
          transition={{
            duration: 0.35,
          }}
          className="overflow-hidden hidden sm:block whitespace-nowrap "
        >
          <Link
            href="/"
            className="text-white font-bold text-xl w-40 bg-red-200"
          >
            <Image height={50} width={50} src={Logo} alt="logo"/>
          </Link>
        </motion.div>

        {/* CENTER NAVBAR */}
        <motion.nav
          ref={navRef}
          onMouseLeave={
            handleMouseLeave
          }
          animate={{
            scale:
              isScrolled
                ? 0.94
                : 1,
          }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="relative flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-md overflow-hidden"
        >
          {/* Moving indicator */}
          <motion.span
            className="absolute top-1 bottom-1 rounded-full bg-white"
            animate={{
              left:
                indicatorStyle.left,
              width:
                indicatorStyle.width,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />

          {navItems.map(
            (item, index) => {
              const isActive =
                activeItem ===
                index;

              const isHovered =
                hoveredItem ===
                index;

              return (
                <Link
                  key={
                    item.label
                  }
                  href={
                    item.href
                  }
                  ref={(el) => {
                    itemRefs.current[
                      index
                    ] = el;
                  }}
                  onMouseEnter={() =>
                    handleMouseEnter(
                      index
                    )
                  }
                  onClick={() =>
                    handleClick(
                      index
                    )
                  }
                  className={`relative z-10 px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                    isActive ||
                    isHovered
                      ? "text-black"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            }
          )}
        </motion.nav>

        {/* RIGHT BUTTON */}
        <motion.div
          animate={{
            opacity:
              isScrolled
                ? 0
                : 1,
            x: isScrolled
              ? 40
              : 0,
            width:
              isScrolled
                ? 0
                : "auto",
          }}
          transition={{
            duration: 0.35,
          }}
          className="overflow-hidden hidden sm:block whitespace-nowrap mt-"
        >
          <CoolBeansButton href="#contact" label="Hire Me" className="text-white/80 text-[20px] border-white hover:text-black after:bg-white"/>
        </motion.div>
      </motion.div>
    </motion.header>
  );
};