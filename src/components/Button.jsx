import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
function Button({ children, style }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: "0.2s", ease: "backInOut" }}
      className={` ${style} bg-[#3e4d9d] text-white font-semibold px-6 py-3 rounded-3xl hover:bg-[#232f77] transition duration-300`}
    >
      {children}
      {/* Collaborate Now <a className=" ml-2 fa-solid fa-arrow-right"></a> */}
    </motion.button>
  );
}

export default Button;
