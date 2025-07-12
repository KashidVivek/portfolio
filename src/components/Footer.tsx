
import { Mail, Phone, MapPin, ArrowUp, Lightbulb, Target, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly exploring new technologies and architectural patterns"
    },
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering high-quality, scalable solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Strong believer in cross-functional teamwork and knowledge sharing"
    }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-t border-border/50">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <div className="text-center space-y-12">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-4">Core Values & Approach</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about building robust backend systems that scale and drive business impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {values.map((value, index) => (
              <div key={index} className="group text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
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
          <p className="text-sm text-muted-foreground">
            &copy; 2024 Vivek Lalasaheb Kashid. Building the future of backend engineering.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
