
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-b border-border/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-6">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-4">
              Vivek Lalasaheb Kashid
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Senior Software Engineer | Backend Development Specialist
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground animate-fade-in [animation-delay:200ms]">
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300">
              <Mail className="h-4 w-4" />
              <a href="mailto:vkashid.38@gmail.com" className="hover:text-primary transition-colors">
                vkashid.38@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
              <Phone className="h-4 w-4" />
              <span>(352) 871-4267</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
              <MapPin className="h-4 w-4" />
              <span>Toronto, ON, Canada</span>
            </div>
          </div>

          <div className="flex justify-center gap-4 animate-fade-in [animation-delay:400ms]">
            <Button variant="outline" size="sm" className="group">
              <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
              GitHub
            </Button>
            <Button variant="outline" size="sm" className="group">
              <Linkedin className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>
            <Button size="sm" className="group">
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
