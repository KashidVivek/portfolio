
import { ExternalLink, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: "Rekemendo",
      url: "http://rekemendo.me",
      period: "June 2020",
      technologies: "Python, Django, Javascript, Pandas, Scikit Learn, AWS",
      description: "Administered web application built using Django to get personalized movie suggestions containing 25 million ratings and 10 million tags which recommends from across 60,000 movies similar to that of user liked in past."
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
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{project.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Technologies:</div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.split(', ').map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
