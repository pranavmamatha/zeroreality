
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const ServicesShowcase = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform values for parallax effects
  const yPosAnim1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yPosAnim2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const yPosAnim3 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotateAnim1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotateAnim2 = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const scaleAnim1 = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  
  const isMobile = useIsMobile();
  const services = [
    "UX & Strategy",
    "Concepting",
    "UI Design",
    "Design Systems",
    "Brand Identity",
    "Style Guides",
    "Websites",
    "Prototyping"
  ];

  // Decorative objects
  const DecorativeCircle = ({ className, style }) => (
    <motion.div 
      className={`absolute rounded-full bg-neon-green/30 backdrop-blur-sm ${className}`}
      style={style}
    />
  );
  
  const DecorativeSquare = ({ className, style }) => (
    <motion.div 
      className={`absolute rounded-md bg-purple-500/20 backdrop-blur-sm ${className}`}
      style={style}
    />
  );
  
  const DecorativeTriangle = ({ className, style }) => (
    <motion.div 
      className={`absolute ${className}`}
      style={style}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <polygon points="50,0 100,100 0,100" fill="rgba(173, 255, 0, 0.2)" />
      </svg>
    </motion.div>
  );

  return (
    <motion.div 
      ref={containerRef}
      className="relative mt-12 md:mt-32 px-4 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.8 }}
    >
      {/* Decorative elements - positioned absolutely */}
      <DecorativeCircle 
        className="w-16 h-16 md:w-32 md:h-32 -left-8 top-20 md:top-40 z-0"
        style={{ y: yPosAnim1, scale: scaleAnim1 }}
      />
      <DecorativeCircle 
        className="w-8 h-8 md:w-16 md:h-16 right-10 md:right-20 top-10 z-0"
        style={{ y: yPosAnim2, rotate: rotateAnim1 }}
      />
      <DecorativeSquare 
        className="w-12 h-12 md:w-24 md:h-24 -left-6 md:-left-10 bottom-12 md:bottom-24 z-0"
        style={{ y: yPosAnim3, rotate: rotateAnim2 }}
      />
      <DecorativeTriangle 
        className="w-20 h-20 md:w-40 md:h-40 right-4 md:right-12 bottom-2 md:bottom-8 z-0"
        style={{ y: yPosAnim2, rotate: rotateAnim1 }}
      />

      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-3xl">
          {/* Green rectangle background */}
          <motion.div 
            className="bg-neon-green rounded-[1.5rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-12 pt-12 pb-12 md:pt-16 md:pb-16 relative z-10"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -20]),
              rotateX: useTransform(scrollYProgress, [0, 1], [0, 5]) 
            }}
          >
            <motion.div 
              className="flex flex-col items-end text-right space-y-1 sm:space-y-2"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="font-display text-lg sm:text-2xl md:text-4xl xl:text-6xl font-bold text-black"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 + (index * 0.1), duration: 0.5 }}
                  style={{
                    y: useTransform(scrollYProgress, [0, 1], [0, index * -3]),
                    x: useTransform(scrollYProgress, [0, 1], [0, index * 2])
                  }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* "WE OFFER" bubble */}
          <motion.div
            className="absolute -left-4 sm:-left-8 md:-left-24 lg:-left-32 top-8 sm:top-12 md:top-24 lg:top-32 z-20 bg-black rounded-full p-3 sm:p-5 md:p-8 lg:p-10"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -30]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, -10])
            }}
          >
            <span className="font-display text-sm sm:text-xl md:text-3xl lg:text-4xl font-bold text-white whitespace-nowrap">
              WE OFFER 🏄
            </span>
          </motion.div>

          {/* Pixel cursor */}
          <motion.div
            className="absolute -right-10 -bottom-10 sm:-right-20 sm:-bottom-20 z-20"
            initial={{ opacity: 0, x: -50, y: -50 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -50]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 30])
            }}
          >
            <svg width={isMobile ? "60" : "120"} height={isMobile ? "60" : "120"} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M40 0H20V20H0V40H20V60H40V40H60V20H40V0Z" fill="#8F7AFF"/>
              <path d="M100 40H80V60H60V80H80V100H100V80H120V60H100V40Z" fill="#8F7AFF"/>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesShowcase;
