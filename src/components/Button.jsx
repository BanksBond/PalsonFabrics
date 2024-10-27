import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Button({ children, style, navTo, type }) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(navTo);
  };
  return (
    <motion.button
      type={type}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      transition={{ duration: "0.2s", ease: "backInOut" }}
      onClick={handleButtonClick}
      className={` ${style} bg-[#3e4d9d] text-white font-semibold px-6 py-3 rounded-3xl hover:bg-[#232f77] transition duration-300`}
    >
      {children}
    </motion.button>
  );
}

export default Button;
