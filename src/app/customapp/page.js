import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ServiceProvide from '@/components/ServiceProvide';
import { DevicePhoneMobileIcon, GlobeAltIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import React from 'react';

const CustomAppDevelopmentPage = () => {
  return (
    <div className="bg-gray-50">
      <Header />
      <Navbar />

      <main className="p-6 md:p-10 lg:p-12">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Our Development Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We specialize in delivering high-quality mobile apps, web apps, and UX/UI designs. Discover our comprehensive services below.
          </p>
        </section>

        {/* Service Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Mobile App Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 md:p-8">
            <img 
              src='https://digitalauthority.me/wp-content/uploads/2019/04/shutterstock_572886535.jpg' 
              alt="Mobile App Development"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Mobile App Development</h3>
            <p className="text-gray-700 mb-4">
              We craft native mobile applications for Android and iOS, ensuring optimal performance and a seamless user experience.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Android Native</li>
              <li>iOS Native</li>
              <li>Cross-Platform Solutions</li>
              <li>App Store Optimization (ASO)</li>
              <li>In-App Purchases & Monetization</li>
              <li>Maintenance & Updates</li>
              <li>Custom Integrations</li>
              <li>Push Notifications</li>
            </ul>
          </div>

          {/* Web App Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 md:p-8">
            <img 
              src='https://essencesoftwares.com/wp-content/uploads/2020/10/Web-Development.jpeg' 
              alt="Web App Development"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">Web App Development</h3>
            <p className="text-gray-700 mb-4">
              Our web applications are designed to be responsive, scalable, and secure, addressing a wide array of business needs.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Custom Web Applications</li>
              <li>eCommerce Solutions</li>
              <li>Progressive Web Apps (PWAs)</li>
              <li>Content Management Systems (CMS)</li>
              <li>API Development & Integration</li>
              <li>Database Management</li>
              <li>Web Application Security</li>
              <li>Cloud-Based Solutions</li>
              <li>Performance Optimization</li>
              <li>Search Engine Optimization (SEO)</li>
              <li>Responsive Design</li>
              <li>DevOps Integration</li>
            </ul>
          </div>

          {/* UX/UI Design Card */}
          <div className="bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl p-6 md:p-8">
            <img 
              src='https://www.almondsolutions.com/images/blog-ui-ux-150223.jpg' 
              alt="UX/UI Design"
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-gray-800">UX/UI Design</h3>
            <p className="text-gray-700 mb-4">
              We design intuitive and visually appealing interfaces that enhance user engagement and satisfaction.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>UI/UX Research</li>
              <li>Wireframing & Prototyping</li>
              <li>Interactive Design</li>
              <li>User Testing & Feedback</li>
              <li>Design System Creation</li>
              <li>Branding & Identity Design</li>
              <li>Accessibility Design</li>
              <li>Visual & Graphic Design</li>
            </ul>
          </div>
        </div>
      </main>

      <ServiceProvide />
      <Footer />
    </div>
  );
}

export default CustomAppDevelopmentPage;
