
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const PricingSection = () => {
  return (
    <div id="pricing-section" className="min-h-screen bg-background text-foreground">
      <motion.div 
        className="container max-w-6xl py-32 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold mb-6 text-center"
        >
          Let's work together
        </motion.h1>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-display font-medium mb-16 text-center text-muted-foreground"
        >
          Book a call and let's discuss your project needs
        </motion.h2>
        
        <div className="flex justify-center">
          {/* Single Plan Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-3xl max-w-md w-full dark:bg-black bg-card border-2 border-primary p-8 relative overflow-hidden shadow-lg"
          >
            <h3 className="text-3xl font-bold mb-4 text-primary">Premium Design Service</h3>
            <p className="dark:text-white/80 text-foreground/80 mb-8">
              Ideal for businesses looking for expert design solutions with maximum flexibility and dedicated support.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <Check size={18} className="text-primary" />
                </div>
                <div className="dark:text-white/80 text-foreground/80">Dedicated senior designer</div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <Check size={18} className="text-primary" />
                </div>
                <div className="dark:text-white/80 text-foreground/80">Daily focused work on your project</div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <Check size={18} className="text-primary" />
                </div>
                <div className="dark:text-white/80 text-foreground/80">Regular update calls</div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <Check size={18} className="text-primary" />
                </div>
                <div className="dark:text-white/80 text-foreground/80">1:1 Async communication via Slack</div>
              </div>
              <div className="flex items-start">
                <div className="text-primary mr-3 mt-1">
                  <Check size={18} className="text-primary" />
                </div>
                <div className="dark:text-white/80 text-foreground/80">Flexible engagement terms</div>
              </div>
            </div>
            
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-lg py-6 flex items-center justify-center gap-2"
              onClick={() => {
                const bookingSection = document.getElementById('booking-section');
                if (bookingSection) {
                  bookingSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book an Intro Call <ArrowRight className="ml-1" />
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PricingSection;
