
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const SelectedWork = () => {
  const scrollToProjects = () => {
    // Find the ProjectShowcase element and scroll to it
    const projectsSection = document.getElementById('project-showcase');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  // Simplified animations
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" 
      }
    }
  };

  const accentVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3
      }
    },
    hover: { 
      y: 3,
      borderColor: "#9b87f5"
    }
  };

  const letterContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Reduced stagger delay
        delayChildren: 0.2
      }
    }
  };

  const letterVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  // Split "WORKS" into individual letters for animation
  const worksText = "WORKS";
  const worksLetters = worksText.split("");

  return (
    <div id="works" className="relative w-full bg-background flex flex-col items-center justify-center py-24 pt-32 md:py-[94px]">
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }} // Increased threshold for earlier animation
        className="text-center"
      >
        <motion.h2 
          variants={accentVariants}
          className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-[#9b87f5] dark:text-[#9b87f5] tracking-tight mb-4"
          whileHover={{ scale: 1.03 }}
        >
          Our
        </motion.h2>
        
        <motion.div
          className="overflow-hidden"
          variants={letterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
        >
          <div className="flex justify-center">
            {worksLetters.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="text-6xl md:text-7xl font-display font-bold uppercase tracking-tight lg:text-9xl inline-block"
                whileHover={{ 
                  scale: 1.05, 
                  color: "#ADFF00"
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
      
      <motion.div
        variants={buttonVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="mt-12 md:mt-16"
      >
        <motion.div 
          className="rounded-full w-16 h-28 flex items-center justify-center border-2 border-foreground/30 bg-transparent relative cursor-pointer" 
          variants={buttonVariants}
          whileHover="hover"
          whileTap={{ scale: 0.98 }}
          onClick={scrollToProjects}
        >
          <motion.div
            animate={{ 
              y: [0, 4, 0],
              transition: { 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }
            }}
          >
            <ChevronDown className="w-6 h-6 text-[#ADFF00]" />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SelectedWork;
