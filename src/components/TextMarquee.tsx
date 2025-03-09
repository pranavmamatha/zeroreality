
import { motion } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "./ThemeProvider";

const TextMarquee = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  const items = ["IDEATE", "DESIGN", "EVOLVE"];
  
  // Optimized marquee animation - simplified for better performance
  const marqueeVariants = {
    animate: {
      x: [0, -1000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 20, // Slower for better performance
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
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} 
        className="relative flex whitespace-nowrap"
      >
        {/* Reduce number of duplicates from 4 to 2 */}
        {[...Array(2)].map((_, i) => (
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
              <motion.div 
                key={index} 
                className="flex items-center"
                // Simplified hover animation
                whileHover={{ 
                  scale: 1.05, 
                  color: theme === 'dark' ? '#ADFF00' : '#7AC70C',
                }}
              >
                <motion.span 
                  className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mx-4 md:mx-6 ${
                    theme === 'dark' ? 'text-white' : 'text-foreground'
                  }`}
                  // Simplified animation with lower frequency
                  animate={{ 
                    y: [0, -3, 0],
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                  }}
                >
                  {item}
                </motion.span>
                <motion.span 
                  className={`text-5xl md:text-7xl lg:text-8xl font-display font-bold mx-4 md:mx-6 ${
                    theme === 'dark' ? 'text-white' : 'text-foreground'
                  }`}
                  // Simpler animation with longer duration
                  animate={{ 
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity
                  }}
                >
                  ✦
                </motion.span>
              </motion.div>
            ))}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TextMarquee;
