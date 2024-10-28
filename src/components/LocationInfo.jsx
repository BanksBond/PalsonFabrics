import { motion } from "framer-motion";

function LocationInfo() {
  return (
    <section className="container mx-auto px-4 lg:px-12 py-12">
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex sm:whitespace-nowrap gap-5 items-center mb-4"
      >
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">
          Visit Our Location
        </h2>
        <hr className="border-t-2 border-[#cbd0e4] my-8 w-full hidden sm:block" />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-gray-600 mb-8 max-w-lg"
      >
        We welcome you to visit our location and experience our offerings
        firsthand. Our team is ready to assist you and provide a personalized
        experience.
      </motion.p>

      {/* Background Image with Overlayed Contact Card */}
      <div className="relative ml-0 lg:ml-10">
        {/* Background Image */}
        <img
          src="https://media.licdn.com/dms/image/v2/D4D12AQHI23wUaSq3Pg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1710949838383?e=1735776000&v=beta&t=IN3YdXOFkdevN6TlSbTlVULDCWkFz7EmDf79F1uMQMo" // Replace with actual image path
          alt="Factory Location"
          className="w-full h-auto object-cover shadow-md "
        />

        {/* Contact Card */}
        <motion.div
          initial={{ scale: 0 }} // Start with a scale of 0
          whileInView={{ scale: 1 }} // Scale to 1 (normal size)
          transition={{ duration: 0.5, delay: 0.4 }} // Animation duration with delay
          viewport={{ once: true }} // Animate once when in view
          className="absolute bottom-0 left-0  bg-white p-4 sm:p-6 shadow-lg w-full max-w-sm sm:max-w-md mx-auto lg:mx-0   transform "
        >
          {/* Address */}
          <p className="text-gray-800 font-semibold text-base sm:text-lg">
            Palson Fabrics Pvt. Ltd., Vasundhra, Ghaziabad, Uttar Pradesh
          </p>

          {/* Contact Us Section */}
          <div className="mt-4">
            <h3 className="text-gray-800 font-medium mb-2">Contact Us</h3>
            <p className="text-gray-500">
              Email:{" "}
              <a
                href="mailto:info@palsonfabrics.com"
                className="text-blue-600 hover:underline"
              >
                info@palsonfabrics.com
              </a>
            </p>
            <div className="flex flex-col sm:flex-row sm:space-x-4 mt-2">
              <p className="text-gray-500">Tel: +91-9312470464</p>
              <p className="text-gray-500">Tel: +91-8299567676</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationInfo;
