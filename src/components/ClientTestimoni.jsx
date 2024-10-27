import { motion } from "framer-motion";
import Button from "./Button";
import HorizontalDiv from "./HorizontalDiv";
import OurClients from "./OurClients";

function ClientTestimoni() {
  return (
    <section className="container mx-auto bg-gray-100 py-12 px-6">
      <HorizontalDiv button={false}>Our Clients</HorizontalDiv>
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-8"
          initial={{ y: 30, opacity: 0 }} // Start slightly below and transparent
          whileInView={{ y: 0, opacity: 1 }} // Move to original position and become visible
          transition={{ duration: 0.5 }} // Animation duration
          viewport={{ once: true }} // Animate once when in view
        >
          What People Say about Us?
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 max-w-2xl mx-auto"
          initial={{ y: 30, opacity: 0 }} // Start slightly below and transparent
          whileInView={{ y: 0, opacity: 1 }} // Move to original position and become visible
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration with delay
          viewport={{ once: true }} // Animate once when in view
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
          pulvinar orci. Phasellus fringilla, eros at consectetur accumsan,
          metus eros pellentesque eros, vel placerat lorem mi ac purus.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }} // Start with a scale of 0
          whileInView={{ scale: 1 }} // Scale to 1 (normal size)
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with delay
          viewport={{ once: true }} // Animate once when in view
        >
          <Button navTo="/contact" style="mt-6">
            Contact Us
          </Button>
        </motion.div>

        <OurClients />
      </div>
    </section>
  );
}

export default ClientTestimoni;
