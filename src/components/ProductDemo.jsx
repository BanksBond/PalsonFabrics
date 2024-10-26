// import HorizontalDiv from "./HorizontalDiv";
// import products from "../data/products";

// function ProductDemo() {
//   return (
//     <section className="container mx-auto py-12 px-6">
//       <HorizontalDiv button={true}>Products</HorizontalDiv>
//       <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {products.slice(0, 3).map((product) => (
//           <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-[20rem] object-cover rounded-lg"
//             />
//             <p className="mt-4 text-center text-lg font-semibold">
//               {product.name}
//             </p>
//             <p className="text-center text-sm text-gray-600">
//               Code: {product.id}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ProductDemo;

import HorizontalDiv from "./HorizontalDiv";
import products from "../data/products";
import { motion } from "framer-motion";

function ProductDemo() {
  return (
    <section className="container mx-auto py-12 px-6">
      <HorizontalDiv button={true}>Products</HorizontalDiv>
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.slice(0, 3).map((product, index) => (
          <motion.div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-md"
            initial={{ y: 30, opacity: 0 }} // Start slightly below and transparent
            whileInView={{ y: 0, opacity: 1 }} // Move to original position and become visible
            transition={{
              duration: 0.5,
              delay: index * 0.2, // Delay for each product card
            }}
            viewport={{ amount: 0.5, once: true }} // Trigger when 50% is visible
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[20rem] object-cover rounded-lg"
            />
            <p className="mt-4 text-center text-lg font-semibold">
              {product.name}
            </p>
            <p className="text-center text-sm text-gray-600">
              Code: {product.id}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductDemo;
