
import { Code, Database, Settings, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "JavaScript ES6", "Python", "Scala", "HTML/CSS", "jQuery"],
      color: "text-blue-500"
    },
    {
      title: "Frameworks and OS",
      icon: Settings,
      skills: ["Spring Boot", "Django", "ReactJS", "Ember.js", "Linux", "Apache Kafka", "Samza", "Airflow", "LangChain"],
      color: "text-green-500"
    },
    {
      title: "Databases and Technologies",
      icon: Database,
      skills: ["MYSQL", "PostgreSQL", "Pinot", "Venice", "Git", "Jenkins", "Elastic search"],
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-muted/20 to-background/0" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex} 
                      className="group/skill flex items-center justify-between p-3 bg-background/50 rounded-lg border border-border/30 hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 cursor-default"
                    >
                      <span className="text-sm font-medium text-foreground">{skill}</span>
                      <TrendingUp className="h-4 w-4 text-primary/60 group-hover/skill:text-primary group-hover/skill:scale-110 transition-all" />
                    </div>
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
