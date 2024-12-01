// import { useState } from "react";
// import Button from "./Button";

// function ContactForm() {
//   // State variables for form data
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "IN",
//     message: "",
//     service: "",
//   });

//   // Handler to update form data
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Form submission handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can send formData to a server or API
//     console.log("Form submitted:", formData);
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleSubmit}>
//       {/* Name Field */}
//       <div>
//         <label
//           className="block text-gray-700 font-semibold text-sm mb-2"
//           htmlFor="name"
//         >
//           Name
//         </label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Your name"
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//         />
//       </div>

//       {/* Email Field */}
//       <div>
//         <label
//           className="block text-gray-700 font-semibold text-sm mb-2"
//           htmlFor="email"
//         >
//           Email
//         </label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           placeholder="you@company.com"
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//         />
//       </div>

//       {/* Phone Number Field */}
//       <div>
//         <label
//           className="block text-gray-700 font-semibold text-sm mb-2"
//           htmlFor="phone"
//         >
//           Phone number
//         </label>
//         <div className="flex">
//           <select
//             name="country"
//             value={formData.country}
//             onChange={handleChange}
//             className="border border-gray-300 rounded-l-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           >
//             <option value="US">US</option>
//             <option value="IN">IN</option>
//             <option value="UAE">UAE</option>
//           </select>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={formData.phone}
//             onChange={handleChange}
//             placeholder="+1 (555) 000-0000"
//             className="w-full border-t border-r border-b border-gray-300 rounded-r-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           />
//         </div>
//       </div>

//       {/* Message Field */}
//       <div>
//         <label
//           className="block text-gray-700 font-semibold text-sm mb-2"
//           htmlFor="message"
//         >
//           How can we help?
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Tell us a little about the project..."
//           className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
//           rows="4"
//         ></textarea>
//       </div>

//       {/* Radio Button Section */}
//       <fieldset>
//         <legend className="text-gray-700 font-semibold text-sm mb-2">
//           Services
//         </legend>
//         <div className="flex flex-wrap gap-4">
//           {[
//             "Business department",
//             "Personal department",
//             "Support department",
//             "Other",
//           ].map((service) => (
//             <label key={service} className="flex items-center space-x-2">
//               <input
//                 type="radio"
//                 name="service"
//                 value={service}
//                 checked={formData.service === service}
//                 onChange={handleChange}
//                 className="text-blue-500"
//               />
//               <span className="text-gray-600 font-semibold">{service}</span>
//             </label>
//           ))}
//         </div>
//       </fieldset>

//       {/* Submit Button */}
//       <Button type="submit" style="w-full">
//         Get Started
//       </Button>
//     </form>
//   );
// }

// export default ContactForm;

import { useState } from "react";
import emailjs from "emailjs-com";
import Button from "./Button";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "IN",
    message: "",
    service: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use EmailJS to send the form data
    emailjs
      .send(
        "service_qboozxs", // Replace with your Service ID
        "template_h2jxfj9", // Replace with your Template ID
        formData,
        "5b0m5N40-eIKH764r" // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your message was sent successfully!");
          setErrorMessage("");
          setIsSubmitting(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            country: "IN",
            message: "",
            service: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setErrorMessage("Something went wrong. Please try again.");
          setSuccessMessage("");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {/* Name Field */}
      <div>
        <label
          className="block text-gray-700 font-semibold text-sm mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          className="block text-gray-700 font-semibold text-sm mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Other Fields */}
      {/* Include other fields (phone, country, message, radio buttons) as in your existing code */}

      {/* Phone Number Field */}
      <div>
        <label
          className="block text-gray-700 font-semibold text-sm mb-2"
          htmlFor="phone"
        >
          Phone number
        </label>
        <div className="flex">
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="border border-gray-300 rounded-l-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          >
            <option value="US">US</option>
            <option value="IN">IN</option>
            <option value="UAE">UAE</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full border-t border-r border-b border-gray-300 rounded-r-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>
      </div>

      {/* Message Field */}
      <div>
        <label
          className="block text-gray-700 font-semibold text-sm mb-2"
          htmlFor="message"
        >
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us a little about the project..."
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
          rows="4"
        ></textarea>
      </div>

      {/* Radio Button Section */}
      <fieldset>
        <legend className="text-gray-700 font-semibold text-sm mb-2">
          Services
        </legend>
        <div className="flex flex-wrap gap-4">
          {[
            "Business department",
            "Personal department",
            "Support department",
            "Other",
          ].map((service) => (
            <label key={service} className="flex items-center space-x-2">
              <input
                type="radio"
                name="service"
                value={service}
                checked={formData.service === service}
                onChange={handleChange}
                className="text-blue-500"
              />
              <span className="text-gray-600 font-semibold">{service}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Submit Button */}
      <Button type="submit" style="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Started"}
      </Button>

      {/* Success/Error Messages */}
      {successMessage && (
        <p className="text-green-600 mt-2 font-semibold">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-red-600 mt-2 font-semibold">{errorMessage}</p>
      )}
    </form>
  );
}

export default ContactForm;
