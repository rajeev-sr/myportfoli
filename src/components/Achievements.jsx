import { motion } from "framer-motion";

const achievements = [
  { title: "🏆 Codeforces (Pupil)", description: "Max Rating: 1342" },
  { title: "🔥 CodeChef (3 Star)", description: "Max Rating: 1604" },
  { title: "💡 LeetCode", description: "Solved over 200 problems" },
  { title: "🥇 CodeCrusade Winner", description: "Intra-college coding competition at IIT Bhilai" },
  { title: "🚀 AIR 62 - HPE CodeWars 2022", description: "" },
  { title: "📊 JEE Main", description: "Scored 99.06 percentile" },
  { title: "🎓 JEE Advanced", description: "Qualified" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-16 p-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">🏅 Achievements</h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {achievements.map((ach, index) => (
          <motion.div key={index} className="p-6 bg-gray-800 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold text-blue-400">{ach.title}</h3>
            <p className="text-gray-300">{ach.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Achievements;
