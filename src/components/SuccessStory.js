import React from 'react'

const SuccessStory = () => {
  return (
    <div className="bg-gray-50 py-5 px-6 mt-10">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-1">Success Story</h2>
      <p className="text-lg md:text-l text-gray-700 mb-3 max-w-2xl mx-auto">
        Explore how our innovative solutions transformed our client’s operations. Here’s a detailed look at our successful collaboration and the impressive results we achieved.
      </p>
      
      <div className="bg-white p-10 rounded-lg shadow-2xl max-w-4xl mx-auto border border-gray-300">
        <h3 className="text-3xl font-bold text-blue-900 mb-2">Client Challenge</h3>
        <p className="text-lg text-gray-700 mb-4">
          Our client faced significant challenges in modernizing their operations and scaling their business due to outdated technology and inefficient processes.
        </p>
        
        <h3 className="text-3xl font-bold text-blue-900 mb-2">Our Solution</h3>
        <p className="text-lg text-gray-700 mb-3">
          We implemented a cutting-edge solution that included a sophisticated software platform, optimized workflows, and ongoing support to greatly enhance their operational efficiency.
        </p>
        
        <h3 className="text-3xl font-bold text-blue-900 mb-2">Results Achieved</h3>
        <ul className="list-disc list-inside text-lg text-gray-700 mb-2 space-y-2">
          <li>Enhanced operational efficiency by 40%</li>
          <li>Increased revenue by 25%</li>
          <li>Improved customer satisfaction with a sleek, modern interface</li>
          <li>Reduced operational costs by 30%</li>
        </ul>
        
        <div className="mt-6">
          <p className="text-lg font-semibold text-gray-800 mb-2">Client Testimonial:</p>
          <blockquote className="italic text-gray-600 border-l-4 border-blue-600 pl-6 py-4 bg-gray-50">
            "The team exceeded our expectations. Their solution revolutionized our operations and positioned us for future success. We are absolutely thrilled with the results!"
            <br />
            <span className="block mt-2 font-bold text-gray-900">- Client Name, Position</span>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SuccessStory
