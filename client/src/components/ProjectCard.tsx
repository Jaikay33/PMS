import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  delay?: number;
}

export function ProjectCard({ title, description, tags, link, github, delay = 0 }: ProjectProps) {
  const handleClick = () => {
    if (github) {
      window.open(github, "_blank", "noopener,noreferrer");
    } else if (link) {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className="cursor-pointer"
    >
      <Card className="glass-card h-full flex flex-col border-white/5 bg-transparent overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="flex gap-2">
              {github && (
                <div 
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <Github size={20} />
                </div>
              )}
              {link && (
                <div 
                  className="text-muted-foreground hover:text-white transition-colors"
                >
                  <ExternalLink size={20} />
                </div>
              )}
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </CardContent>
        <CardFooter className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
          {tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="bg-white/5 hover:bg-white/10 text-xs font-normal"
            >
              {tag}
            </Badge>
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
