import { GridBackgroundDemo } from "@/components/GridBackground";
import React from "react";

export default function Layout({ children }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r">
      <GridBackgroundDemo>{children}</GridBackgroundDemo>
    </main>
  );
}
