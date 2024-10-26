import Button from "./Button";
import { motion } from "framer-motion";

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
        <Button>
          Collaborate Now <a className=" ml-2 fa-solid fa-arrow-right"></a>
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img
          src="assets/img/fabrics-background.jpg"
          alt="Fabric 1"
          className="w-full h-full object-cover rounded-lg"
          loading="eager"
        />
        <img
          src="assets/img/close-up-smooth-red-fabric.jpg"
          alt="Fabric 2"
          loading="eager"
          className="w-full h-full row-span-2 object-cover rounded-lg"
        />
        <img
          src="assets/img/colorful-knitted-fabric-art-background.jpg"
          alt="Fabric 3"
          loading="eager"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;
