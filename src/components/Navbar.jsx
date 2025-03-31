import { motion } from "framer-motion";

const Navbar = () => {
  const sections = ["Home", "Skills", "Projects", "Achievements", "Contact"];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full bg-white bg-opacity-80 backdrop-blur-md shadow-md p-4 flex justify-center space-x-8 z-50"
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase()}`}
          className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition"
        >
          {section}
        </a>
      ))}
    </motion.nav>
  );
};

export default Navbar;
