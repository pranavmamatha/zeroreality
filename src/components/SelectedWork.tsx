import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
const SelectedWork = () => {
  return <div className="relative w-full bg-background flex flex-col items-center justify-center py-24 md:py-[215px]">
      <motion.div initial={{
      opacity: 0,
      y: -20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.1
    }} viewport={{
      once: true
    }} className="text-center">
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-medium text-[#9b87f5] dark:text-[#9b87f5] tracking-tight mb-4">
          Selected
        </h2>
        <h2 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tight">
          WORK
        </h2>
      </motion.div>
      
      <motion.div initial={{
      opacity: 0,
      y: 10
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.6
    }} viewport={{
      once: true
    }} className="mt-12 md:mt-16">
        <Link to="/work" className="inline-block">
          <motion.div className="border border-foreground/20 rounded-full p-4 cursor-pointer" whileHover={{
          y: 5
        }} transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}>
            <ChevronDown className="w-6 h-6 text-neon-green" />
          </motion.div>
        </Link>
      </motion.div>
    </div>;
};
export default SelectedWork;