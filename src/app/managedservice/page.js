import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const ManagedServicesPage = () => {
  return (
   <div>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Managed Services</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-teal-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Comprehensive Managed Services for Seamless Operations
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Optimize your IT operations and focus on your core business with our expert-managed services. We handle your IT infrastructure, support, and maintenance so you can achieve operational excellence without the hassle.
          </p>
          <a href="#contact" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-300">
            Learn More
          </a>
        </div>
      </section>

      {/* Managed Services Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Managed Services</h2>
          <p className="text-lg mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Our managed services are designed to provide you with comprehensive support and management of your IT infrastructure. With our team of experts handling the day-to-day operations, you can focus on growing your business while we ensure your technology runs smoothly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">24/7 IT Support</h3>
              <p className="text-gray-600">
                Get round-the-clock support for all your IT issues. Our dedicated support team is available 24/7 to ensure your systems are always up and running smoothly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Proactive Monitoring</h3>
              <p className="text-gray-600">
                We continuously monitor your IT environment to identify and resolve potential issues before they impact your business. Stay ahead with proactive problem-solving and maintenance.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cloud Management</h3>
              <p className="text-gray-600">
                Optimize and manage your cloud infrastructure with our expert cloud management services. We handle everything from cloud setup to ongoing maintenance and optimization.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data Backup & Recovery</h3>
              <p className="text-gray-600">
                Ensure the safety of your critical data with our robust backup and recovery solutions. We provide regular backups and quick recovery options to minimize downtime and data loss.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Network Management</h3>
              <p className="text-gray-600">
                Manage and secure your network infrastructure with our comprehensive network management services. We ensure optimal performance and security for your network.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IT Strategy & Consulting</h3>
              <p className="text-gray-600">
                Align your IT strategy with your business goals with our expert consulting services. We provide strategic advice and planning to help you leverage technology for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="bg-gray-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Transform Your IT Operations?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact us today to learn more about our managed services and how we can help streamline your IT operations for better efficiency and performance.
          </p>
          <a href="mailto:info@example.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
            Get in Touch
          </a>
        </div>
      </section>
    </div>
    <Footer/>
   </div>
  )
}

export default ManagedServicesPage
