
import { motion } from "framer-motion";
import { useRef } from "react";

const TextMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const items = ["IDEATE", "DESIGN", "EVOLVE"];
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden bg-black w-full py-12 md:py-16"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black z-10 pointer-events-none" />
      
      <div className="relative flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            variants={marqueeVariants}
            animate="animate"
            className="flex items-center whitespace-nowrap"
            style={{ 
              x: i * 1000,
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mx-4 md:mx-6">
                  {item}
                </span>
                <span className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mx-4 md:mx-6">
                  ✦
                </span>
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TextMarquee;
