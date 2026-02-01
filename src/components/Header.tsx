import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12"
    >
      <a
        href="#"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary font-display text-xl font-semibold transition-all hover:bg-primary hover:text-primary-foreground hover:glow"
      >
        K
      </a>
      
      <a
        href="mailto:sariyalakaran@gmail.com"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-muted-foreground/30 text-muted-foreground transition-all hover:border-primary hover:text-primary"
      >
        <Mail size={20} />
      </a>
    </motion.header>
  );
};

export default Header;
