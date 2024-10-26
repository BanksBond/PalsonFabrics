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
          src="https://img.freepik.com/free-photo/fabrics-background_87358-120.jpg?t=st=1729685637~exp=1729689237~hmac=8ac4be57d271770f75478ea6e3b7f69c6af344e0ca25f9ed4ba592980f1410b5&w=1380"
          alt="Fabric 1"
          className="w-full h-full object-cover rounded-lg"
          loading="eager"
        />
        <img
          src="https://img.freepik.com/free-photo/close-up-smooth-red-fabric_23-2147921512.jpg?t=st=1729685450~exp=1729689050~hmac=16a7b6de82d8b553c513f983a8609f5f6fd475c79dc3002a03037ca6fe39cd03&w=740"
          alt="Fabric 2"
          loading="eager"
          className="w-full h-full row-span-2 object-cover rounded-lg"
        />
        <img
          src="https://img.freepik.com/free-photo/colorful-knitted-fabric-art-background_58702-1814.jpg?t=st=1729685817~exp=1729689417~hmac=149dc11c5cdf5526d71117f213071fb286e71f47275c262406604967f8bf6ed5&w=1380"
          alt="Fabric 3"
          loading="eager"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </motion.section>
  );
}

export default HeroSection;
