import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  ArrowRight,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Code,
  Database,
  Terminal,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useContact } from "@/hooks/use-contact";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api, type MessageInput } from "@shared/routes";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const profileFormal = "/images/profile-formal.jpeg";
const profileCasual = "/images/profile-casual.jpeg";

export default function Home() {
  const contactMutation = useContact();

  const form = useForm<MessageInput>({
    resolver: zodResolver(api.contact.submit.input),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: MessageInput) => {
    contactMutation.mutate(data, {
      onSuccess: () => {
        form.reset();
        const subject = encodeURIComponent(
          `Portfolio Contact from ${data.name}`,
        );
        const body = encodeURIComponent(
          `Message from Portfolio Website\n\nName: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        );
        window.location.href = `mailto:jaikishankumar862@gmail.com?subject=${subject}&body=${body}`;
      },
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative z-10 pt-20"
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2 mb-6 text-primary font-medium tracking-wide uppercase text-sm">
              <span className="w-8 h-[2px] bg-primary block" />
              Welcome to my portfolio
            </div>

            <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
              I'm <span className="text-gradient">Jaikay Kumar</span>
            </h1>

            <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8">
              Python Programmer & Data Science Student
            </h2>

            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl mb-10 border-l-2 border-white/10 pl-6">
              Transforming raw data into actionable insights and building robust
              applications that solve real-world problems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="contact" smooth={true} offset={-100}>
                <Button size="lg" className="rounded-full px-8 text-base">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="/Jaikay_Kumar_CV.docx" download="Jaikay_Kumar_CV.docx">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 text-base border-white/10 hover:bg-white/5"
                >
                  Download CV <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="flex gap-6 mt-12 text-muted-foreground">
              <a
                href="https://github.com/Jaikay33"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:contact@jaikay.dev"
                className="hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-[450px] h-[550px] mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-[2rem] transform rotate-6 opacity-30 blur-lg" />
              <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] transform -rotate-3 backdrop-blur-sm" />
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl">
                <img
                  src={profileFormal}
                  alt="Jaikay Kumar Formal"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" title="About Me" className="bg-white/[0.02]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full" />
              <div className="absolute inset-4 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/images/profile-hackathon.jpeg"
                  alt="Jaikay Kumar Hackathon"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background p-4 rounded-2xl border border-white/10 shadow-xl flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Code size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold">Insight Specialist</div>
                  <div className="text-xs text-muted-foreground">
                    Passionate Coder
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-6 text-foreground">
              Dedicated to solving complex problems through code to clean &
              analys the Data.
            </h3>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Doing SMIT's Data Science and AI course (May
                2025 – April 2026), I am building a strong foundation in Python
                programming and data analysis.
              </p>
              <p>
                My journey into tech started with a curiosity about how data can
                influence decisions. Now, I'm transforming that curiosity into
                technical expertise, working on projects that bridge the gap
                between raw data and meaningful insights.
              </p>
              <p>
                I recently participated in the Indus AI Week Hackathon, where I
                developed SentinelPatch, an AI-powered security orchestrator.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold font-display text-primary">
                  02+
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Years Learning
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-4xl font-bold font-display text-primary">
                  03+
                </span>
                <span className="text-sm text-muted-foreground uppercase tracking-wider">
                  Projects Built
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section
        id="experience"
        title="Experience"
        subtitle="My professional journey and hackathons."
      >
        <div className="relative border-l border-white/10 ml-4 md:ml-12 space-y-12">
          {/* Item 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
              <h3 className="text-xl font-bold">Python Programmer Intern</h3>
              <Badge
                variant="outline"
                className="w-fit border-primary/30 text-primary bg-primary/5"
              >
                CodeAlpha
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar size={14} />
              <span>June 2025 - June 2025</span>
              <span className="mx-2">•</span>
              <MapPin size={14} />
              <span>Remote</span>
            </div>
            <p className="text-muted-foreground/80 max-w-2xl">
              Completed an intensive internship focusing on Python programming,
              automation, and data processing.
            </p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-background" />
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
              <h3 className="text-xl font-bold">Indus AI week | Hackathon</h3>
              <Badge variant="outline" className="w-fit">
                SMIT Saylani Mass IT
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar size={14} />
              <span>Feb 2026</span>
              <span className="mx-2">•</span>
              <MapPin size={14} />
              <span>Hyderabad</span>
            </div>
            <p className="text-muted-foreground/80 max-w-2xl">
              Developed SentinelPatch, an AI-powered security orchestrator for
              vulnerability detection and automated patching.
            </p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-background" />
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
              <h3 className="text-xl font-bold">Coding Night / Hackathon</h3>
              <Badge variant="outline" className="w-fit">
                SMIT Saylani Mass IT
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar size={14} />
              <span>Nov 2025</span>
              <span className="mx-2">•</span>
              <MapPin size={14} />
              <span>Hyderabad</span>
            </div>
            <p className="text-muted-foreground/80 max-w-2xl">
              Built an interactive data visualization dashboard using Streamlit
              and Pandas during a 12-hour coding challenge.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" title="Skills" className="bg-white/[0.02]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Python",
              icon: <Terminal className="w-8 h-8 text-yellow-500" />,
              level: 90,
            },
            {
              name: "Data Analysis",
              icon: <Database className="w-8 h-8 text-blue-500" />,
              level: 85,
            },
            {
              name: "Pandas & NumPy",
              icon: <Code className="w-8 h-8 text-green-500" />,
              level: 80,
            },
            {
              name: "Streamlit",
              icon: <ArrowRight className="w-8 h-8 text-red-500" />,
              level: 75,
            },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
            >
              <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center">
                {skill.icon}
              </div>
              <h4 className="text-lg font-bold mb-2">{skill.name}</h4>
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="h-full bg-primary"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {[
            "Data Visualization",
            "Git & GitHub",
            "SQL",
            "Teamwork",
            "Problem Solving",
            "Tkinter",
            "Fast API",
            "Matplotlib",
            "Seaborn",
          ].map((tag, i) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Some of the things I've built recently."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="SentinelPatch"
            description="AI-powered security orchestrator developed for Indus AI Week. Detects and remediates web vulnerabilities by identifying exact code locations and generating autonomous patches."
            tags={["TypeScript", "Next.js", "Tailwind CSS", "Security"]}
            github="https://github.com/Jaikay33/SENTINELPATCH"
            delay={0}
          />
          <ProjectCard
            title="Translator Pro App"
            description="A desktop GUI application built with Python and Tkinter that integrates the Google Translate API. Features real-time translation, language detection, and a user-friendly interface."
            tags={["Python", "Tkinter", "API Integration", "GUI"]}
            github="https://github.com/Jaikay33/Project-Translator-Pro"
            delay={0.1}
          />
          <ProjectCard
            title="Data Analysis Dashboard"
            description="Interactive web dashboard for cleaning, analyzing, and visualizing complex datasets. Built with Streamlit and Pandas to provide actionable business insights."
            tags={["Python", "Streamlit", "Pandas", "Visualization"]}
            github="https://github.com/Jaikay33/SMIT-CODING-NIGHT"
            delay={0.2}
          />
        </div>
      </Section>

      {/* Education Section */}
      <Section id="education" title="Education">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-2">Data Science & AI</h3>
            <p className="text-primary font-medium mb-4">
              SMIT (Saylani Mass IT Training)
            </p>
            <p className="text-muted-foreground">
              Intensive training program (May 2025 – April 2026) covering
              Python, Machine Learning, Deep Learning, and Generative AI.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-2">HSSC Part II</h3>
            <p className="text-primary font-medium mb-4">BISE Hyderabad</p>
            <p className="text-muted-foreground">
              Higher Secondary School Certificate (Apr 2023 – Aug 2025).
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
            <h3 className="text-2xl font-bold mb-2">IELTS</h3>
            <p className="text-primary font-medium mb-4">
              IDP | British Council
            </p>
            <p className="text-muted-foreground">
              Listening: 7.5, Reading: 6.0, Writing: 6.0, Speaking: 6.0 |
              Overall: 6.5 (Dec 2025).
            </p>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="pb-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 max-w-4xl mx-auto overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl font-bold font-display mb-6">
                Let's Work Together
              </h2>
              <p className="text-muted-foreground mb-8">
                Drop your details to contact with me. Whether you have a
                question or just want to say hi, I'll try my best to get back to
                you!
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:contact@jaikay.dev"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>jaikishankumar862@gmail.com</span>
                </a>
                <a
                  href="https://linkedin.com/in/jaikishan-kumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <span>/in/jaikishan-kumar</span>
                </a>
                <a
                  href="https://github.com/Jaikay33"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors">
                    <Github size={20} />
                  </div>
                  <span>@Jaikay33</span>
                </a>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="John Doe"
                            {...field}
                            className="bg-background/50 border-white/10 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="john@example.com"
                            {...field}
                            className="bg-background/50 border-white/10 focus:border-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project..."
                            className="resize-none min-h-[120px] bg-background/50 border-white/10 focus:border-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full font-bold"
                    size="lg"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <p>
          &copy; {new Date().getFullYear()} Jaikay Kumar. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
