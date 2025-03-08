import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
const Hero = () => {
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.6
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };
  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.8,
        duration: 0.5
      }
    })
  };
  const greenTextVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.2,
        duration: 0.5
      }
    }
  };
  const buttonVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1.6,
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        type: "spring",
        stiffness: 400
      }
    }
  };
  const titleWords = ['Premium', 'Design', 'via', 'simple'];
  return <div className="min-h-screen flex items-center justify-center relative px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
      
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="text-center z-10 max-w-5xl mx-auto pt-24">
        <div className="flex flex-col gap-4 items-center">
          <div className="flex flex-wrap justify-center">
            {titleWords.map((word, i) => <motion.div key={i} custom={i} variants={wordVariants} className="mx-2 md:mx-4">
                <span className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-white tracking-tight">
                  {word}
                </span>
              </motion.div>)}
          </div>
          
          <motion.div variants={greenTextVariants} className="text-4xl md:text-6xl lg:text-8xl font-display font-bold text-neon-green tracking-tight">
            monthly subscription
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-8 text-white/60 text-sm flex items-center justify-center">
            ✦ PAUSE OR CANCEL ANYTIME ✦
          </motion.div>
          
          
          
          <motion.button variants={buttonVariants} whileHover="hover" whileTap={{
          scale: 0.95
        }} className="mt-16 relative flex items-center justify-center gap-4 bg-transparent border border-white/20 text-white py-4 px-10 rounded-full overflow-hidden group">
            <span className="z-10 font-medium text-xl">View pricing</span>
            <motion.div className="z-10 bg-neon-green rounded-full p-2" whileHover={{
            rotate: 45,
            backgroundColor: "#8BFF00"
          }}>
              <ArrowDown size={20} className="text-black" />
            </motion.div>
            <div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </div>;
};
export default Hero;