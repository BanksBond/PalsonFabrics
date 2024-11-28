/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Blurhash } from "react-blurhash";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const ProductsPage = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <>
      <Navbar />
      <HeadingProducts>
        Discover our wide range of products designed to meet your needs. Each
        item is crafted with care, ensuring quality and reliability for our
        customers.
      </HeadingProducts>

      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex flex-wrap gap-[20px] justify-between">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ amount: 0.1, once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="relative w-[255px] h-[255px]">
                <Blurhash
                  hash={product.blurhash}
                  width="100%"
                  height="100%"
                  resolutionX={32}
                  resolutionY={32}
                  punch={1}
                  className="absolute inset-0 z-10"
                />
                <img
                  src={product.image}
                  alt={product.name}
                  onLoad={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.previousElementSibling.style.opacity = "0";
                  }}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 z-20"
                />
              </div>
              <div className="p-4 flex justify-between">
                <h3 className="text-lg font-semibold mb-0">{product.name}</h3>

                <span className="rotate-[315deg] flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full text-gray-700 text-xl ">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;

function HeadingProducts({ children }) {
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
          PRODUCTS
        </h1>
        <div className="md:w-[35%]">
          <p className="text-lg text-gray-600">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}
