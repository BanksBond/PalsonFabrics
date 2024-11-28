import { useState } from "react";
import { Link } from "react-router-dom";
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
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-white shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/assets/logo/Palson_Fabrics_Name-removebg.png"
              alt="Palson Fabrics Logo"
              className="h-12 w-auto mr-3"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            to="/"
            className={`text-gray-700 hover:text-[#3e4d9d] ${
              activeLink === "home" ? "text-[#3e4d9d]" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-gray-700 hover:text-[#3e4d9d] ${
              activeLink === "products" ? "text-[#3e4d9d]" : ""
            }`}
          >
            Products
          </Link>
          <Link
            to="/about"
            className={`text-gray-700 hover:text-[#3e4d9d] ${
              activeLink === "about" ? "text-[#3e4d9d]" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`text-gray-700 hover:text-[#3e4d9d] ${
              activeLink === "contact" ? "text-[#3e4d9d]" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={handleToggle}
            className="relative flex items-center justify-center w-10 h-10 focus:outline-none"
          >
            {/* Top and Bottom Bars */}
            <motion.span
              className="block absolute h-0.5 w-6 bg-gray-700 rounded"
              animate={isOpen ? { rotate: 45, y: 2 } : { rotate: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block absolute h-0.5 w-6 bg-gray-700 rounded"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block absolute h-0.5 w-6 bg-gray-700 rounded"
              animate={isOpen ? { rotate: -45, y: -2 } : { rotate: 0, y: 4 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="overflow-hidden md:hidden bg-white shadow-md"
      >
        <nav className="flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "home" ? "text-blue-600" : ""
            }`}
          >
            Home
          </Link>
          <a
            href="#"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "products" ? "text-blue-600" : ""
            }`}
          >
            Products
          </a>
          <Link
            to="/about"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "about" ? "text-blue-600" : ""
            }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`text-gray-700 hover:text-blue-600 ${
              activeLink === "contact" ? "text-blue-600" : ""
            }`}
          >
            Contact Us
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;
