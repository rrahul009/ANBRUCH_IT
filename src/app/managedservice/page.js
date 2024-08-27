import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { FaHeadset, FaCloud, FaDatabase, FaNetworkWired, FaShieldAlt, FaChartLine } from 'react-icons/fa';
import React from 'react';
import Link from 'next/link';

const ManagedServicesPage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <header className="bg-gray-800 text-white py-4">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold">Managed Services</h1>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-400 to-teal-400 text-white py-5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-extrabold mb-3 leading-tight">
              Comprehensive Managed Services for Seamless Operations
            </h2>
            <p className="text-xl mb-2 max-w-5xl mx-auto">
              Optimize your IT operations and focus on your core business with our expert-managed services. We handle your IT infrastructure, support, and maintenance so you can achieve operational excellence without the hassle.
            </p>
          </div>
        </section>

        {/* Managed Services Overview */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Managed Services</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                {
                  title: "24/7 IT Support",
                  description: "Get round-the-clock support for all your IT issues. Our dedicated support team is available 24/7 to ensure your systems are always up and running smoothly.",
                  icon: <FaHeadset className="w-12 h-12 text-green-500" />
                },
                {
                  title: "Proactive Monitoring",
                  description: "We continuously monitor your IT environment to identify and resolve potential issues before they impact your business. Stay ahead with proactive problem-solving and maintenance.",
                  icon: <FaChartLine className="w-12 h-12 text-green-500" />
                },
                {
                  title: "Cloud Management",
                  description: "Optimize and manage your cloud infrastructure with our expert cloud management services. We handle everything from cloud setup to ongoing maintenance and optimization.",
                  icon: <FaCloud className="w-12 h-12 text-green-500" />
                },
                {
                  title: "Data Backup & Recovery",
                  description: "Ensure the safety of your critical data with our robust backup and recovery solutions. We provide regular backups and quick recovery options to minimize downtime and data loss.",
                  icon: <FaDatabase className="w-12 h-12 text-green-500" />
                },
                {
                  title: "Network Management",
                  description: "Manage and secure your network infrastructure with our comprehensive network management services. We ensure optimal performance and security for your network.",
                  icon: <FaNetworkWired className="w-12 h-12 text-green-500" />
                },
                {
                  title: "IT Strategy & Consulting",
                  description: "Align your IT strategy with your business goals with our expert consulting services. We provide strategic advice and planning to help you leverage technology for growth.",
                  icon: <FaShieldAlt className="w-12 h-12 text-green-500" />
                }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    {service.icon}
                  </div>
                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-12 bg-gray-200">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">What Our Clients Say</h2>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                {
                  testimonial: "The managed services provided by this team have been transformative for our operations. Their proactive approach ensures we are always prepared and secure.",
                  name: "Jessica Smith",
                  position: "COO of Tech Solutions"
                },
                {
                  testimonial: "Excellent service with a dedicated team. Their expertise in cloud management and data backup has significantly improved our efficiency and security.",
                  name: "Michael Brown",
                  position: "IT Director at Innovate Inc."
                },
                {
                  testimonial: "Highly recommend their IT support services. They have been instrumental in maintaining our IT infrastructure and resolving issues swiftly.",
                  name: "Sarah Lee",
                  position: "Founder of SecureTech"
                }
              ].map((client, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                  <p className="text-gray-600 mb-4">"{client.testimonial}"</p>
                  <p className="font-semibold text-gray-800">— {client.name}</p>
                  <p className="text-gray-500">{client.position}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Success Story</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover how our managed services helped one of our clients achieve remarkable improvements in their IT operations. 
            </p>
            <Link href="/case-studies" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
              Read the Case Study
            </Link>
          </div>
        </section>

        {/* Contact / Call to Action */}
        <section className="py-12 bg-gradient-to-r from-blue-500 to-teal-500">
          <div className="container mx-auto px-4 text-center">
            
            <Link href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ManagedServicesPage;
