import React from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const TeacherDashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full grid grid-cols-1 md:grid-cols-[230px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
};

export default TeacherDashboardLayout;
