
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Vivek Lalasaheb Kashid</h1>
          <p className="text-xl text-gray-600 mb-4">Senior Software Engineer | Backend Development Specialist</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:vkashid.38@gmail.com" className="hover:text-blue-600 transition-colors">
              vkashid.38@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>(352) 871-4267</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Toronto, ON, Canada</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
