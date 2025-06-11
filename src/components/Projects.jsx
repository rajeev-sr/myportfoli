import { motion } from "framer-motion";
import githubLogo from "/public/github-logo.png";

const projects = [
  {
    title: "Cricket Player Selection-Based Web App",
    description:
      "A web app that predicts the best players for the Indian team based on multiple performance metrics.",
    keyPoints: [
      "Used Random Forest, XGBoost, and Neural Networks for predictions.",
      "Developed with React.js and FastAPI.",
      "Created interactive dashboards for decision-making.",
    ],
    github: "https://github.com/rajeev-sr/cricket_basedweb_App",
  },
  {
    title: "Analyzing Student Engagement with Reels",
    description:
      "A data-driven project analyzing student engagement with short-form video content.",
    keyPoints: [
      "Collected and processed data from surveys and online sources.",
      "Performed statistical analysis using Scikit-learn and Seaborn.",
      "Identified behavioral patterns in student engagement with reels.",
    ],
    github: "https://github.com/rajeev-sr/story-telling-with-data",
  },
  {
    title: "Advanced Statistical Analysis on Diverse Datasets",
    description:
      "Explored probability distributions, entropy calculations, and signal analysis on various datasets.",
    keyPoints: [
      "Applied SciPy, NumPy, and Pandas for complex data transformations.",
      "Visualized insights using Matplotlib.",
    ],
    github: "https://github.com/rajeev-sr/StatisticalProgramming",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 p-10 text-white">
      <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-600 hover:border-blue-400 transition-all"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold text-blue-400">{project.title}</h3>
            <p className="mt-2 text-gray-300">{project.description}</p>
            <ul className="mt-4 space-y-2">
              {project.keyPoints.map((point, i) => (
                <li key={i} className="text-gray-400 text-sm flex items-start">
                  <span className="mr-2 text-blue-400">●</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center gap-2 text-green-400 font-semibold hover:text-green-500 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img src={githubLogo} alt="GitHub" className="w-6 h-6" />
              <span>View on GitHub</span>
            </motion.a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
