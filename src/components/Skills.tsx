
import { Code, Database, Settings, Cloud, Zap, Cpu, Globe, Terminal } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      skills: ["Java", "Python", "JavaScript", "Scala"],
      color: "from-blue-500/10 to-blue-600/10",
      iconColor: "text-blue-600"
    },
    {
      title: "Frameworks",
      icon: Settings,
      skills: ["Spring Boot", "Django", "ReactJS", "Apache Kafka"],
      color: "from-green-500/10 to-green-600/10",
      iconColor: "text-green-600"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Pinot", "Venice"],
      color: "from-purple-500/10 to-purple-600/10",
      iconColor: "text-purple-600"
    },
    {
      title: "Cloud & Tools",
      icon: Cloud,
      skills: ["AWS", "Docker", "Jenkins", "Git"],
      color: "from-orange-500/10 to-orange-600/10",
      iconColor: "text-orange-600"
    },
    {
      title: "Architecture",
      icon: Cpu,
      skills: ["Microservices", "REST APIs", "System Design"],
      color: "from-red-500/10 to-red-600/10",
      iconColor: "text-red-600"
    },
    {
      title: "Specializations",
      icon: Zap,
      skills: ["Backend Systems", "Data Processing", "ML Integration"],
      color: "from-yellow-500/10 to-yellow-600/10",
      iconColor: "text-yellow-600"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-muted/20 to-background/0" />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Terminal className="absolute top-10 right-10 h-6 w-6 text-primary/5 rotate-12" />
        <Globe className="absolute bottom-10 left-10 h-8 w-8 text-primary/5 -rotate-12" />
      </div>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Core Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Expertise in building robust, scalable backend systems and distributed architectures
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden h-full">
              <CardContent className="p-6">
                <div className={`flex items-center gap-3 mb-4 p-3 rounded-lg bg-gradient-to-r ${category.color}`}>
                  <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
