import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Instagram, Send, Loader2, CheckCircle, Sparkles } from "lucide-react";

const formFieldVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: "easeOut" },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Project Collaboration",
    message: "Hi Karan, I came across your portfolio and I'm impressed by your work. I'd love to discuss a potential project collaboration. Looking forward to hearing from you!",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/sariyalakaran@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || "New message from portfolio",
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-32 md:px-12 overflow-hidden">
      {/* Animated background orbs */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 -translate-x-1/2">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="h-[400px] w-[400px] rounded-full bg-primary blur-[120px]"
        />
      </div>
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 translate-x-1/2">
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="h-[300px] w-[300px] rounded-full bg-primary blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Get in Touch</span>
          </motion.div>

          <h2 className="font-display text-3xl font-medium md:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        {/* Form card with animated border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mt-12 rounded-2xl p-[1px]"
          style={{
            background: focusedField
              ? "linear-gradient(135deg, hsl(var(--primary) / 0.4), transparent 50%, hsl(var(--primary) / 0.2))"
              : "linear-gradient(135deg, hsl(var(--border)), transparent 50%, hsl(var(--border)))",
            transition: "background 0.5s ease",
          }}
        >
          <div className="rounded-2xl bg-card/80 backdrop-blur-sm p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <motion.div
                  custom={0}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <motion.input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                  />
                </motion.div>
                <motion.div
                  custom={1}
                  variants={formFieldVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <motion.input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    whileFocus={{ scale: 1.01 }}
                    className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                  />
                </motion.div>
              </div>

              <motion.div
                custom={2}
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                  Subject
                </label>
                <motion.input
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                />
              </motion.div>

              <motion.div
                custom={3}
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  whileFocus={{ scale: 1.01 }}
                  className="w-full resize-none rounded-lg border border-border bg-background/50 px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 focus:shadow-[0_0_20px_-5px_hsl(var(--primary)/0.3)]"
                />
              </motion.div>

              <motion.div
                custom={4}
                variants={formFieldVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={status === "sending" || status === "sent"}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px -5px hsl(var(--primary) / 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-all disabled:opacity-70"
                >
                  {/* Shimmer effect on hover */}
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />

                  <AnimatePresence mode="wait">
                    {status === "idle" && (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        Send Message
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </motion.span>
                    )}
                    {status === "sending" && (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        Sending...
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </motion.span>
                    )}
                    {status === "sent" && (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        Message Sent!
                        <CheckCircle className="h-4 w-4" />
                      </motion.span>
                    )}
                    {status === "error" && (
                      <motion.span
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                      >
                        Something went wrong. Try again.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Contact info & socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex flex-wrap items-center justify-center gap-4 text-muted-foreground">
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">sariyalakaran@gmail.com</span>
            </motion.div>
            <span className="text-border">•</span>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Delhi, India</span>
            </motion.div>
            <span className="text-border">•</span>
            <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 7874933875</span>
            </motion.div>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: "https://linkedin.com/in/karan-ui-ux", icon: Linkedin },
              { href: "https://www.instagram.com/karan._.sariyala/", icon: Instagram },
            ].map(({ href, icon: Icon }, i) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary hover:glow"
              >
                <Icon className="h-4 w-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
