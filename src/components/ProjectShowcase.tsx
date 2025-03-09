
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  bgColor: string;
}

const ProjectCard = ({ title, description, image, tags, bgColor }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className={`rounded-3xl overflow-hidden ${bgColor} p-8 pb-0 flex flex-col h-full`}
    >
      <div className="mb-6">
        <h3 className="text-3xl md:text-4xl font-bold mb-2">{title}</h3>
        <p className="text-sm md:text-base text-foreground/70">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="bg-background/10 border-transparent text-foreground backdrop-blur-sm"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>
      
      <div className="mt-auto">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover rounded-t-lg translate-y-2 shadow-xl" 
        />
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  return (
    <div id="project-showcase" className="w-full bg-background py-16 md:py-24 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="SWAPR DAPP"
            description="Your DeFi power tool."
            image="/lovable-uploads/6f4397cd-c498-4af7-8b06-ea27b6c9f424.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            bgColor="bg-purple-900"
          />
          
          <ProjectCard
            title="ATOMIZE"
            description="Design System for Figma"
            image="/placeholder.svg"
            tags={["DESIGN SYSTEM", "BRANDING"]} 
            bgColor="bg-blue-600"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
