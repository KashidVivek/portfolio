
import { Mail, Phone, MapPin, Github, Linkedin, Download, Code, Database, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/15 to-accent/10 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      {/* Background tech icons */}
      <div className="absolute inset-0 overflow-hidden">
        <Code className="absolute top-20 left-10 h-8 w-8 text-primary/5 rotate-12" />
        <Database className="absolute top-32 right-20 h-12 w-12 text-primary/5 -rotate-12" />
        <Server className="absolute bottom-20 left-1/4 h-10 w-10 text-primary/5 rotate-45" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4">
              Vivek Lalasaheb Kashid
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Senior Software Engineer | Backend Development Specialist
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto mt-4">
              Building scalable backend systems and microservices architecture with expertise in Java, Python, and distributed systems
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-fade-in [animation-delay:200ms]">
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <Mail className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
              <a href="mailto:vkashid.38@gmail.com" className="hover:text-primary transition-colors font-medium">
                vkashid.38@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 group">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">(352) 871-4267</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/60 backdrop-blur-sm border border-border/50 group">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="font-medium">Toronto, ON, Canada</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button variant="outline" size="sm" className="group hover:border-primary/50">
              <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="group hover:border-primary/50">
              <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button size="sm" className="group bg-primary hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2 group-hover:translate-y-[-2px] transition-transform" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
