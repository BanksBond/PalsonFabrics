import { useState } from "react";

import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Navbar({ activeLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src="assets/logo/Palson_Fabrics_Name-removebg.png" // Replace with your logo
            alt="Palson Fabrics Logo"
            className="h-12 w-auto mr-3"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "home" ? "text-blue-600" : ""
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "products" ? "text-blue-600" : ""
            }`}
          >
            Products
          </a>
          <a
            href="#"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "about" ? "text-blue-600" : ""
            }`}
          >
            About Us
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600 focus:outline-none"
            onClick={handleToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md py-4">
          <nav className="flex flex-col items-center space-y-4">
            <a
              href="#"
              className={`text-gray-700 hover:text-blue-600 ${
                activeLink === "home" ? "text-blue-600" : ""
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-gray-700 hover:text-blue-600 ${
                activeLink === "products" ? "text-blue-600" : ""
              }`}
            >
              Products
            </a>
            <a
              href="#"
              className={`text-gray-700 hover:text-blue-600 ${
                activeLink === "about" ? "text-blue-600" : ""
              }`}
            >
              About Us
            </a>
          </nav>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
