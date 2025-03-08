
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

const Services = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container max-w-5xl py-32 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-display font-bold mb-12"
        >
          Our Services
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface Service {
  title: string;
  description: string;
  icon: string;
}

const services: Service[] = [
  {
    title: "UI Design",
    description: "Pixel-perfect interfaces crafted with precision and elegance.",
    icon: "✦"
  },
  {
    title: "Brand Identity",
    description: "Cohesive visual language that communicates your brand's essence.",
    icon: "✦"
  },
  {
    title: "Web Development",
    description: "Responsive sites built with modern technologies for optimal performance.",
    icon: "✦"
  },
  {
    title: "Motion Design",
    description: "Animations that bring your digital products to life with subtle elegance.",
    icon: "✦"
  }
];

const ServiceCard = ({ service, index }: { service: Service, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card rounded-xl p-6 hover:bg-white/10 transition-colors"
    >
      <div className="text-neon-green text-2xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-white/70">{service.description}</p>
    </motion.div>
  );
};

export default Services;
