
import { Mail, Phone, MapPin, Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-t border-border/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-8">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Let's Connect</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Open to new opportunities in backend engineering and system architecture. 
              Let's build something amazing together.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <a href="mailto:vkashid.38@gmail.com" className="hover:text-primary transition-colors font-medium">
                vkashid.38@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
              <Phone className="h-4 w-4" />
              <span className="font-medium">(352) 871-4267</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50">
              <MapPin className="h-4 w-4" />
              <span className="font-medium">Toronto, ON, Canada</span>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="sm" 
            onClick={scrollToTop}
            className="group mx-auto"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            &copy; 2024 Vivek Lalasaheb Kashid. Made with 
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            for backend engineering excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
