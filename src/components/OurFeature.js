import React from 'react';
import { FaPaintBrush, FaLaptopCode, FaCheckCircle, FaRocket } from 'react-icons/fa'; // Import icons from react-icons

const features = [
  {
    title: 'Product Design',
    description: 'Crafting user-centric designs that make your product stand out and resonate with your audience, making it truly unique and impactful.',
    icon: <FaPaintBrush className="text-4xl text-blue-500" />
  },
  {
    title: 'Development',
    description: 'Building scalable and robust solutions tailored to your needs. We ensure reliable software integration and modernize your legacy systems.',
    icon: <FaLaptopCode className="text-4xl text-green-500" />
  },
  {
    title: 'Quality Assurance',
    description: 'Ensuring your product is bug-free and meets the highest standards through comprehensive testing and validation processes.',
    icon: <FaCheckCircle className="text-4xl text-yellow-500" />
  },
  {
    title: 'Launch & Optimization',
    description: 'Launching your product with a strategic approach and optimizing it for performance and user engagement to ensure long-term success.',
    icon: <FaRocket className="text-4xl text-red-500" />
  }
];

const OurFeature = () => {
  return (
    <div className="py-12 px-6 bg-gray-50">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h1>
        <h2 className="text-xl font-medium text-gray-600">Design the Concept of Your Business Idea Now</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white border border-gray-300 rounded-xl shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden h-60 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100"
          >
            {/* Decorative Circle Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className={`w-48 h-48 rounded-full ${index % 2 === 0 ? 'bg-blue-100' : 'bg-green-100'}`}></div>
            </div>
            {/* Icon */}
            <div className="mb-4 z-10">
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 z-10">{feature.title}</h3>
            {/* Description */}
            <p className="text-gray-700 text-center line-clamp-3 z-10">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFeature;
