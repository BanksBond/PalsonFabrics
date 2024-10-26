import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
function ButtonOutline({ children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: "0.2s", ease: "backInOut" }}
      className="bg-transparent border-[2px] border-[#3e4d9d] text-[#3e4d9d] font-semibold py-2 px-4 whitespace-nowrap rounded-3xl hover:bg-[#3e4d9d] hover:text-white transition duration-300"
    >
      {children}
    </motion.button>
  );
}

export default ButtonOutline;
