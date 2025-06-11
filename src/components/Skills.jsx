import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  // Programming
  { name: "Python", category: "Programming", icon: "🐍" },
  { name: "JavaScript", category: "Programming", icon: "🟨" },
  { name: "C++", category: "Programming", icon: "🔵" },

  // Web Development
  { name: "React.js", category: "Web Development", icon: "⚛️" },
  { name: "Next.js", category: "Web Development", icon: "🚀" },
  { name: "Node.js", category: "Web Development", icon: "🌿" },
  { name: "Express.js", category: "Web Development", icon: "🔗" },

  // Data Science
  { name: "Pandas", category: "Data Science", icon: "🐼" },
  { name: "NumPy", category: "Data Science", icon: "📊" },
  { name: "Scikit-learn", category: "Data Science", icon: "🤖" },
  { name: "TensorFlow", category: "AI & ML", icon: "🧠" },

  // Competitive Programming
  { name: "Codeforces 1342", category: "Competitive Programming", icon: "🏆" },
  { name: "CodeChef 1604", category: "Competitive Programming", icon: "🔥" },

  // DevOps & Cloud (Highlighted Section)
  { name: "AWS", category: "DevOps & Cloud", icon: "☁️" },
  { name: "Cloudflare", category: "DevOps & Cloud", icon: "🌍" },
  { name: "Linux", category: "DevOps & Cloud", icon: "🐧" },
];

const Skills = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section 
      id="skills"
      ref={ref}
      className="min-h-screen p-10 text-white"
    >
      {/* Section Title Animation */}
      <motion.h2 
        className="text-5xl font-bold text-center text-green-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
         My Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className={`relative bg-gray-800 p-5 rounded-lg shadow-lg flex flex-col items-center text-center 
                      transition transform hover:scale-105 ${
                        skill.category === "DevOps & Cloud" ? "border border-green-400 shadow-green-400" : "border border-gray-700"
                      }`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* DevOps Glowing Effect */}
            {skill.category === "DevOps & Cloud" && (
              <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-pulse border-green-500"></div>
            )}

            {/* Skill Icon */}
            <div className="text-5xl">{skill.icon}</div>

            {/* Skill Name */}
            <h3 className="mt-3 text-xl font-semibold">{skill.name}</h3>

            {/* Skill Category */}
            <p className="text-sm text-gray-400">{skill.category}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
