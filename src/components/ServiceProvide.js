import React from 'react';
import {
  FaCode, FaDesktop, FaReact, FaJava,
  FaNode, FaPython, FaDatabase, FaCss3, FaApple,
  FaAndroid, FaSalesforce,
  FaVuejs
} from 'react-icons/fa'; // Importing more icons

// Mapping services to icons
const serviceIcons = {
  'React Development': <FaReact />,
  'Next.js Development': <FaReact />,
  'Angular Development': <FaDesktop />,
  'Vue.js Development': <FaVuejs />,
  'PHP Development': <FaCode />,
  'Java Development': <FaJava />,
  'Node.js Development': <FaNode />,
  'Python Development': <FaPython />,
  'Database Management': <FaDatabase />,
  'SQL': <FaDatabase />,
  'Apple Development': <FaApple />,
  'Android Development': <FaAndroid />,
  'CSS Styling': <FaCss3 />,
  'Salesforce Development': <FaSalesforce />,
  'Odoo Development': <FaCode />, // No specific icon for Odoo, using a generic one





  // Add more service-icon mappings if needed
};

const ServiceProvide = () => {
  const services = Object.keys(serviceIcons);

  return (
    <div className="p-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 col-span-full text-center">
        Transform Your Business with Our Technology Solutions"
      </h2>
      {services.map((service) => (
        <div
          key={service}
          className="bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-lg shadow-lg p-6 flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
        >
          <div className="text-blue-500 text-4xl">
            {serviceIcons[service]}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-800">{service}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceProvide;
