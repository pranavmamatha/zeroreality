
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container max-w-5xl py-32 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-display font-bold mb-4 text-center"
        >
          Simple Pricing
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/70 text-center mb-16 max-w-2xl mx-auto"
        >
          Choose the plan that fits your design needs. All plans include unlimited revisions and premium support.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} featured={index === 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Plan {
  name: string;
  price: string;
  description: string;
  features: string[];
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: "$1,499",
    description: "Perfect for small businesses just getting started.",
    features: [
      "1 design project at a time",
      "48 hour turnaround",
      "Unlimited revisions",
      "Source files included"
    ]
  },
  {
    name: "Professional",
    price: "$2,999",
    description: "For growing businesses with regular design needs.",
    features: [
      "2 design projects at a time",
      "24 hour turnaround",
      "Unlimited revisions",
      "Source files included",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "$4,999",
    description: "For companies with consistent high-volume design needs.",
    features: [
      "4 design projects at a time",
      "12 hour turnaround",
      "Unlimited revisions",
      "Source files included",
      "Priority support",
      "Dedicated designer"
    ]
  }
];

const PricingCard = ({ plan, index, featured }: { plan: Plan, index: number, featured: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl p-6 flex flex-col ${featured ? 'border-2 border-neon-green glass-card' : 'border border-white/10 bg-secondary/50'}`}
    >
      {featured && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neon-green text-black text-xs font-bold py-1 px-3 rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <div className="flex items-baseline mb-4">
        <span className="text-3xl font-bold">{plan.price}</span>
        <span className="text-white/70 ml-2">/month</span>
      </div>
      <p className="text-white/70 mb-6">{plan.description}</p>
      <div className="flex-grow">
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <div className="rounded-full bg-neon-green/20 p-1">
                <Check size={12} className="text-neon-green" />
              </div>
              <span className="text-sm text-white/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <Button 
        className={`w-full rounded-full ${featured ? 'bg-neon-green hover:bg-neon-green/90 text-black' : 'bg-white/10 hover:bg-white/20 text-white'}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Get Started
      </Button>
    </motion.div>
  );
};

export default Pricing;
