import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "./ui/logo";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
 
  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });
 
  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center bg-transparent ${
        sticky
          ? "!fixed !z-[9999] !bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm !transition dark:!bg-primary dark:!bg-opacity-20"
          : "absolute"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between">
          <div className="w-60 max-w-full">
          <Link href="/" className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"}`}>
  <Logo />
 </Link>
          </div>
          <nav className="hidden lg:flex space-x-12">
            <Link href="/home" className="text-base font-bold text-dark hover:opacity-70 dark:text-white">
              Home
            </Link>
            <Link href="/about" className="text-base font-bold text-dark hover:opacity-70 dark:text-white">
              About
            </Link>
            <Link href="/pricing" className="text-base font-bold text-dark hover:opacity-70 dark:text-white">
              Pricings
            </Link>
          </nav>
          <div className="flex items-center justify-end">
            <Link
              href="/signup"
              className="hidden lg:block rounded-md bg-blue-500 py-3 px-8 text-base font-bold text-white transition duration-300 hover:bg-opacity-90 hover:shadow-signUp"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
