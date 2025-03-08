
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary hover:bg-secondary/80 border border-border transition-colors"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === "light" ? 0 : 180,
          opacity: 1
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative w-5 h-5 flex items-center justify-center"
      >
        {theme === "light" ? (
          <Sun className="absolute h-[1.2rem] w-[1.2rem] text-foreground" />
        ) : (
          <Moon className="absolute h-[1.2rem] w-[1.2rem] text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
}
