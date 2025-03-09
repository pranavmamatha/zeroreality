
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesShowcase = () => {
  const services = ["UX & Strategy", "Concepting", "UI Design", "Design Systems", "Brand Identity", "Style Guides", "Websites", "Prototyping"];
  const containerRef = useRef(null);
  const isMobile = useIsMobile();
  
  const {
    scrollYProgress
  } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Simplified animations with fewer transformations
  const boxY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  // Reduced movement for bubble animations
  const bubbleRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]); 
  const bubbleY = useTransform(scrollYProgress, [0, 1], [0, -20]); 
  const bubbleX = useTransform(scrollYProgress, [0, 1], [0, 10]); 
  const bubbleScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 1]);

  // Simplified service item animations
  const serviceVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05, // Reduced delay between items
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }),
    hover: {
      scale: 1.03, // Reduced scale effect
      color: "#8BFF00",
      transition: { duration: 0.2 }
    }
  };

  // Mobile version - simplified
  if (isMobile) {
    return (
      <motion.div 
        id="services-showcase" 
        ref={containerRef}
        style={{
          opacity,
          scale
        }} 
        className="relative mt-8 py-12 px-4"
      >
        <div id="services-scroll-target" className="absolute top-[-100px]"></div>
        
        <div className="relative">
          <motion.div 
            className="mx-auto mb-4 bg-black rounded-full py-3 px-6 inline-flex items-center justify-center border-2 border-[#9b87f5]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <span className="font-display text-xl font-bold text-white whitespace-nowrap">
              WE OFFER 🏄
            </span>
          </motion.div>

          <motion.div 
            className="bg-neon-green rounded-3xl px-6 py-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex flex-col items-center text-center space-y-5">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="font-display text-2xl font-bold text-black"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  // Desktop version - optimized
  return (
    <motion.div 
      id="services-showcase" 
      ref={containerRef}
      style={{
        opacity,
        scale
      }} 
      className="relative mt-16 md:mt-32 pb-32 pt-32 md:pt-36 py-[95px] my-[140px]"
    >
      <div id="services-scroll-target" className="absolute top-[-100px]"></div>
      
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-xl"> 
          <motion.div 
            className="bg-neon-green rounded-[2.5rem] p-8 pt-12 pb-12 relative z-10 max-w-xl mx-auto" 
            style={{ y: boxY }}
            whileHover={{ boxShadow: "0 10px 25px rgba(173, 255, 0, 0.2)" }}
          >
            <div className="flex flex-col items-right text-right space-y-4">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="font-display text-3xl md:text-4xl xl:text-5xl font-bold text-black" 
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={serviceVariants}
                >
                  {service}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="absolute -left-10 top-20 md:-left-32 md:top-32 z-20 bg-black rounded-full p-6 md:p-8 border-2 border-[#9b87f5]" 
            style={{
              y: bubbleY,
              x: bubbleX,
              rotate: bubbleRotate,
              scale: bubbleScale
            }}
            whileHover={{ scale: 1.05 }}
          >
            <span className="font-display text-2xl md:text-4xl font-bold text-white whitespace-nowrap">
              WE OFFER 
              <motion.span 
                animate={{
                  rotate: [0, 10, 0],
                  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="inline-block ml-2"
              >
                🏄
              </motion.span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesShowcase;
