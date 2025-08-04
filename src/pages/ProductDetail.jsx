import { useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Button from "../components/Button";

// eslint-disable-next-line react/prop-types
const ProductDetail = ({ products }) => {
  const { id } = useParams();
  // eslint-disable-next-line react/prop-types
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  // eslint-disable-next-line no-unused-vars
  const [isZoomed, setIsZoomed] = useState(false);

  // NEW state for modal
  const [modalOpen, setModalOpen] = useState(false);

  if (!product) return <div>Product not found</div>;

  const selectColor = (color) => {
    setSelectedColor(color);
    setIsZoomed(false); // Reset zoom on color change
  };

  return (
    <section className="poppins-regular">
      <Navbar />
      <HeadingDetail name={product.name}>
        Experience unmatched comfort and durability with our premium fabric—soft
        to the touch, fade-resistant, and perfect for both home décor and
        apparel.
      </HeadingDetail>
      <div className="container mx-auto py-12 px-6">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-12 p-4">
          {/* Color Options */}
          <div className="colors-list bg-gray-100 rounded-lg shadow-sm flex flex-wrap gap-4 h-72 overflow-y-auto lg:h-[70vh] lg:w-1/2">
            {product.colors.map((colorObj, index) => (
              <div
                key={index}
                className={`color-card w-32 h-40 flex flex-col items-center text-center p-3 border rounded-lg shadow-md ${
                  selectedColor === colorObj.name
                    ? "border-2 border-black bg-gray-100"
                    : "border-gray-300 bg-white"
                } cursor-pointer transform transition-transform duration-300 hover:scale-105`}
                onClick={() => selectColor(colorObj.name)}
              >
                <div className="w-24 h-24 overflow-hidden rounded-md">
                  <img
                    src={colorObj.image}
                    alt={`Color ${colorObj.color}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h5 className="font-semibold mt-2 text-gray-700">
                  {colorObj.name}
                </h5>
              </div>
            ))}
          </div>

          {/* Selected Color and Image Preview */}
          <div className="selected-color mt-4 lg:mt-0 lg:w-1/2 flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Selected Variant: {selectedColor}
            </h3>
            <div className="cursor-zoom-in" onClick={() => setModalOpen(true)}>
              <img
                src={product.colors.find((c) => c.name === selectedColor).image}
                alt={selectedColor}
                className="max-w-full max-h-64 lg:max-h-96 rounded transition-transform duration-300 hover:scale-105"
              />
            </div>
            <button className="mt-8 py-2 px-6 text-lg font-semibold border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-300">
              Download <i className="fa-solid fa-download"></i>
            </button>
          </div>
        </div>

        <div className="specs mt-20 mb-16 px-4 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Technical Specifications
          </h2>
          {product.specs.map((obj, specIndex) => (
            <div key={specIndex} className="spec-group mb-6 p-4  bg-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column */}
                <div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">Range</h4>
                    <p className="text-gray-600">{obj.range}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Content
                    </h4>
                    <p className="text-gray-600">{obj.content}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">Weight</h4>
                    <p className="text-gray-600">{obj.weight}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Abrasion Resistance
                    </h4>
                    <p className="text-gray-600">{obj.abrasion_resistance}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Color Fastness
                    </h4>
                    <p className="text-gray-600">{obj.colour_fastness}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Suitable For
                    </h4>
                    <p className="text-gray-600">{obj.suitable_for}</p>
                  </div>
                </div>

                {/* Right Column */}
                <div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Color Matching
                    </h4>
                    <p className="text-gray-600">{obj.colour_matching}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Cleaning
                    </h4>
                    <p className="text-gray-600">{obj.cleaning}</p>
                  </div>
                  <div className="spec mb-2 flex">
                    <h4 className="font-semibold text-gray-700 w-40">
                      Flammability
                    </h4>
                    <p className="text-gray-600 whitespace-pre-line">
                      {obj.flammability.join("\n")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {modalOpen && (
        <ImageModal
          src={product.colors.find((c) => c.name === selectedColor).image}
          alt={selectedColor}
          onClose={() => setModalOpen(false)}
        />
      )}
    </section>
  );
};

export default ProductDetail;

// eslint-disable-next-line react/prop-types
function ImageModal({ src, alt, onClose }) {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => setZoom((z) => Math.min(z + 0.2, 3));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.2, 1));

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) =>
          e.stopPropagation()
        } /* prevent closing when clicking on controls */
      >
        {/* Zoom Controls */}
        <div className="absolute bottom-2 right-[33%] flex gap-2 z-10">
          <Button onClick={zoomOut} style=" rounded-full p-2 shadow">
            –
          </Button>
          <Button onClick={zoomIn} style=" rounded-full p-2 shadow">
            +
          </Button>
        </div>

        {/* The Zoomable Image */}
        <motion.img
          src={src}
          alt={alt}
          style={{ originX: 0.5, originY: 0.5 }}
          animate={{ scale: zoom }}
          className="max-w-[90vw] max-h-[80vh] rounded"
        />
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
export function HeadingDetail({ children, name }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-[#e9f0f6]"
    >
      <div className="container mx-auto py-28 px-6 flex flex-col gap-10 md:flex-row items-center justify-between">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">{name}</h1>
        <div className="md:w-[35%]">
          <p className="text-lg text-gray-600">{children}</p>
        </div>
      </div>
    </motion.div>
  );
}
