
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Work = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container max-w-5xl py-32 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-display font-bold mb-12"
        >
          Our Work
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Project {
  title: string;
  category: string;
  year: string;
  color: string;
}

const projects: Project[] = [
  {
    title: "Novarra",
    category: "Digital Brand",
    year: "2023",
    color: "bg-[#7B68EE]/20"
  },
  {
    title: "Veltic",
    category: "Web Platform",
    year: "2023",
    color: "bg-[#FF6347]/20"
  },
  {
    title: "Mirium",
    category: "Brand System",
    year: "2022",
    color: "bg-[#32CD32]/20"
  },
  {
    title: "Synergo",
    category: "Mobile App",
    year: "2022",
    color: "bg-[#FFD700]/20"
  }
];

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`${project.color} rounded-xl p-6 aspect-[4/3] flex flex-col justify-end hover:scale-[1.02] transition-transform cursor-pointer`}
    >
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
          <p className="text-white/70">{project.category}</p>
        </div>
        <span className="text-white/50">{project.year}</span>
      </div>
    </motion.div>
  );
};

export default Work;
