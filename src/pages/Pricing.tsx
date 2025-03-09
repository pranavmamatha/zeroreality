
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import { ArrowRight } from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <motion.div 
        className="container max-w-5xl py-32 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 text-center"
        >
          Invest in a design that propels
        </motion.h1>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-4xl md:text-6xl font-display font-bold mb-12 text-center"
        >
          your business forward
        </motion.h1>
        
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-xl p-8 border-neon-green max-w-xl w-full"
          >
            <h3 className="text-3xl font-bold mb-4 text-center">Join us</h3>
            <p className="text-white/80 text-center mb-8">
              Book a call and we'll get on a discussion about your business or projects. 
              We'll explore your design needs, challenges, and goals to create a tailored solution.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Personalized consultation with our expert design team</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Assessment of your current design challenges and opportunities</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Clear recommendations on potential design solutions</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">No obligation, transparent discussion about process and pricing</div>
              </div>
              <div className="flex items-start">
                <div className="text-neon-green mr-2 mt-1">✓</div>
                <div className="text-white/80">Flexible scheduling to accommodate your availability</div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-neon-green text-black font-medium text-lg py-6 flex items-center justify-center gap-2"
            >
              Book an Intro Call <ArrowRight className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Pricing;
