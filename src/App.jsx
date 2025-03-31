import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Chatbot from "./components/Chatbot"; // Import the Chatbot component
import "./index.css";

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Chatbot /> {/* Add the chatbot */}
    </div>
  );
}

export default App;
