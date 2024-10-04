"use client";

import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { GridBackgroundDemo } from "@/components/GridBackground";

const Hero = () => {
  return (
    <main className="relative flex-1 flex flex-col items-center justify-center text-center py-40">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid bg-cover opacity-10" />

      <motion.h1
        className="text-5xl font-extrabold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Unlock Your Potential with AI-Powered Quizzes
      </motion.h1>
      <p className="mt-4 max-w-lg text-lg">
        Transform your learning experience with intelligent quizzes tailored to
        your needs.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button className="bg-primary  hover:bg-primary  transition duration-200">
          Get Started
        </Button>
        <Button
          variant="outline"
          className="hover:bg-gray-100 dark:hover:bg-gray-700 transition duration-200"
        >
          Learn More
        </Button>
      </div>
    </main>
  );
};
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-gray-800 dark:text-white">
      {/* Header Section */}
      <header className="shadow-none">
        <nav className="container mx-auto p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Quizzi</h1>
          <div className="flex items-center space-x-4">
            <ThemeToggleButton />
            <Link href="/auth/signin">
              <Button
                variant="outline"
                className="hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section with Grid Background */}
      <GridBackgroundDemo>
        <Hero />
      </GridBackgroundDemo>
      {/* Steps Section */}
      <section className="py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/steps-image.svg" // Replace with actual image path
              alt="Steps Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-none"
            />
          </div>

          {/* Right Content */}
          <div>
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <Card className="mb-6 shadow-none">
              <CardHeader>
                <CardTitle>Step 1: Sign Up</CardTitle>
              </CardHeader>
              <CardContent>
                Create an account to access personalized AI quizzes and start
                learning instantly.
              </CardContent>
            </Card>
            <Card className="mb-6 shadow-none">
              <CardHeader>
                <CardTitle>Step 2: Choose a Topic</CardTitle>
              </CardHeader>
              <CardContent>
                Select from a wide range of topics to focus on your areas of
                interest or curriculum.
              </CardContent>
            </Card>
            <Card className="shadow-none">
              <CardHeader>
                <CardTitle>Step 3: Start Quizzing</CardTitle>
              </CardHeader>
              <CardContent>
                Begin your learning journey with AI-generated questions tailored
                to your needs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Features</h2>
          <div className="flex justify-center flex-wrap gap-8">
            <Card className="w-full md:w-1/3 shadow-none">
              <CardHeader>
                <CardTitle>AI-Generated Questions</CardTitle>
              </CardHeader>
              <CardContent>
                Get tailored questions based on your learning materials, making
                studying more efficient.
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3 shadow-none">
              <CardHeader>
                <CardTitle>Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                Track your progress and understand your strengths and weaknesses
                with insightful analytics.
              </CardContent>
            </Card>
            <Card className="w-full md:w-1/3 shadow-none">
              <CardHeader>
                <CardTitle>Customizable Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                Customize quizzes based on topics, difficulty, and question
                types to suit your needs.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer Section with Social Links */}
      <footer className="py-4">
        <div className="container mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Quizzi. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
