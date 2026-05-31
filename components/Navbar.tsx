"use client";
import Link from "next/link";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "../components/ui/sheet";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Committee",
    href: "/committee",
    dropdown: [
      { name: "Organizing Committee", href: "/organizing" },
      { name: "Technical Committee", href: "/technical" },
      { name: "Advisory Committee", href: "/advisory" },
    ],
  },
  { name: "Speakers", href: "/speaker" },
  {
    name: "Call For Papers",
    href: "/submitPaper",
    // dropdown: [
       
    //   { name: "Call for Papers", href: "/NITFINAL.pdf" },
    //   { name: "Submit Paper", href: "/submitPaper" },
    //   { name: "Registration Details", href: "/RegDet" },
    // ],
  },
  // { name: "Tracks", href: "/track-chairs" },
  {name:"Registration", href:"/RegDet"},
 
  { name: "Travel", href: "/updatedSoon" },
  { name: "Schedule", href: "/updatedsoon" },
  {name: "Accomodation", href: "/updatedsoon"},
  {
    name: "Sponsorship",
    href: "/Sponsorship",
    dropdown: [
      { name: "Call For Sponsors", href: "/callforSponsorship.jpeg" },
      { name: "Our Sponsors", href: "/Sponsorship" },
    ],
  },
  {
    name: "Announcements",
    href: "/announcements",
  },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animationStates, setAnimationStates] = useState({
    navbar: false,
    logo: false,
    navItems: [] as boolean[],
    registerBtn: false,
    mobileBtn: false,
  });
  const dropdownRefs = useRef({});
  const router = useRouter();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Staggered entrance animation
  useEffect(() => {
    // First, navbar background appears
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, navbar: true }));
    }, 50);

    // Then logo appears
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, logo: true }));
    }, 150);

    // Then each nav item appears one by one
    navigation.forEach((_, index) => {
      setTimeout(() => {
        setAnimationStates(prev => {
          const newNavItems = [...prev.navItems];
          newNavItems[index] = true;
          return { ...prev, navItems: newNavItems };
        });
      }, 250 + index * 80);
    });

    // Then register button appears
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, registerBtn: true }));
    }, 250 + navigation.length * 80 + 50);

    // Finally mobile menu button appears
    setTimeout(() => {
      setAnimationStates(prev => ({ ...prev, mobileBtn: true }));
    }, 250 + navigation.length * 80 + 100);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedOutside = Object.values(dropdownRefs.current).every(
        (ref) => !ref || !(ref as Node).contains(event.target),
      );

      if (clickedOutside) {
        setActiveDropdown(null);
      }
    };

    if (activeDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [activeDropdown]);

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
  };

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 transition-all duration-700 ease-out ${
        animationStates.navbar
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      } ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
          : "bg-white/70 backdrop-blur-md border-b border-gray-200/30"
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Left */}
          <div className={`flex-shrink-0 mr-4 md:mr-6 transition-all duration-500 ease-out ${
            animationStates.logo
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-5"
          }`}>
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                {/* Logo Container */}
                <div className="flex items-center justify-center">
                  <div className="relative h-12 w-auto transition-all duration-300 group-hover:scale-105">
                    <Image
                      src="/I3ST-removebg-preview.png"
                      alt="IEEE INSTCon 2026 Logo"
                      width={60}
                      height={30}
                      className="object-cover"
                      priority
                    />

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Center Navigation - Desktop with responsive breakpoints */}
          <div className="hidden lg:flex items-center justify-center flex-1 space-x-2 xl:space-x-3 2xl:space-x-4">
            {navigation.map((item, idx) =>
              item.dropdown ? (
                <div
                  key={item.name}
                  className={`relative transition-all duration-500 ease-out ${
                    animationStates.navItems[idx]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                  ref={(el) => {
                    dropdownRefs.current[item.name] = el;
                  }}
                >
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 focus:outline-none group px-1 xl:px-2 py-1 text-sm xl:text-base whitespace-nowrap"
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                    </span>
                    {activeDropdown === item.name ? (
                      <ChevronUp className="ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-200 text-blue-600" />
                    ) : (
                      <ChevronDown className="ml-1 h-3 w-3 xl:h-4 xl:w-4 transition-transform duration-200" />
                    )}
                  </button>

                  {activeDropdown === item.name && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-white/90 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-2xl z-50 animate-in fade-in-0 zoom-in-95 duration-200 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 pointer-events-none"></div>
                      <div className="py-2 relative">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200"
                            onClick={handleDropdownItemClick}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative text-gray-700 hover:text-blue-600 font-medium transition-all duration-300 hover:scale-105 group px-1 xl:px-2 py-1 text-sm xl:text-base whitespace-nowrap transition-all duration-500 ease-out ${
                    animationStates.navItems[idx]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-4"
                  }`}
                >
                  {item.name === "Announcements" ? (
                    <span className="absolute -top-2 animate-pulse -right-2 inline-flex items-center px-1.5 py-0.5 text-xs font-semibold bg-red-500 text-white rounded-full shadow-sm">
                      New
                    </span>
                  ) : null}
                  <span className="relative">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                  </span>
                </Link>
              ),
            )}
          </div>

          {/* Register Button - Desktop */}
          <div className={`hidden lg:flex ml-4 xl:ml-6 flex-shrink-0 transition-all duration-500 ease-out ${
            animationStates.registerBtn
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-5"
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              {/* <Button
                onClick={() => {
                  router.push("/RegDet");
                }}
                className="relative bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-800/50 px-4 xl:px-6 text-sm xl:text-base whitespace-nowrap   [@media(min-width:1024px)_and_(max-width:1040px)]:px-2
  [@media(min-width:1024px)_and_(max-width:1040px)]:text-xs
  [@media(min-width:1024px)_and_(max-width:1040px)]:scale-90"
              >
                Register Now
              </Button> */}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden flex items-center transition-all duration-500 ease-out ${
            animationStates.mobileBtn
              ? "opacity-100 scale-100"
              : "opacity-0 scale-90"
          }`}>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-blue-50/50 transition-colors"
                >
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] bg-white/95 backdrop-blur-xl border-l border-gray-200/50 flex flex-col"
              >
                {/* Add SheetTitle for accessibility - visually hidden but available for screen readers */}
                <SheetTitle className="sr-only">
                  IEEE INSTCon 2026 Navigation Menu
                </SheetTitle>

                {/* Gradient overlay for mobile menu */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 pointer-events-none"></div>

                {/* Scrollable container for navigation items */}
                <div className="flex-1 overflow-y-auto py-6">
                  <nav className="flex flex-col gap-4">
                    {navigation.map((item) =>
                      item.dropdown ? (
                        <div key={item.name} className="space-y-2">
                          <div className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                            {item.name}
                          </div>

                          <div className="pl-4 space-y-2 border-l-2 border-blue-200">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block text-sm text-gray-600 hover:text-blue-600 transition-colors py-1"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : item.name === "Announcements" ? (
                        <div
                          key={item.name}
                          className="inline-flex items-center gap-2"
                        >
                          <Link
                            href={item.href}
                            className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300 py-1"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>

                          <span className="animate-pulse text-xs font-semibold bg-red-500 text-white px-2 py-[2px] rounded-full shadow-sm">
                            New
                          </span>
                        </div>
                      ) : (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-blue-600 hover:to-purple-600 transition-all duration-300 py-1"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ),
                    )}
                  </nav>
                </div>

                {/* Fixed Register Button at the bottom */}
                <div className="pt-4 border-t border-gray-200/50 shrink-0">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <Button
                      className="relative w-full bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-800/50"
                      onClick={() => {
                        router.push("/RegDet");
                        setMobileMenuOpen(false);
                      }}
                    >
                      Register Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}