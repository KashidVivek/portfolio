
import { Calendar, MapPin, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "LinkedIn",
      role: "Software Engineer",
      period: "June 2024 – Present",
      location: "Toronto, ON",
      achievements: [
        "Designed and development of personalized career development learning plans in LinkedIn learning.",
        "Facilitating the design and development of LSAT surveys for course to demonstrate ROI to enterprise admins."
      ]
    },
    {
      company: "LinkedIn",
      role: "Software Engineer",
      period: "July 2022 – June 2024",
      location: "San Francisco, CA",
      achievements: [
        "Integrated EduBrite test taking experience in LinkedIn learning via I-frame based integration.",
        "Developed the GDPR API's for merge/unmerge and purge users.",
        "Designed and development of enhanced test taking experience in LinkedIn learning."
      ]
    },
    {
      company: "EduBrite Systems Inc",
      role: "Full Stack Developer",
      period: "June 2021 – July 2022",
      location: "Fremont, CA",
      achievements: [
        "Accomplished developing, and evolving software in a fast paced and agile and collaborative software environment.",
        "Collaborated along with Principal architects to plan and code existing monolith in Microservices based architecture.",
        "Utilized Spring framework for integration of Cisco WebEx into the learning Management system for Virtual instructor led events and furthering launch of app on the WebEx marketplace."
      ]
    },
    {
      company: "Diyversity",
      role: "Software Engineer Intern",
      period: "January 2021 – May 2021",
      location: "San Francisco, CA",
      achievements: [
        "Facilitating the integration, parsing, scraping and transformation of data to create new dataset having 50K songs.",
        "Design and coding the implementation of deep learning-based solutions Video labelling, podcast recommendations and Image recognition, and deployment as REST API's."
      ]
    },
    {
      company: "Korea Institute of Science and Technology",
      role: "Research Intern",
      period: "June 2018 – July 2018",
      location: "Seoul, South Korea",
      achievements: [
        "Demonstrated and delivered High quality live streaming of video onto a head Mounted Device by RTP streaming.",
        "Reduced the video latency by 50%, refined automated switching and video stitching the live streams with help of NVIDIA CUDA."
      ]
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.02]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary/50 to-primary mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/20 overflow-hidden">
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <ChevronRight className="h-5 w-5 text-primary/60 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-3">{exp.company}</h4>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50">
                      <MapPin className="h-4 w-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary/60 mt-2 flex-shrink-0 group-hover:bg-primary transition-colors" />
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
