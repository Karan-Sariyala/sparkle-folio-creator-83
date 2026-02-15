import { motion } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpeg";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 pt-20">
      {/* Background gradient orb */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      </div>
      
      <div className="relative z-10 max-w-4xl text-center">
        {/* Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-2 border-primary/50 shadow-lg md:h-40 md:w-40"
          style={{ boxShadow: "var(--shadow-glow)" }}
        >
          <img
            src={profilePhoto}
            alt="Karan Sariyala"
            className="h-full w-full object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-4xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Hey, I'm Karan Sariyala,{" "}
          <br />
          <span className="text-gradient">Founding Engineer</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-8 max-w-2xl font-body text-lg text-muted-foreground md:text-xl"
        >
          Building mission-critical web applications from zero to one. 
          Specialist in Next.js, Node.js, and high-performance database design.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#experience"
            className="rounded-full bg-primary px-8 py-3 font-body text-sm font-medium text-primary-foreground transition-all hover:glow hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="mailto:sariyalakaran@gmail.com"
            className="rounded-full border border-muted-foreground/30 px-8 py-3 font-body text-sm font-medium text-foreground transition-all hover:border-primary hover:text-primary"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 p-1"
        >
          <div className="h-1.5 w-1 rounded-full bg-primary mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
