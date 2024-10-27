import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-[#334296] py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img
            src="assets/logo/Palson_Fabrics_Logo-removebg.png" // Replace with your logo
            alt="Palson Fabrics Logo"
            style={{
              filter:
                "invert(99%) sepia(99%) saturate(0%) hue-rotate(134deg) brightness(102%) contrast(101%)",
            }}
            className="h-12 w-auto mr-3"
          />
          {/* Placeholder for Logo */}
          <img
            src="assets/logo/Palson_Fabrics_Name-removebg.png" // Replace with your logo
            alt="Palson Fabrics Logo"
            style={{
              filter:
                "invert(99%) sepia(99%) saturate(0%) hue-rotate(134deg) brightness(102%) contrast(101%)",
            }}
            className="h-12 w-auto mr-3"
          />
        </div>

        {/* Links Section */}
        <div className="flex space-x-8 mt-4 md:mt-0">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <a href="#" className="text-gray-300 hover:text-white">
            Products
          </a>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="fa-brands fa-instagram text-xl"></a>
          {/* Replace with actual icons */}
          <a href="#" className="fa-brands fa-linkedin  text-xl"></a>
          <a href="#" className="fa-solid fa-globe  text-xl"></a>
          <a href="#" className="fa-brands fa-facebook  text-xl"></a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-6 border-t border-gray-400 pt-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 text-sm">
          © {currentYear} Palson Fabrics. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-300 text-sm hover:text-white">
            Terms
          </a>
          <a href="#" className="text-gray-300 text-sm hover:text-white">
            Privacy
          </a>
          <a href="#" className="text-gray-300 text-sm hover:text-white">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
