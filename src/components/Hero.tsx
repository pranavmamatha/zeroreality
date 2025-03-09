import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const dynamicTexts = ["Websites", "Mobile Applications", "Designs", "AI Solutions"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const text = dynamicTexts[currentTextIndex];
    
    const typeWriter = () => {
      if (isDeleting) {
        setDisplayText(text.substring(0, displayText.length - 1));
        setTypingSpeed(50);
        
        if (displayText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((currentTextIndex + 1) % dynamicTexts.length);
          setTypingSpeed(150);
        }
      } else {
        setDisplayText(text.substring(0, displayText.length + 1));
        
        if (displayText === text) {
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      }
    };

    const timer = setTimeout(typeWriter, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTextIndex, dynamicTexts, typingSpeed]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 15
      }
    }
  };
  
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.8,
        duration: 0.4
      }
    },
    hover: {
      scale: 1.03,
    }
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 to-background/30" />
      
      <motion.div 
        variants={containerVariants} 
        initial="hidden" 
        animate="visible" 
        className="text-center z-10 max-w-5xl mx-auto pt-24"
      >
        <div className="flex flex-col gap-4 items-center">
          <motion.div 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-foreground tracking-tight"
          >
            We Build Awesome
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-neon-green tracking-tight h-20 md:h-24 lg:h-32 flex items-center"
          >
            {displayText}<span className="animate-pulse">|</span>
          </motion.div>
          
          <motion.div 
            variants={itemVariants} 
            className="mt-8 text-foreground/60 text-sm flex items-center justify-center"
          >
            ✦ INNOVATE · CREATE · DELIVER ✦
          </motion.div>
          
          <motion.button 
            variants={buttonVariants} 
            whileHover="hover" 
            whileTap={{ scale: 0.98 }} 
            className="mt-16 relative flex items-center justify-center gap-4 bg-transparent border border-foreground/20 text-foreground py-4 px-10 rounded-full overflow-hidden group"
          >
            <span className="z-10 font-medium text-xl">View Our Work</span>
            <motion.div 
              className="z-10 bg-neon-green rounded-full p-2" 
              whileHover={{ rotate: 15 }}
            >
              <ArrowDown size={20} className="text-black" />
            </motion.div>
            <div className="absolute inset-0 bg-foreground/5 group-hover:bg-foreground/10 transition-colors duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
