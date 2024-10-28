import { motion } from "framer-motion";
function FAQ() {
  const faqs = [
    {
      question: "Do you offer international shipping for textile products?",
      answer:
        "Yes, we offer international shipping for our textile products. Shipping costs and delivery times vary by destination, so please check our shipping policy for detailed information.",
    },
    {
      question: "What is the quality of your textile products?",
      answer:
        "Absolutely! We pride ourselves on providing high-quality textile products that meet rigorous standards. Each item undergoes thorough quality checks before shipment.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We understand that sometimes things don’t work out. You can return products within 30 days of receipt for a full refund, provided they are unused and in their original packaging.",
    },
    {
      question: "Do you offer customization options for your products?",
      answer:
        "Yes, we offer customization options for many of our textile products. Please contact our customer service for specific requirements and available options.",
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
          At Palson Fabrics, we value your questions and concerns. This section
          addresses some of the most common inquiries about our products and
          services. We aim to provide you with the clarity you need for an
          informed experience.
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
              <p className="text-md text-gray-500 mt-2 sm:mt-0 sm:max-w-xs text-right">
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
