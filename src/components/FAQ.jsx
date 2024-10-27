import { motion } from "framer-motion";
function FAQ() {
  const faqs = [
    {
      question: "Do you offer international shipping for textile products?",
      answer:
        "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis",
    },
    {
      question: "Do you offer international shipping for textile products?",
      answer:
        "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis",
    },
    {
      question: "Do you offer international shipping for textile products?",
      answer:
        "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis",
    },
    {
      question: "Do you offer international shipping for textile products?",
      answer:
        "Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris dolor molestie suscipit id egestas mauris justo laoreet sed quis",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Heading */}
      <div className="text-center mb-6">
        <div className="flex gap-12 items-center">
          <hr className="border-t-2 border-[#cbd0e4] my-8 w-full hidden md:block" />
          <h2 className="text-4xl font-bold mb-2 md:whitespace-nowrap">
            Frequently Asked Questions
          </h2>
          <hr className="border-t-2 border-[#cbd0e4] my-8 w-full  hidden md:block" />
        </div>
        <p className="text-gray-500 text-sm max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur lacus purus tincidunt mauris
          dolor molestie suscipit id egestas mauris justo laoreet sed quis
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ amount: 0.5, once: true }}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center  pt-4">
              <p className="text-xl font-bold text-gray-800">{faq.question}</p>
              <p className="text-sm text-gray-500 mt-2 sm:mt-0 sm:max-w-xs text-right">
                {faq.answer}
              </p>
            </div>
            {index < 3 && (
              <hr className="border-t-2 border-[#cbd0e4] my-8 w-full" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
