import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => {
      setStatus("Message Sent Successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center p-10 bg-[#0A192F] text-white"
    >
      <motion.h2
        className="text-5xl font-bold text-center text-white mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📩 Contact Me
      </motion.h2>

      <motion.div
        className="w-full max-w-lg p-8 bg-[#112240] bg-opacity-70 backdrop-blur-md rounded-2xl shadow-lg border border-[#64ffda] relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-40 text-black rounded-lg border border-transparent placeholder-gray-700 focus:ring-2 focus:ring-[#64ffda] focus:outline-none backdrop-blur-lg shadow-md transition-all"
            required
            whileFocus={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.5)",
            }}
          />

          {/* Email Input */}
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-40 text-black rounded-lg border border-transparent placeholder-gray-700 focus:ring-2 focus:ring-[#64ffda] focus:outline-none backdrop-blur-lg shadow-md transition-all"
            required
            whileFocus={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.5)",
            }}
          />

          {/* Message Input */}
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 bg-white bg-opacity-40 text-black rounded-lg border border-transparent placeholder-gray-700 focus:ring-2 focus:ring-[#64ffda] focus:outline-none backdrop-blur-lg shadow-md transition-all"
            rows="4"
            required
            whileFocus={{
              scale: 1.05,
              boxShadow: "0px 0px 15px rgba(100, 255, 218, 0.5)",
            }}
          />

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-[#64ffda] to-[#52e6c5] text-[#0A192F] font-bold p-3 rounded-lg shadow-md hover:shadow-lg transition-all backdrop-blur-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(100, 255, 218, 0.7)",
            }}
          >
            Send Message 🚀
          </motion.button>
        </form>

        {status && <p className="mt-4 text-center text-[#64ffda]">{status}</p>}
      </motion.div>
    </section>
  );
};

export default Contact;
