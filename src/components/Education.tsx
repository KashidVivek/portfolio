
import { GraduationCap, MapPin } from 'lucide-react';

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
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-start gap-3">
                <GraduationCap className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                  <h4 className="text-md font-medium text-blue-600 mb-2">{edu.school}</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div>{edu.period}</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="font-medium text-gray-700">{edu.gpa}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
