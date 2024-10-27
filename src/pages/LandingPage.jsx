import AboutUs from "../components/AboutUs";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import Treatment from "../components/Treatment";
import ProductDemo from "../components/ProductDemo";
import ClientTestimoni from "../components/ClientTestimoni";
import Footer from "../components/Footer";

function LandingPage() {
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
      <Footer />
    </div>
  );
}

export default LandingPage;
