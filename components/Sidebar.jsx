"use client";
import React from "react";
import Link from "next/link";
import { Home, FilePlus, Settings } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // To get the active path

const sidebarLinks = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/quiz", label: "Add Quiz", icon: FilePlus },
];

const Sidebar = () => {
  const pathname = usePathname(); // Get the current route

  return (
    <>
      {/* Sidebar for larger screens */}
      <aside className="hidden md:flex flex-col w-64 h-screen px-6 py-8 border-r-2 shadow-none">
        {/* Logo Section */}
        <h1 className="text-3xl font-bold mb-5">Quizzi</h1>

        {/* Sidebar Links */}
        <nav className="flex flex-col space-y-4">
          {sidebarLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center px-4 py-2 rounded-md transition-all ${
                pathname === link.href
                  ? "bg-primary bg-opacity-20 text-primary-foreground"
                  : "hover:bg-black/10 dark:hover:bg-white/10"
              }`}
            >
              {React.createElement(link.icon, { className: "w-5 h-5 mr-3" })}
              <span>{link.label}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Sidebar for mobile screens */}
    </>
  );
};

export default Sidebar;
