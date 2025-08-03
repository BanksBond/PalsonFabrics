import { motion } from "framer-motion";
import Button from "./Button";
import ButtonOutline from "./ButtonOutline";
import HorizontalDiv from "./HorizontalDiv";

function AboutUs() {
  return (
    <section className="container mx-auto py-12 px-6">
      <HorizontalDiv>About Us</HorizontalDiv>

      <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-[10%] mt-8">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Story</h2>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            At Palson Fabrics, our journey began with a simple yet profound
            vision: to bring the beauty of textiles to life. Founded by
            passionate artisans, we are dedicated to crafting high-quality
            fabrics that celebrate tradition while embracing innovation. Each
            piece in our collection tells a story, woven with care and
            precision, reflecting the rich heritage of our craft.
          </p>

          <div className="relative w-full h-full max-h-[500px] overflow-hidden">
            <img
              src="assets/img/17_Sea_Runners_Front_spill_02_800x.webp"
              alt="Fabric Image"
              className="rounded-md shadow-lg object-cover w-full h-auto sm:w-full"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 flex flex-col justify-between"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="hidden w-full h-full max-h-[500px] lg:block">
            <img
              src="assets/img/aplomo.academy.jpg"
              alt="Hands Image"
              className="rounded-md shadow-lg object-cover w-full h-full"
              loading="lazy"
            />
          </div>

          <p className="text-gray-600 text-lg mb-6 leading-relaxed mt-6">
            Our commitment to sustainability drives us to source materials
            responsibly, ensuring that every yard of fabric is not only
            beautiful but also environmentally friendly. From vibrant prints to
            elegant weaves, our fabrics are designed to inspire creativity in
            every project, whether for fashion, home décor, or bespoke
            creations.
          </p>

          <div className="flex space-x-4">
            <Button navTo="/about">About Us</Button>
            <ButtonOutline navTo="/fliers">Download Our Flier</ButtonOutline>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
