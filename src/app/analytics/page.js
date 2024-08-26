import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const AnalyticsPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <Navbar />

      <main className="p-6">
        <section className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-4 text-blue-500">Analytics Services</h1>
          <p className="text-lg text-gray-700">
            Gain valuable insights into your business performance with our comprehensive analytics solutions. We help you make data-driven decisions and optimize your operations.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Web Analytics Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Web Analytics</h3>
            <p className="text-gray-600 mb-4">
              Track website traffic, user behavior, and conversion rates to optimize your online presence.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>User acquisition and retention</li>
              <li>Conversion rate optimization (CRO)</li>
              <li>A/B testing</li>
            </ul>
          </div>

          {/* Mobile App Analytics Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Mobile App Analytics</h3>
            <p className="text-gray-600 mb-4">
              Understand how users interact with your mobile app and identify areas for improvement.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>User engagement analysis</li>
              <li>App store optimization (ASO)</li>
              <li>Crash reporting</li>
            </ul>
          </div>

          {/* Data Visualization Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Data Visualization</h3>
            <p className="text-gray-600 mb-4">
              Transform raw data into actionable insights with visually appealing and informative dashboards.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Custom dashboard development</li>
              <li>Data storytelling</li>
              <li>Interactive visualizations</li>
            </ul>
          </div>

          {/* Predictive Analytics Card */}
          <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
            <h3 className="text-xl font-semibold mb-2 text-blue-500">Predictive Analytics</h3>
            <p className="text-gray-600 mb-4">
              Leverage data-driven insights to forecast future trends and make informed decisions.
            </p>
            <ul className="list-disc list-inside text-left">
              <li>Machine learning models</li>
              <li>Customer churn prediction</li>
              <li>Sales forecasting</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AnalyticsPage;