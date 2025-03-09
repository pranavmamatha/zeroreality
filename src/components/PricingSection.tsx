
import { motion } from "framer-motion";
import { ArrowRight, Check, Calendar } from "lucide-react";
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
        repeatType: "reverse" as const
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
            className="text-6xl md:text-7xl font-display font-bold mb-6"
          >
            Let's work together
          </motion.h1>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-display mb-20 text-muted-foreground"
          >
            Book a call and let's discuss your project needs
          </motion.h2>
          
          <div className="flex justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={pulseAnimation}
              className={`relative max-w-xl w-full rounded-3xl overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-primary/10 border-4 border-primary' 
                  : 'bg-gradient-to-br from-white to-primary/10 border-4 border-primary/60'
              }`}
            >
              <div className={`relative z-10 px-8 py-10 md:px-10 md:py-12 rounded-3xl ${
                theme === 'dark' 
                  ? 'shadow-[0_0_35px_rgba(0,255,60,0.15)]' 
                  : 'shadow-xl'
              }`}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="flex flex-col items-center mb-10"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <Calendar size={40} className="text-primary" />
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-bold font-display mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Book Your Call</h3>
                  
                  <p className="text-xl md:text-2xl text-muted-foreground text-center">
                    Let's collaborate and bring your vision to life
                  </p>
                </motion.div>
                
                <motion.div 
                  className="space-y-6 mb-12"
                  variants={staggerChildren}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={fadeInUp}
                      className="flex items-center"
                    >
                      <motion.div 
                        variants={checkAnimation}
                        className="mr-4 bg-primary rounded-full p-1 flex items-center justify-center"
                      >
                        <Check size={18} className="text-primary-foreground" />
                      </motion.div>
                      <div className="text-xl md:text-2xl">{feature}</div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  <motion.button 
                    className={`w-full ${
                      theme === 'dark'
                        ? 'bg-gradient-to-r from-primary to-primary/80' 
                        : 'bg-gradient-to-r from-primary to-primary/80'
                    } text-primary-foreground font-bold text-xl md:text-2xl py-6 px-8 rounded-full transition-transform inline-flex items-center justify-center`}
                    onClick={() => {
                      window.open('https://calendly.com', '_blank');
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Now <ArrowRight className="ml-2 h-6 w-6" />
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PricingSection;
