// components/Layout.js
import Sidebar from "@/components/Sidebar"; // Your sidebar component
import Navbar from "@/components/Navbar"; // Your navbar component

const Layout = ({ children }) => {
  return (
    <div className="grid md:grid-cols-[250px_1fr] min-h-screen gap-2">
      <Sidebar /> {/* Sidebar for additional links */}
      <div className="flex flex-col min-h-screen w-full">
        <Navbar />
        <div className="flex-grow flex overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
