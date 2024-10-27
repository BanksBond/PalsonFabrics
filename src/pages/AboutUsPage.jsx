import Navbar from "../components/Navbar";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import OurClients from "../components/OurClients";
import Features from "../components/Features";
import LocationInfo from "../components/LocationInfo";
import Footer from "../components/Footer";
const timelineData = [
  {
    year: "2002",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/uCufg6Ks1fopkUgZBCDL8DdfsBuVYKtMmadMqo3SVyF0T6VnA.jpg",
    alt: "Person working on a machine",
    description:
      "In 2002, the company was founded with the mission to provide high-quality fabrics to local and international markets. Our journey began in a small facility, with a team of dedicated craftsmen focused on delivering quality and innovation.",
  },
  {
    year: "2005",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/feyfdpLhSRH3bpJWZ2ahv6mcRj6imZnFR2YejTV5QDHgn0rOB.jpg",
    alt: "Stack of colorful fabrics",
    description:
      "By 2005, the company expanded its operations, investing in state-of-the-art machinery and eco-friendly production techniques. This year marked our first major international shipment, opening doors to a global market.",
  },
  {
    year: "2010",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/MfRlrL3fOSlfKIsxdKfe7zHelzaU3E5HhEsS7er0kpd87keqTA.jpg",
    alt: "Close-up of fabric texture",
    description:
      "2010 was a year of rapid growth. We launched our first flagship store and expanded our product range to include diverse textile offerings, catering to a broader customer base and gaining recognition as a trusted fabric supplier.",
  },
  {
    year: "2015",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/PSwZ3jeOu6XzKSpzk3fmKmS1DwTjbSqFzfQITinpSNA8T6VnA.jpg",
    alt: "Rolls of fabric in a factory",
    description:
      "With a commitment to innovation, 2015 saw us implementing sustainable practices across all stages of production. This year, we became a certified green company, dedicated to reducing our carbon footprint and promoting environmental responsibility.",
  },
  {
    year: "2018",
    imgSrc:
      "https://storage.googleapis.com/a1aa/image/6FVCLRsDMWaEHNwVellezoM2VDdtgPQblfCE97lf2thtn0rOB.jpg",
    alt: "Rolls of different colored fabrics",
    description:
      "In 2018, we celebrated our company’s success and growth by launching a new collection that combined traditional craftsmanship with modern design trends. Our brand reached new heights, establishing partnerships with leading fashion houses worldwide.",
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-800 poppins-regular">
      <Navbar />
      <HeadingAbout>
        Palson Fabrics specializes in crafting bespoke solutions for office
        furniture and home interiors, blending quality fabrics with innovative
        design. With a commitment to style, comfort, and functionality, we cater
        to diverse tastes and preferences, ensuring every space is transformed
        into a personalized haven of elegance and efficiency.
      </HeadingAbout>

      <div className="container mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-8">Our Story</h2>
        <div className="relative">
          {/* Main vertical line for larger screens */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-[#8891bd] hidden md:block"></div>

          <div className="hidden sm:block absolute left-1/2 top-[10%] w-[200px] border-t-2 border-[#8891bd]"></div>
          <div className="hidden sm:block absolute right-1/2 top-[30%] w-[200px] border-t-2 border-[#8891bd]"></div>
          <div className="hidden sm:block absolute left-1/2 top-1/2 w-[200px] border-t-2 border-[#8891bd]"></div>
          <div className="hidden sm:block absolute right-1/2 top-[70%] w-[200px] border-t-2 border-[#8891bd]"></div>
          <div className="hidden sm:block absolute left-1/2 top-[90%] w-[200px] border-t-2 border-[#8891bd]"></div>

          {/* Timeline Section */}
          <div className="space-y-12 md:space-y-0">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center w-full mb-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {index % 2 === 0 ? (
                  <>
                    <motion.div
                      className="w-full md:w-1/2 pr-0 md:pr-8 order-2 md:order-1"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </motion.div>

                    <motion.div
                      className="z-20 w-full md:w-1/2 mb-4 md:mb-0 order-1 md:order-2"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <img
                        alt={item.alt}
                        className="rounded-lg shadow-lg mx-auto"
                        height="300"
                        src={item.imgSrc}
                        width="400"
                      />
                    </motion.div>
                  </>
                ) : (
                  <>
                    <motion.div
                      className="z-20 w-full md:w-1/2 mb-4 md:mb-0"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <img
                        alt={item.alt}
                        className="rounded-lg shadow-lg mx-auto"
                        height="300"
                        src={item.imgSrc}
                        width="400"
                      />
                    </motion.div>

                    <motion.div
                      className="w-full md:w-1/2 pl-0 md:pl-8"
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <h3 className="text-xl font-bold mb-2">{item.year}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                    </motion.div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Stats />
      <Features />
      <div className="flex gap-12 justify-center items-center my-10">
        <hr className="border-t-2 border-[#cbd0e4] my-8 w-full hidden sm:block" />
        <h2 className="text-4xl font-bold mb-2 sm:whitespace-nowrap">
          Our Clients
        </h2>
        <hr className="border-t-2 border-[#cbd0e4] my-8 w-full  hidden sm:block" />
      </div>
      <OurClients />
      <LocationInfo />
      <Footer />
    </div>
  );
};

export default AboutUs;

// eslint-disable-next-line react/prop-types
function HeadingAbout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#e9f0f6]"
    >
      <div className="container mx-auto py-28 px-6 flex flex-col gap-10 md:flex-row items-center justify-between">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          About Us
        </h1>
        <div className="md:w-[35%]">
          <p className="text-lg text-gray-600">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}
