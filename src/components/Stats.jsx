import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Counter = ({ end, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 800; // 2 seconds
    const increment = end / (duration / 10);

    const counter = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        if (newCount >= end) {
          clearInterval(counter);
          return end;
        }
        return newCount;
      });
    }, 10);

    return () => clearInterval(counter);
  }, [end]);

  return (
    <div className="w-1/2 md:w-auto py-4">
      <h2 className="text-3xl font-bold">
        {Math.floor(count)}
        <span className="text-[#3e4d9d]">+</span>
      </h2>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

function Stats() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="bg-white py-12"
    >
      <div className="container mx-auto flex flex-wrap justify-around text-center bg-gray-50 shadow-lg rounded-full px-8 py-8">
        <Counter end={25} label="Years of Experience" />
        <Counter end={3} label="Export Destinations" />
        <Counter end={29} label="Successful Deals" />
        <Counter end={400} label="Satisfied Clients" />
      </div>
    </motion.section>
  );
}

export default Stats;
