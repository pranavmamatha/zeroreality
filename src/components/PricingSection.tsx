
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const PricingSection = () => {
  const { theme } = useTheme();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const pulseAnimation = {
    hidden: { scale: 1 },
    visible: {
      scale: [1, 1.02, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };
  
  const checkAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 500, 
        damping: 25 
      }
    }
  };

  const features = [
    "Dedicated senior designer",
    "Daily focused work on your project",
    "Regular update calls",
    "1:1 Async communication via Slack",
    "Flexible engagement terms"
  ];

  return (
    <div id="booking-section" className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center">
      <div className="container max-w-6xl pt-24 pb-32 px-4">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: {
                delay: 0.1,
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-display font-bold mb-6"
          >
            Let's work together
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-xl md:text-2xl font-display mb-20 text-muted-foreground"
          >
            Book a call and let's discuss your project needs
          </motion.h2>
          
          <div className="flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={pulseAnimation}
              className={`relative max-w-xl w-full rounded-3xl overflow-hidden ${theme === 'dark' ? 'shadow-[0_0_25px_rgba(0,255,60,0.15)]' : 'shadow-[0_10px_40px_rgba(0,0,0,0.06)]'}`}
            >
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-3xl border-2 border-primary opacity-70"></div>
              
              {/* Inner content with glass effect */}
              <div className={`relative z-10 bg-card p-10 md:p-12 rounded-3xl backdrop-blur-sm ${theme === 'dark' ? 'bg-black/70' : 'bg-white/90'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex items-center gap-2 mb-6"
                >
                  <Sparkles className="text-primary" size={20} />
                  <h3 className="text-3xl font-bold text-primary">Premium Design Service</h3>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-foreground/80 mb-10"
                >
                  Ideal for businesses looking for expert design solutions with maximum flexibility and dedicated support.
                </motion.p>
                
                <motion.div 
                  className="space-y-5 mb-12"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start"
                    >
                      <motion.div 
                        variants={checkAnimation}
                        className="mr-3 mt-0.5 bg-primary rounded-full p-0.5 flex items-center justify-center"
                      >
                        <Check size={16} className="text-primary-foreground" />
                      </motion.div>
                      <div className="text-foreground/80">{feature}</div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg py-7 rounded-full transition-all duration-300"
                    onClick={() => {
                      window.open('https://calendly.com', '_blank');
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Book an Intro Call <ArrowRight className="ml-1 animate-pulse" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Optional floating particles for extra visual interest */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-${3 + i} h-${3 + i} rounded-full bg-primary opacity-${2 + i * 2} blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
