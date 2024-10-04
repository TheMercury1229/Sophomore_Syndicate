import React from "react";

export default function Layout({ children }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-purple-600">
      {children}
    </main>
  );
}
