import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import { getFliers } from "../sanity/client";
import { HeadingDetail } from "./ProductDetail";

const cardVariants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.3, duration: 0.8 },
  },
  hover: {
    y: -8,
    boxShadow: "0px 20px 30px rgba(0,0,0,0.15)",
    transition: { duration: 0.4 },
  },
  tap: { scale: 0.97, transition: { duration: 0.1 } },
};

const FliersPage = () => {
  const [fliers, setFliers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getFliers()
      .then(setFliers)
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <HeadingDetail name="Fliers">
        Discover our latest collection of downloadable fliers—carefully crafted
        to showcase new arrivals, special offers, and upcoming events. You’ll
        find a variety of ready-to-share PDFs here. Click on any flier to
        download instantly and spread the word.
      </HeadingDetail>

      <div className={`flex justify-center flex-wrap gap-16 px-6 py-5`}>
        {isLoading && !fliers.length ? (
          <Loader />
        ) : (
          fliers.map((flier, idx) => (
            <motion.div
              key={flier._id || idx}
              className="bg-white rounded-2xl w-[360px] overflow-hidden shadow-md cursor-pointer"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              whileTap="tap"
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="relative w-full h-60 overflow-hidden">
                <motion.img
                  src="assets/img/pdf-image.png"
                  alt={flier.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>

              <motion.div
                className="p-4 flex flex-col justify-between h-48"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, transition: { delay: 0.4 } }}
              >
                <div className="flex justify-between gap-6">
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold mb-2">
                      {flier.title}
                    </h3>
                    <p className="text-sm text-gray-600 flex-grow">
                      {flier.description}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs whitespace-nowrap shadow-md rounded-xl bg-red-700 font-semibold text-white p-1 px-1.5 pb-1.5">
                      {flier.category}
                    </span>
                  </div>
                </div>
                <a
                  href={flier.fileUrl}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center "
                >
                  <Button style="w-[90%]">Download PDF</Button>
                </a>
              </motion.div>
            </motion.div>
          ))
        )}
      </div>

      <Footer />
    </>
  );
};

export default FliersPage;
