
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Hand } from "lucide-react";

const ServicesShowcase = () => {
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

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.9, 1, 1, 0.95]);

  return (
    <motion.div 
      ref={containerRef}
      className="relative mt-16 md:mt-32 pb-32"
      style={{ opacity, scale }}
    >
      <div className="flex justify-center items-center">
        <div className="relative w-full max-w-5xl">
          {/* Neon green rectangle background */}
          <motion.div 
            className="bg-neon-green rounded-[2rem] p-8 md:p-12 pt-16 pb-16 relative z-10 mx-4 md:mx-0"
          >
            <motion.div 
              className="flex flex-col items-end text-right space-y-2 md:space-y-4"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="font-display text-3xl md:text-5xl xl:text-6xl font-bold text-black"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + (index * 0.05), duration: 0.5 }}
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* "WE OFFER" bubble */}
          <motion.div
            className="absolute -left-4 md:-left-32 top-10 md:top-20 z-20 bg-black text-white rounded-full p-6 md:p-10"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
          >
            <span className="font-display text-xl md:text-4xl font-bold whitespace-nowrap flex items-center gap-2">
              WE OFFER <Hand className="inline-block h-6 w-6 md:h-8 md:w-8" />
            </span>
          </motion.div>

          {/* Pixelated cursor graphic */}
          <motion.div
            className="absolute -right-10 md:-right-20 bottom-20 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -50]),
              rotate: useTransform(scrollYProgress, [0, 1], [0, 10]) 
            }}
          >
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g transform="translate(10, 10) scale(0.83)">
                <rect x="0" y="0" width="12" height="12" fill="#8F7AFF" />
                <rect x="12" y="0" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="0" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="0" width="12" height="12" fill="#8F7AFF" />
                <rect x="0" y="12" width="12" height="12" fill="#8F7AFF" />
                <rect x="12" y="12" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="12" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="12" width="12" height="12" fill="#8F7AFF" />
                <rect x="48" y="12" width="12" height="12" fill="#8F7AFF" />
                <rect x="0" y="24" width="12" height="12" fill="#8F7AFF" />
                <rect x="12" y="24" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="24" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="24" width="12" height="12" fill="#8F7AFF" />
                <rect x="48" y="24" width="12" height="12" fill="#8F7AFF" />
                <rect x="60" y="24" width="12" height="12" fill="#8F7AFF" />
                <rect x="0" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="12" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="48" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="60" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="72" y="36" width="12" height="12" fill="#8F7AFF" />
                <rect x="0" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="12" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="48" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="60" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="72" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="84" y="48" width="12" height="12" fill="#8F7AFF" />
                <rect x="12" y="60" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="60" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="60" width="12" height="12" fill="#8F7AFF" />
                <rect x="48" y="60" width="12" height="12" fill="#8F7AFF" />
                <rect x="24" y="72" width="12" height="12" fill="#8F7AFF" />
                <rect x="36" y="72" width="12" height="12" fill="#8F7AFF" />
              </g>
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesShowcase;
