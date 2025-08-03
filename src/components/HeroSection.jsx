import Button from "./Button";
import { motion } from "framer-motion";
import FabricGrid from "./FabricGrid";

function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="container mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div className="space-y-4 flex flex-col items-start justify-center gap-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          ONE OF THE LEADING TEXTILE MANUFACTURER IN INDIA
        </h1>
        <p className="text-lg text-gray-600">
          In our woven realm, innovation meets luxury. We transcend
          functionality, becoming timeless art. Experience craftsmanship at its
          finest.
        </p>
        <Button navTo="/contact">
          Collaborate Now <a className=" ml-2 fa-solid fa-arrow-right"></a>
        </Button>
      </div>

      <FabricGrid />
    </motion.section>
  );
}

export default HeroSection;
