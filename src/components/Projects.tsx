
import { ExternalLink, Calendar, Code2, Star, Database, Globe, Cpu } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      name: "Rekemendo",
      url: "http://rekemendo.me",
      period: "June 2020",
      technologies: "Python, Django, Javascript, Pandas, Scikit Learn, AWS",
      description: "Administered web application built using Django to get personalized movie suggestions containing 25 million ratings and 10 million tags which recommends from across 60,000 movies similar to that of user liked in past.",
      featured: true,
      icon: Database,
      logo: "https://via.placeholder.com/100x40/EF4444/FFFFFF?text=Rekemendo",
      color: "from-blue-500/10 to-blue-600/10"
    },
    {
      name: "San Francisco Crime Analysis and Trend Visualization",
      period: "Dec 2019",
      technologies: "Python, Django, SQL Oracle 11g, JavaScript",
      description: "Programmed a website using Django framework which analyzed over 1 Million datasets of San Francisco crime records and presented crime statistics and trends visualized. Worked with motivated team and collaborated as database manager, wrote SQL procedures and complex queries.",
      icon: Globe,
      logo: "https://via.placeholder.com/100x40/10B981/FFFFFF?text=SF+Crime",
      color: "from-green-500/10 to-green-600/10"
    },
    {
      name: "Happene",
      period: "Dec 2019",
      technologies: "JavaScript (Node.js, React.js)",
      description: "Designed and coded a web application to search events happening in the city for the current date using React.js, and redux library and used react-leaflet to render maps, and location popups.",
      icon: Cpu,
      logo: "https://via.placeholder.com/100x40/8B5CF6/FFFFFF?text=Happene",
      color: "from-purple-500/10 to-purple-600/10"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Showcasing expertise in building data-driven applications and scalable web platforms
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden h-full ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
              <div className="relative">
                <div className={`h-48 bg-gradient-to-r ${project.color} flex items-center justify-center transition-all duration-300 group-hover:scale-105`}>
                  <img 
                    src={project.logo} 
                    alt={`${project.name} logo`}
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-background/90 backdrop-blur-sm">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  {project.featured && (
                    <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium backdrop-blur-sm">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  )}
                </div>
                {project.url && (
                  <div className="absolute top-4 right-4">
                    <Button variant="secondary" size="sm" className="group/btn bg-background/90 hover:bg-background backdrop-blur-sm" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.name}
                </h3>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <Calendar className="h-4 w-4" />
                  <span>{project.period}</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <div className="text-sm font-medium text-foreground">Technologies:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(', ').map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
