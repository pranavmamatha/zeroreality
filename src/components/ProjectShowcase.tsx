
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  isLandscape?: boolean;
  delay?: number;
  descriptionColor?: string;
  techs?: string;
}

const ProjectCard = ({ title, description, image, tags, isLandscape = false, delay = 0, descriptionColor = "text-white/48", techs }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {/* Project Image */}
      <div className="relative">
        <img 
          src={image} 
          alt={title} 
          className={`w-full ${isLandscape ? 'h-[300px] sm:h-[400px]' : 'h-[400px] sm:h-[500px]'} object-cover`}
          loading="lazy"
          decoding="async"
        />
      </div>
      
      {/* Details Section Below Image */}
      <div 
        className="backdrop-blur-[40px] bg-white/[0.04] border border-white/[0.07] p-4 sm:p-6"
      >
        {/* Project Title */}
        <div className="flex items-center mb-3">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
          <h3 
            className="text-xl sm:text-2xl font-semibold text-black"
            style={{ fontFamily: '"ClashDisplay-Semibold", sans-serif', fontWeight: 400 }}
          >
            {title}
          </h3>
        </div>
        
        
        {/* Description */}
        <p 
          className="text-sm text-gray-500 mb-3"
          style={{ fontFamily: '"Inter Tight", sans-serif' }}
        >
          {description}
        </p>
        
        {/* Techs */}
        {techs && (
          <div className="mt-3">
            <div 
              className="inline-block px-3 py-1 border border-gray-300 rounded-full"
            >
              <p 
                className="text-xs text-gray-600 font-medium"
                style={{ fontFamily: '"Inter Tight", sans-serif' }}
              >
                Techs - {techs}
              </p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const ProjectShowcase = () => {
  return (
    <div id="project-showcase" className="w-full bg-white py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <ProjectCard
            title="Nudge"
            description="An ERP software"
            image="/project-images/project1.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            isLandscape={true}
            delay={0}
            descriptionColor="text-white/48"
            techs="Scalable Architecture, AI analytics"
          />
          
          <ProjectCard
            title="ProPg"
            description="Helps Pg owners to Keep Track of the tenents"
            image="/project-images/project2.png"
            tags={["DESIGN SYSTEM", "UI", "BRANDING"]} 
            isLandscape={false}
            delay={0.2}
            descriptionColor="text-white/48"
            techs="Cross-platform large and secure Databases"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
