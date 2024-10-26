import AboutUs from "./components/AboutUs";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Treatment from "./components/Treatment";
import ProductDemo from "./components/ProductDemo";
import ClientTestimoni from "./components/ClientTestimoni";

const currentYear = new Date().getFullYear();

const App = () => {
  return (
    <div className="bg-gray-100 text-gray-800 poppins-regular">
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <HeroSection />
      {/* Stats Section */}
      <Stats />
      {/* About Us Section */}
      <AboutUs />

      {/* Treatment Section */}
      <Treatment />

      {/* Products Section */}
      <ProductDemo />

      {/* Client Testimonials */}
      <ClientTestimoni />

      {/* Footer */}
      <footer className="bg-[#334296] py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="src\assets\logo\Palson_Fabrics_Logo-removebg.png" // Replace with your logo
              alt="Palson Fabrics Logo"
              style={{
                filter:
                  "invert(99%) sepia(99%) saturate(0%) hue-rotate(134deg) brightness(102%) contrast(101%)",
              }}
              className="h-12 w-auto mr-3"
            />
            {/* Placeholder for Logo */}
            <img
              src="src\assets\logo\Palson_Fabrics_Name-removebg.png" // Replace with your logo
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
            <a href="#" className="text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Products
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              About Us
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact Us
            </a>
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
    </div>
  );
};

export default App;
