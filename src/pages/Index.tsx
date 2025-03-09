
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";
import TextMarquee from "@/components/TextMarquee";
import WhyUs from "@/components/WhyUs";
import SelectedWork from "@/components/SelectedWork";
import ProjectShowcase from "@/components/ProjectShowcase";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";
import { useTheme } from "@/components/ThemeProvider";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  
  // Simplified transform values - fewer elements with smoother transitions
  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const translateY3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [10, -90]);
  const rotate3 = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative overflow-x-hidden">
      <AnimatePresence>
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div 
            key="content" 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            transition={{ duration: 0.5 }} 
            className="min-h-screen bg-background"
          >
            {/* Reduced number of floating elements - only the most essential ones */}
            
            {/* Original green circle */}
            <motion.div 
              className="fixed left-[10%] top-[20%] w-16 h-16 md:w-24 md:h-24 z-0 pointer-events-none"
              style={{ y: translateY1, rotate: rotate1 }}
              transition={{
                type: "spring",
                stiffness: 30,  // Reduced physics values
                damping: 8
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle 
                  cx="50" 
                  cy="50" 
                  r="50" 
                  fill={theme === 'dark' ? "#8BFF00" : "#7AC70C"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <circle 
                  cx="50" 
                  cy="50" 
                  r="30" 
                  fill={theme === 'dark' ? "#8BFF00" : "#7AC70C"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            {/* Purple square at bottom left */}
            <motion.div 
              className="fixed left-[5%] bottom-[15%] w-20 h-20 md:w-32 md:h-32 z-0 pointer-events-none"
              style={{ y: translateY2, rotate: rotate2 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 7
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect 
                  width="100" 
                  height="100" 
                  fill={theme === 'dark' ? "#8F7AFF" : "#7B5AF5"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                  transform="rotate(45 50 50)"
                />
                <rect 
                  x="25" 
                  y="25" 
                  width="50" 
                  height="50" 
                  fill={theme === 'dark' ? "#8F7AFF" : "#7B5AF5"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                  transform="rotate(45 50 50)"
                />
              </svg>
            </motion.div>
            
            {/* Pink hexagon */}
            <motion.div 
              className="fixed right-[5%] top-[15%] w-12 h-12 md:w-16 md:h-16 z-0 pointer-events-none"
              style={{ y: translateY3, rotate: rotate3 }}
              transition={{
                type: "spring",
                stiffness: 15,
                damping: 6
              }}
            >
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0Z" 
                  fill={theme === 'dark' ? "#FF00D6" : "#D946EF"} 
                  fillOpacity={theme === 'dark' ? "0.1" : "0.25"}
                />
                <path 
                  d="M50 20L79.3893 35V65L50 80L20.6107 65V35L50 20Z" 
                  fill={theme === 'dark' ? "#FF00D6" : "#D946EF"} 
                  fillOpacity={theme === 'dark' ? "0.2" : "0.4"}
                />
              </svg>
            </motion.div>
            
            <Navbar />
            <div className="relative z-10">
              <Hero />
              <ServicesShowcase />
              <TextMarquee />
              <SelectedWork />
              <ProjectShowcase />
              <WhyUs />
              <BookCall />
              <Footer />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-background flex items-center justify-center z-50" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }} 
        animate={{ 
          scale: 1, 
          opacity: 1, 
          transition: { delay: 0.2, duration: 0.5 } 
        }} 
        exit={{ 
          scale: 1.2, 
          opacity: 0, 
          transition: { duration: 0.3 } 
        }} 
        className="flex flex-col items-center"
      >
        <motion.div 
          className="text-4xl font-bold text-foreground mb-4" 
          animate={{ 
            opacity: [0.5, 1, 0.5],
          }} 
          transition={{ 
            repeat: Infinity, 
            duration: 2, 
            ease: "easeInOut" 
          }}
        >
          ZERO REALITY
        </motion.div>
        <motion.div className="h-1 w-40 bg-muted rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-neon-green" 
            initial={{ width: 0 }} 
            animate={{ width: "100%" }} 
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </motion.div>
        
        {/* Simplified loading dots with fewer animations */}
        <div className="flex mt-4 space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div 
              key={index}
              className="w-2 h-2 bg-neon-green rounded-full"
              animate={{ 
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: index * 0.2 
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;
