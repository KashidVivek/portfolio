
import { Calendar, MapPin } from 'lucide-react';

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
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Work Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <h4 className="text-lg font-medium text-blue-600">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end mt-2 md:mt-0 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-2">•</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
