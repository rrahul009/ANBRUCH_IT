// components/CompanyOverview.js
import React from 'react';
import { FaGlobe, FaSmile } from 'react-icons/fa'; // Import icons for visual appeal

const CompanyOverview = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-50 mb-5">
      {/* Card 1: Countries Worldwide */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-white border border-gray-200 shadow-lg 
      rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl
       hover:scale-105"data-aos="flip-left">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center">
              <FaGlobe className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 ml-4">5+ Countries Worldwide</h2>
          </div>
          <p className="text-gray-700">
            WROCUS serves businesses in Australia, Singapore, UK, USA, and India with a dedicated team providing software development solutions.
          </p>
        </div>
      </div>

      {/* Card 2: Happy Customers */}
      <div className="w-full sm:w-1/2 lg:w-1/3 bg-white border border-gray-200 shadow-lg 
      rounded-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl
       hover:scale-105"data-aos="flip-left">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-500 rounded-full flex items-center justify-center">
              <FaSmile className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 ml-4">250+ Happy Customers</h2>
          </div>
          <p className="text-gray-700">
            We retain our customers through proactive support, transparency, and complete control of the project.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompanyOverview;
