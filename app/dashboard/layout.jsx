// components/Layout.js
import Sidebar from "@/components/Sidebar"; // Your sidebar component
import Navbar from "@/components/Navbar"; // Your navbar component

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar /> {/* Navbar for navigation */}
      <div className="flex flex-grow">
        <Sidebar /> {/* Sidebar for additional links */}
        <div className="flex-grow flex overflow-hidden">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
