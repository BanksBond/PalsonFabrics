import ContactForm from "../components/ContactForm";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import LocationInfo from "../components/LocationInfo";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

function ContactPage() {
  return (
    <div className="bg-gray-100 text-gray-800 poppins-regular">
      <Navbar />

      <HeadingContact />

      <section className="container mx-auto flex flex-col lg:flex-row items-center pb-4 lg:py-12 px-6 lg:px-12">
        {/* Left Section - Image */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:w-1/2 w-full"
        >
          <img
            src="assets/img/Yarns.png" // Replace with your actual image path
            alt="Yarn Spools"
            className="w-full h-auto object-cover rounded-lg "
          />
        </motion.div>

        {/* Right Section - Form */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:w-1/2 w-full lg:pl-16 mt-8 lg:mt-0"
        >
          {/* Title */}
          <h2 className="text-5xl font-bold text-gray-800 mb-2">
            Let’s level up your industry, together
          </h2>
          <p className="text-gray-500 mb-8">
            You can reach us anytime via{" "}
            <span className="font-semibold">info@palsonfabrics.com</span>
          </p>

          {/* Form */}
          <ContactForm />
        </motion.div>
      </section>
      <FAQ />
      <LocationInfo />
      <Footer />
    </div>
  );
}

export default ContactPage;

function HeadingContact() {
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
          CONTACT US
        </h1>
        <div className="md:w-[35%]">
          <p className="text-lg text-gray-600">
            Get in touch with us! We&apos;re here to answer your questions and
            provide support. Don&apos;t hesitate to reach out via phone, email,
            or our contact form.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
