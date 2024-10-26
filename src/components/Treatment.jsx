import treatment from "../data/FabricTreatment";
import HorizontalDiv from "./HorizontalDiv";
import { motion } from "framer-motion";

function Treatment() {
  return (
    <section className="bg-gray-200 py-12">
      <div className="container mx-auto text-center">
        <HorizontalDiv>Treatment</HorizontalDiv>

        <h2 className="text-3xl font-bold mb-20">Fabrics Treatment</h2>
        <div className="flex flex-col justify-center gap-20 mb-8 sm:flex-row">
          {treatment.map((i) => (
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", duration: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              key={i.id}
              className="treat"
            >
              <i
                className={`text-[#3e4d9d] hover:text-[#2f3b7e] ${i.image}`}
              ></i>
              <p className="mt-4 text-center text-lg font-semibold">
                {i.title}
              </p>
              <p className="text-center text-sm text-gray-600">
                {i.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Treatment;
