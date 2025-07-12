
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-6">
            Open to new opportunities in backend engineering and system architecture
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href="mailto:vkashid.38@gmail.com" className="hover:text-blue-400 transition-colors">
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
        
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>&copy; 2024 Vivek Lalasaheb Kashid. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
