import { motion } from "framer-motion";
import ButtonOutline from "./ButtonOutline";

// eslint-disable-next-line react/prop-types
function HorizontalDiv({ children, button }) {
  return (
    <div className="flex flex-row items-center gap-5 text-[#3e4d9d]">
      <h3 className="text-2xl font-semibold whitespace-nowrap">{children}</h3>

      {/* Animated hr */}
      <motion.hr
        className="border-t-2 border-[#cbd0e4] my-8 w-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />

      {button && (
        <ButtonOutline navTo="/products">Check all products</ButtonOutline>
      )}
    </div>
  );
}

export default HorizontalDiv;
