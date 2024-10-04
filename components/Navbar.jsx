"use client";
import React from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button"; // Assuming you use Shadcn's button
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"; // Dropdown components from Shadcn
import Image from "next/image";
import { ThemeToggleButton } from "./ThemeToggleButton"; // Your theme toggle button
import Link from "next/link";
import { FilePlus, Home } from "lucide-react";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
const sidebarLinks = [
  { href: "/dashboard", label: "Home", icon: Home },
  { href: "/dashboard/quiz", label: "Add Quiz", icon: FilePlus },
];

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="p-3 border-b-2">
      <div className="flex justify-between items-center px-3 ">
        {/* Mobile Menu Trigger */}
        <h1 className="text-3xl font-bold mb-5 md:hidden">Quizzi</h1>
        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild>
              <Button aria-label="Open Menu" variant="outline" className="p-2">
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent>
              {/* Mobile Sidebar or content goes here */}
              <nav className="flex flex-col space-y-4">
                <h1 className="text-3xl font-bold mb-5">Quizzi</h1>
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
                    {React.createElement(link.icon, {
                      className: "w-5 h-5 mr-3",
                    })}
                    <span>{link.label}</span>
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navbar Actions */}
        <div className="hidden md:flex items-center space-x-4 ml-auto">
          {/* Theme Toggle */}
          <ThemeToggleButton />

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0">
                <Image
                  src="/profile.webp"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
