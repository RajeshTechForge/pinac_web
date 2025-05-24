"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/contexts/Firebase";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import Image from "next/image";

// icons
import { AiOutlineDollar } from "react-icons/ai";
import { VscGithubInverted } from "react-icons/vsc";
import {
  IoMenuOutline,
  IoCloseOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Download",
      href: "#download",
      icon: <IoDownloadOutline size={16} />,
    },
    {
      label: "Pricing",
      href: "#pricing",
      icon: <AiOutlineDollar size={16} />,
    },
    {
      label: "GitHub",
      href: "#github",
      icon: <VscGithubInverted size={16} />,
    },
  ];

  // function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById("userDropdown");
      const avatar = document.getElementById("userAvatar");
      const mobileMenu = document.getElementById("mobileMenu");
      const hamburger = document.getElementById("hamburgerButton");

      if (dropdown && avatar) {
        if (
          !dropdown.contains(event.target as Node) &&
          !avatar.contains(event.target as Node)
        ) {
          setIsDropdownOpen(false);
        }
      }

      if (mobileMenu && hamburger) {
        if (
          !mobileMenu.contains(event.target as Node) &&
          !hamburger.contains(event.target as Node)
        ) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className={`w-full fixed bg-primary/50 backdrop-blur-md z-50`}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8 lg:h-16 h-13 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span
            className="text-2xl sm:text-3xl font-bold text-slate-100 tracking-wider"
            style={{
              fontFamily: 'var(--font-nasa, "Courier New", monospace)',
            }}
          >
            PINAC
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="ml-10 flex items-baseline space-x-1.5 mr-5">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-slate-300 px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center gap-2 rounded-md relative overflow-hidden group hover:text-secondary"
              >
                <span
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                  aria-hidden="true"
                />
                <span className="z-10 flex items-center gap-2">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* User Section or Sign In Button - Desktop */}
          {user ? (
            <div className="relative">
              <button
                id="userAvatar"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                {user?.photoURL ? (
                  <Image
                    src={user.photoURL}
                    alt="user"
                    height={32}
                    width={32}
                    className="rounded-full"
                  />
                ) : (
                  <FaRegCircleUser
                    color="#ececec"
                    size={32}
                    className="rounded-full"
                  />
                )}
              </button>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="userDropdown"
                  className="origin-top-right absolute right-0 mt-2 w-72 rounded-lg shadow-lg bg-[#1a1f28] ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                >
                  <>
                    <div
                      className="flex items-center px-4 py-6 rounded-t-lg hover:bg-[#171c25] cursor-pointer"
                      onClick={() => {
                        router.push("/profile");
                        setIsDropdownOpen(false);
                      }}
                    >
                      {user?.photoURL ? (
                        <Image
                          src={user.photoURL}
                          alt="user"
                          height={43}
                          width={42}
                          className="rounded-full mr-3"
                        />
                      ) : (
                        <FaRegCircleUser
                          color="#ececec"
                          size={42}
                          className="rounded-full mr-3"
                        />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium text-white">
                          {user?.displayName || "User"}
                        </span>
                        <span className="text-sm text-zinc-400">
                          {user?.email}
                        </span>
                      </div>
                    </div>
                    <div className="h-[0.5px] bg-zinc-700" />
                    <button
                      className="block w-full py-3 px-4 text-left text-base leading-normal text-white font-Carme rounded-b-lg cursor-pointer hover:bg-[#171c25]"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                </div>
              )}
            </div>
          ) : (
            <button
              className="bg-secondary hover:bg-secondary-darker text-white px-4 py-1 rounded-full text-base font-medium transition-colors duration-200"
              onClick={() => router.push("/auth/sign-in")}
            >
              Sign In
            </button>
          )}
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden">
          <button
            id="hamburgerButton"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-slate-300 hover:text-white hover:bg-slate-800 p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <IoCloseOutline size={24} />
            ) : (
              <IoMenuOutline size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        id="mobileMenu"
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-screen opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } overflow-hidden bg-slate-900 border-t border-slate-800`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 hover:bg-slate-800 px-3 py-2 text-base font-medium rounded-md transition-colors duration-200 flex items-center gap-3"
              style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.icon}
              {item.label}
            </a>
          ))}

          {/* Mobile User Section or Sign In Button */}
          <div className="pt-4 pb-2">
            {user ? (
              <>
                <div
                  className="flex items-center px-3 py-2 text-white rounded-md hover:bg-slate-800 cursor-pointer"
                  onClick={() => {
                    router.push("/profile");
                    setIsMenuOpen(false);
                  }}
                >
                  {user?.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="user"
                      height={32}
                      width={32}
                      className="rounded-full mr-3"
                    />
                  ) : (
                    <FaRegCircleUser
                      color="#ececec"
                      size={32}
                      className="rounded-full mr-3"
                    />
                  )}
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {user?.displayName || "User"}
                    </span>
                    <span className="text-sm text-zinc-400">{user?.email}</span>
                  </div>
                </div>
                <button
                  className="w-full mt-2 text-left px-3 py-2 text-white rounded-md hover:bg-slate-800"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium transition-colors duration-200 shadow-lg hover:shadow-blue-500/25"
                style={{ fontFamily: "var(--font-poppins, sans-serif)" }}
                onClick={() => {
                  router.push("/auth/sign-in");
                  setIsMenuOpen(false);
                }}
              >
                Sign In
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
