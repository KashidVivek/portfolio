
import { Code, Database, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "JavaScript ES6", "Python", "Scala", "HTML/CSS", "jQuery"]
    },
    {
      title: "Frameworks and OS",
      icon: Settings,
      skills: ["Spring Boot", "Django", "ReactJS", "Ember.js", "Linux", "Apache Kafka", "Samza", "Airflow", "LangChain"]
    },
    {
      title: "Databases and Technologies",
      icon: Database,
      skills: ["MYSQL", "PostgreSQL", "Pinot", "Venice", "Git", "Jenkins", "Elastic search"]
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Skills & Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="h-6 w-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="px-3 py-2 bg-white rounded border border-gray-200 text-sm text-gray-700 hover:bg-blue-50 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
