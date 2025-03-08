
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesShowcase from "@/components/ServicesShowcase";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll();
  
  // Parallax values for background elements
  const bgParallax1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgParallax2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);
  
  // Background decorative elements
  const BackgroundElement = ({ className, style }) => (
    <motion.div
      className={`fixed pointer-events-none ${className}`}
      style={style}
    />
  );
  
  return (
    <div ref={scrollRef} className="relative overflow-x-hidden">
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
            {/* Background decorative elements */}
            <BackgroundElement 
              className="w-64 h-64 rounded-full bg-purple-500/5 blur-3xl -right-20 top-40 z-0"
              style={{ y: bgParallax1, rotate: bgRotate }}
            />
            <BackgroundElement 
              className="w-96 h-96 rounded-full bg-neon-green/5 blur-3xl -left-40 top-96 z-0"
              style={{ y: bgParallax2, rotate: useTransform(scrollYProgress, [0, 1], [0, -15]) }}
            />
            <BackgroundElement 
              className="w-80 h-80 rounded-full bg-blue-500/5 blur-3xl right-20 bottom-20 z-0"
              style={{ y: useTransform(scrollYProgress, [0, 1], [0, -150]) }}
            />
            
            <Navbar />
            <div className="pb-32">
              <Hero />
              <ServicesShowcase />
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
          animate={{ opacity: [0.5, 1, 0.5] }} 
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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
      </motion.div>
    </motion.div>
  );
};

export default Index;
