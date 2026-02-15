import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, Instagram, Send, Loader2, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

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
    <section id="contact" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-medium md:text-5xl">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 space-y-5"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
              Subject
            </label>
            <input
              id="subject"
              type="text"
              placeholder="What's this about?"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="w-full rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-border bg-card px-4 py-3 text-foreground placeholder:text-muted-foreground/50 transition-all focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "sent"}
            className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-medium text-primary-foreground transition-all hover:opacity-90 disabled:opacity-70"
          >
            {status === "idle" && (
              <>
                Send Message
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
            {status === "sending" && (
              <>
                Sending...
                <Loader2 className="h-4 w-4 animate-spin" />
              </>
            )}
            {status === "sent" && (
              <>
                Message Sent!
                <CheckCircle className="h-4 w-4" />
              </>
            )}
            {status === "error" && "Something went wrong. Try again."}
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-col items-center gap-6"
        >
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span className="text-sm">sariyalakaran@gmail.com</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Delhi, India</span>
            </div>
            <span className="text-border">•</span>
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 7874933875</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/karan-ui-ux"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:glow"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/karan._.sariyala/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:glow"
            >
              <Instagram className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
