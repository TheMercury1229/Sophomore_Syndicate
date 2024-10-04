"use client";
import React from "react";
import Link from "next/link";
import { Home, FilePlus, Settings } from "lucide-react"; // Sidebar icons
import Image from "next/image";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"; // Mobile sidebar

// Sidebar links configuration
const sidebarLinks = [
  { href: "/dashboard/teacher/home", label: "Home", icon: Home },
  { href: "/dashboard/teacher/add-quiz", label: "Add Quiz", icon: FilePlus },
  { href: "/dashboard/teacher/settings", label: "Settings", icon: Settings },
];

const Sidebar = () => {
  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex flex-col w-64 h-screen px-6 py-8 bg-gray-100 dark:bg-gray-900 shadow-md">
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <Image
            src="/logo.png"
            alt="Quizzi Logo"
            width={40}
            height={40}
            className="mr-3"
          />
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            Quizzi
          </span>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center px-4 py-2 rounded-md hover:bg-primary/70 dark:hover:bg-primary/70 hover:text-white transition-all text-gray-900 dark:text-white"
            >
              {React.createElement(link.icon, { className: "w-5 h-5 mr-3" })}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sidebar for mobile screens */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <button aria-label="Open Sidebar" className="p-4">
              <svg
                className="w-6 h-6 text-gray-900 dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </SheetTrigger>
          <SheetContent>
            <div className="px-6 py-8">
              {/* Mobile Logo */}
              <div className="flex items-center mb-8">
                <Image
                  src="/logo.png"
                  alt="Quizzi Logo"
                  width={40}
                  height={40}
                  className="mr-3"
                />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">
                  Quizzi
                </span>
              </div>

              {/* Mobile Sidebar Links */}
              <nav className="flex flex-col space-y-4">
                {sidebarLinks.map((link) => (
                  <Link key={link.href} href={link.href}>
                    <a className="flex items-center px-4 py-2 rounded-md hover:bg-primary-100 dark:hover:bg-primary-700 transition-all text-gray-900 dark:text-white">
                      {React.createElement(link.icon, {
                        className: "w-5 h-5 mr-3",
                      })}
                      <span>{link.label}</span>
                    </a>
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default Sidebar;
