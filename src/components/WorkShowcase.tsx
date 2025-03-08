
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const WorkShowcase = () => {
  return (
    <motion.div 
      className="relative bg-black text-white py-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        {/* Project grid, displayed in two side-by-side sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
          {/* Left side: large project */}
          <motion.div 
            className="relative aspect-square md:aspect-[4/5] rounded-xl overflow-hidden bg-purple-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="public/lovable-uploads/f298ad43-a5ad-4d0f-a80c-bdc84b9d1465.png" 
              alt="SWAPR DAPP Project" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
            <div className="absolute bottom-0 left-0 p-6 md:p-10">
              <div className="mb-2 space-x-2">
                <span className="inline-block text-xs md:text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">DESIGN SYSTEM</span>
                <span className="inline-block text-xs md:text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">UI</span>
                <span className="inline-block text-xs md:text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">BRANDING</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-display font-bold mt-2 text-white">SWAPR DAPP</h3>
              <p className="text-lg text-white/80 mt-1">Your DeFi power tool.</p>
            </div>
          </motion.div>

          {/* Right side: Container for title and second project */}
          <div className="space-y-8">
            {/* Title section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:pl-10"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-display tracking-tight">
                Selected
                <br />
                <span className="text-purple-500 text-6xl md:text-7xl lg:text-8xl">WORK</span>
              </h2>
            </motion.div>

            {/* Second project */}
            <motion.div 
              className="relative aspect-square md:aspect-[4/3] rounded-xl overflow-hidden bg-yellow-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="public/lovable-uploads/4f862d59-426a-4540-b46d-6f3d2495e438.png" 
                alt="CHIPP.AI Project" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-10">
                <div className="mb-2">
                  <span className="inline-block text-xs md:text-sm bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">DESIGN SYSTEM</span>
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-bold mt-2 text-white">CHIPP.AI</h3>
                <p className="text-lg text-white/80 mt-1">Build, share and sell your AI tools.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkShowcase;
