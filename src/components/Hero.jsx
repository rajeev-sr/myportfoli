import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "/public/profile.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-10 text-gray-900 bg-white overflow-hidden transition-colors duration-700"
    >
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,50,0.1),_transparent)] pointer-events-none"></div>

      {/* Left Side - Text Content */}
      <div className="z-10 text-center md:text-left">
        {/* Name */}
        <motion.h1
          className="text-6xl font-extrabold text-blue-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Rajeev Kumar
        </motion.h1>

        {/* Typewriter Effect for Dynamic Titles */}
        <h2 className="mt-4 text-3xl font-semibold text-gray-700">
          <Typewriter
            words={[
              "Data Scientist",
              "Full-Stack Developer",
              "Competitive Programmer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        {/* Description */}
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          <span className="block">
            Expertise in Competitive Programming, Web Development & 
          </span>
          <span className="block">
            Statistical Analysis. Passionate about AI & data-driven solutions.
          </span>
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
          <motion.a
            href="https://drive.google.com/file/d/1Gsq2Bd62H9DZ-4ey1fS5TDbb1RE4f9Na/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Download Resume
          </motion.a>

          <motion.a
            href="#skills"
            className="px-6 py-3 border border-blue-600 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition-all"
            whileHover={{ scale: 1.1 }}
          >
            View Skills
          </motion.a>
        </div>
      </div>

      {/* Right Side - Profile Image */}
      <motion.div
        className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg flex items-center justify-center bg-gray-200"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <img
          src={profileImage}
          alt="Profile"
          className="w-full h-full object-cover object-[20%_top]"
        />
      </motion.div>

      {/* Floating Glow Effect */}
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
      />
    </section>
  );
};

export default Hero;
