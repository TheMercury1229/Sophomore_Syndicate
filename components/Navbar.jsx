// components/Navbar.js
const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-bold">Quiz Generator</h1>
        <button className="md:hidden">Menu</button>{" "}
        {/* Add toggle logic for mobile */}
      </div>
    </nav>
  );
};

export default Navbar;
