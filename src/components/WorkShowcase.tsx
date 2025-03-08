
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const WorkShowcase = () => {
  return (
    <motion.div 
      className="min-h-screen bg-black text-white relative pt-32 pb-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4">
        {/* Title section with large text */}
        <div className="flex justify-center mb-32">
          <div className="text-center">
            <h2 className="text-6xl md:text-8xl font-display tracking-tight text-[#9b87f5]">
              Selected
              <br />
              <span className="text-[#9b87f5] text-8xl md:text-9xl">WORK</span>
            </h2>
            
            {/* Down arrow in circle */}
            <motion.div 
              className="mx-auto mt-16 w-24 h-24 rounded-full border border-[#333] flex items-center justify-center cursor-pointer"
              initial={{ y: 0 }}
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "easeInOut" 
              }}
            >
              <ChevronDown className="w-8 h-8 text-neon-green" />
            </motion.div>
          </div>
        </div>
        
        {/* Project showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-[#7B68EE]/20 rounded-xl aspect-video overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/work" className="block h-full w-full p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2">Digital Experience</h3>
              <p className="text-lg text-white/70">Immersive brand platform</p>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-[#FF6347]/20 rounded-xl aspect-video overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/work" className="block h-full w-full p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2">Creative Platform</h3>
              <p className="text-lg text-white/70">Multi-channel solution</p>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-[#32CD32]/20 rounded-xl aspect-video overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link to="/work" className="block h-full w-full p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2">Brand System</h3>
              <p className="text-lg text-white/70">Visual identity & guidelines</p>
            </Link>
          </motion.div>
          
          <motion.div 
            className="bg-[#FFD700]/20 rounded-xl aspect-video overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/work" className="block h-full w-full p-8 flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-2">Web Application</h3>
              <p className="text-lg text-white/70">User-centered design</p>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkShowcase;
