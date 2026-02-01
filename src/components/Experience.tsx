import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    company: "Stellendienst Schweiz AG",
    role: "Founding Engineer",
    period: "May 2024 – Present",
    location: "Remote",
    description: "Spearheaded end-to-end development of a complex Swiss recruitment ecosystem from scratch. Lead and mentored a team of 3 developers while designing high-performance database architecture for hundreds of thousands of companies and candidates.",
    highlights: [
      "Built mission-critical mailing engine & financial modules",
      "Established CI/CD pipelines & microservices architecture",
      "Directed technical hiring for AI, Full-Stack, and .NET roles"
    ],
    color: "from-primary to-cyan-400"
  },
  {
    company: "Periskope",
    role: "Full Stack Engineer",
    period: "Jan 2024 – Mar 2024",
    location: "Remote",
    description: "Enhanced a WhatsApp-integrated ticketing system using Next.js and MongoDB. Optimized infrastructure monitoring and release workflows ensuring high system reliability.",
    highlights: [
      "WhatsApp integration & ticketing system",
      "Infrastructure monitoring optimization",
      "High system reliability maintenance"
    ],
    color: "from-violet-500 to-purple-400"
  },
  {
    company: "Moneytor",
    role: "Software Developer",
    period: "Sep 2022 – Oct 2023",
    location: "Mumbai, India",
    description: "Re-engineered loan settlement frontend in Angular, increasing repayments by 1,500/month. Built real-time bulk messaging engine using Socket.io and Firebase.",
    highlights: [
      "Increased repayments by 1,500/month",
      "Real-time bulk messaging with Socket.io",
      "Robust AuthGuard implementation"
    ],
    color: "from-emerald-500 to-teal-400"
  },
  {
    company: "Codevision Technologies",
    role: "Frontend Developer",
    period: "Nov 2021 – July 2022",
    location: "Ahmedabad, India",
    description: "Developed high-traffic UI components for payment and project management apps using React and Angular. Reduced technical debt by enforcing DRY principles.",
    highlights: [
      "High-traffic payment app components",
      "Technical debt reduction",
      "Modern ES6+ standards enforcement"
    ],
    color: "from-orange-500 to-amber-400"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-medium md:text-5xl">
            Where I've <span className="text-gradient">Built & Scaled</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From startups to scale-ups, crafting solutions that drive business results.
          </p>
        </motion.div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:card-shadow md:p-8">
                {/* Gradient accent line */}
                <div className={`absolute top-0 left-0 h-1 w-full bg-gradient-to-r ${exp.color} opacity-0 transition-opacity group-hover:opacity-100`} />
                
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-3">
                      <h3 className="font-display text-xl font-medium md:text-2xl">
                        {exp.role}
                      </h3>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:text-primary" />
                    </div>
                    <p className="mt-1 text-primary font-medium">{exp.company}</p>
                    <p className="mt-3 text-muted-foreground text-sm leading-relaxed md:text-base">
                      {exp.description}
                    </p>
                    
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-col items-end text-right">
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                    <span className="mt-1 text-xs text-muted-foreground/60">{exp.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
