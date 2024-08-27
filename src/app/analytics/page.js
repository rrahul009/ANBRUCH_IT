import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const AnalyticsPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Navbar />

      <main className="p-6 md:p-5 lg:p-8">
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">Analytics Services</h1>
          <p className="text-lg text-gray-800 max-w-4xl mx-auto">
            Gain valuable insights into your business performance with our comprehensive analytics solutions. We help you make data-driven decisions and optimize your operations.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Web Analytics Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Web Analytics</h3>
            <img 
              src='/Assets/Analytics/Web-Analytics.png' 
              alt="Web Analytics" 
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-sm"
            />
            <p className="text-gray-700 mb-4">
              Track website traffic, user behavior, and conversion rates to optimize your online presence.
            </p>
            <ul className="list-disc list-inside text-left mx-auto max-w-xs">
              <li>User acquisition and retention</li>
              <li>Conversion rate optimization (CRO)</li>
              <li>A/B testing</li>
            </ul>
          </div>

          {/* Mobile App Analytics Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Mobile App Analytics</h3>
            <img 
              src='/Assets/Analytics/mobile_app.jpg'
              alt="Mobile App Analytics"
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-sm"
            />
            <p className="text-gray-700 mb-4">
              Understand how users interact with your mobile app and identify areas for improvement.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>User engagement analysis</li>
              <li>App store optimization (ASO)</li>
              <li>Crash reporting</li>
            </ul>
          </div>

          {/* Data Visualization Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Data Visualization</h3>
            <img 
              src='/Assets/Analytics/data_visualization.jpg' 
              alt="Data Visualization"
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-sm"
            />
            <p className="text-gray-700 mb-4">
              Transform raw data into actionable insights with visually appealing and informative dashboards.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Custom dashboard development</li>
              <li>Data storytelling</li>
              <li>Interactive visualizations</li>
            </ul>
          </div>

          {/* Predictive Analytics Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Predictive Analytics</h3>
            <img 
              src='/Assets/Analytics/predictiveAnalytics.webp' 
              alt="Predictive Analytics"
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-sm"
            />
            <p className="text-gray-700 mb-4">
              Leverage data-driven insights to forecast future trends and make informed decisions.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Machine learning models</li>
              <li>Customer churn prediction</li>
              <li>Sales forecasting</li>
            </ul>
          </div>

          {/* Customer Analytics Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Customer Analytics</h3>
            <img 
              src='/Assets/Analytics/customer-analytics_0.jpg'
              alt="Customer Analytics"
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-sm"
            />
            <p className="text-gray-700 mb-4">
              Analyze customer behavior and preferences to enhance customer experiences and improve retention.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Customer segmentation</li>
              <li>Lifetime value analysis</li>
              <li>Behavioral analysis</li>
            </ul>
          </div>

          {/* Social Media Analytics Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl">
            <h3 className="text-2xl font-semibold mb-3 text-blue-600">Social Media Analytics</h3>
            <img 
              src='/Assets/Analytics/social_media.jpg'
              alt="Social Media Analytics"
              className="w-full h-40 object-cover mb-4 rounded-lg shadow-sm"
            />
            <p className="text-gray-700 mb-4">
              Monitor and analyze your social media performance to enhance engagement and optimize your social media strategy.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Engagement metrics</li>
              <li>Sentiment analysis</li>
              <li>Content performance</li>
            </ul>
          </div>
        </div>
        {/* Client Testimonials Section */}
<section className="bg-blue-50 py-12 px-6 rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold text-blue-600 mb-8 text-center">What Our Clients Say</h2>
  <div className="space-y-8">
    {/* Testimonial 1 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client 1" className="w-16 h-16 rounded-full object-cover" />
      <div>
        <p className="text-gray-700 mb-4">
          "The analytics services provided were game-changing for our business. We gained actionable insights that significantly improved our decision-making and operational efficiency."
        </p>
        <p className="font-semibold text-blue-600">Jane Doe</p>
        <p className="text-gray-500">CEO, Tech Innovators</p>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client 1" className="w-16 h-16 rounded-full object-cover" />
      <div>
        <p className="text-gray-700 mb-4">
          "Their data visualization tools made it easy for us to interpret complex data. We now have clear, actionable insights that help drive our strategy."
        </p>
        <p className="font-semibold text-blue-600">John Smith</p>
        <p className="text-gray-500">Marketing Director, Creative Solutions</p>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="bg-white p-6 rounded-lg shadow-md flex items-start space-x-4">
    <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Client 1" className="w-16 h-16 rounded-full object-cover" />
      
      <div>
        <p className="text-gray-700 mb-4">
          "The predictive analytics offered gave us a competitive edge by accurately forecasting market trends and customer behavior. Highly recommended!"
        </p>
        <p className="font-semibold text-blue-600">Emily Johnson</p>
        <p className="text-gray-500">Product Manager, FutureTech</p>
      </div>
    </div>
  </div>
</section>
<section id="contact" className="bg-gray-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Transform Your Business?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact us today to discover how our tech consulting services can drive innovation and efficiency in your organization.
          </p>
          <a href="mailto:info@example.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>

      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;
