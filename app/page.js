"use client";

import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Header Section */}
      <header className="bg-white dark:bg-gray-800 shadow-md">
        <nav className="container mx-auto p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Quizzi</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <Link href="/auth/signin">
              <Button
                variant="outline"
                className="text-gray-800 dark:text-gray-200 border-gray-800 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center py-16">
        <motion.h1
          className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Unlock Your Potential with AI-Powered Quizzes
        </motion.h1>
        <p className="mt-4 max-w-lg text-lg">
          Transform your learning experience with intelligent quizzes tailored
          to your needs.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button className="bg-primary text-white hover:bg-primary transition duration-200">
            Get Started
          </Button>
          <Button
            variant="outline"
            className="border-gray-800 dark:border-gray-200 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
          >
            Learn More
          </Button>
        </div>
      </main>

      {/* Features Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                AI-Generated Questions
              </h3>
              <p>
                Get tailored questions based on your learning materials, making
                studying more efficient.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Real-Time Analytics
              </h3>
              <p>
                Track your progress and understand your strengths and weaknesses
                with insightful analytics.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-2">
                Customizable Quizzes
              </h3>
              <p>
                Customize quizzes based on topics, difficulty, and question
                types to suit your needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black/40 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Quizzi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
