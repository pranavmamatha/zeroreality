
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

const TextMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const items = ["IDEATE", "DESIGN", "EVOLVE"];
  
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20,
          ease: "linear"
        }
      }
    }
  };
  
  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden w-full py-12 md:py-[141px] ${theme === 'dark' ? 'bg-black' : 'bg-secondary'}`}
    >
      <div 
        className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-black via-transparent to-black' 
            : 'bg-gradient-to-r from-secondary via-transparent to-secondary'
        }`} 
      />
      
      <div className="relative flex whitespace-nowrap">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            variants={marqueeVariants}
            animate="animate"
            className="flex items-center whitespace-nowrap"
            style={{
              x: i * 1000
            }}
          >
            {items.map((item, index) => (
              <div key={index} className="flex items-center">
                <span className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mx-4 md:mx-6 ${
                  theme === 'dark' ? 'text-white' : 'text-foreground'
                }`}>
                  {item}
                </span>
                <span className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mx-4 md:mx-6 ${
                  theme === 'dark' ? 'text-white' : 'text-foreground'
                }`}>
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
