import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3/SCSS", "Python"]
  },
  {
    title: "Frontend",
    skills: ["Next.js", "React", "Angular", "Redux", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "Sequelize ORM", "Supabase", "REST APIs"]
  },
  {
    title: "Data & Cloud",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Docker", "CI/CD"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative px-6 py-32 md:px-12">
      {/* Background gradient */}
      <div className="pointer-events-none absolute bottom-0 right-0">
        <div className="h-[400px] w-[400px] rounded-full bg-primary/3 blur-[100px]" />
      </div>
      
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-medium md:text-5xl">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Technologies I use to bring ideas to life.
          </p>
        </motion.div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm transition-all hover:border-primary/30"
            >
              <h3 className="font-display text-lg font-medium text-primary mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-muted px-3 py-2 text-sm text-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
