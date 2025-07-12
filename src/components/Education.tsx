
import { GraduationCap, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Education = () => {
  const education = [
    {
      degree: "Masters, Computer Science",
      school: "University of Florida",
      period: "May 2021",
      location: "Gainesville, FL",
      gpa: "GPA: 3.74 / 4.0"
    },
    {
      degree: "Bachelors, Computer Science",
      school: "University of Pune",
      period: "June 2019",
      location: "Pune, India",
      gpa: "CGPA: 8.55/10.0"
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-muted/20 to-background/0" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden h-full">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-lg font-semibold text-primary">{edu.school}</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary/60" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-3 w-3" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 font-medium text-foreground">
                        <Award className="h-3 w-3 text-primary" />
                        <span>{edu.gpa}</span>
                      </div>
                    </div>
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

export default Education;
