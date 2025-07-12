
import { ExternalLink, Calendar, Code2, Star } from 'lucide-react';
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
      featured: true
    },
    {
      name: "San Francisco Crime Analysis and Trend Visualization",
      period: "Dec 2019",
      technologies: "Python, Django, SQL Oracle 11g, JavaScript",
      description: "Programmed a website using Django framework which analyzed over 1 Million datasets of San Francisco crime records and presented crime statistics and trends visualized. Worked with motivated team and collaborated as database manager, wrote SQL procedures and complex queries."
    },
    {
      name: "Happene",
      period: "Dec 2019",
      technologies: "JavaScript (Node.js, React.js)",
      description: "Designed and coded a web application to search events happening in the city for the current date using React.js, and redux library and used react-leaflet to render maps, and location popups."
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden h-full ${project.featured ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
              <CardContent className="p-8 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Code2 className="h-5 w-5 text-primary" />
                    </div>
                    {project.featured && (
                      <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        <Star className="h-3 w-3" />
                        Featured
                      </div>
                    )}
                  </div>
                  {project.url && (
                    <Button variant="ghost" size="sm" className="group/btn" asChild>
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                  )}
                </div>
                
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
