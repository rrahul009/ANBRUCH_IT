import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import { FaCloud, FaShieldAlt, FaChartBar, FaLaptopCode, FaCogs, FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineAppstore } from 'react-icons/ai';
import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

const TechConsultingPage = () => {
  return (
    <div className="min-h-screen bg-white-smoke-100">
      <Header />
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4  leading-tight">
            Elevate Your Business with Expert Tech Consulting
          </h1>
          <p className="text-xl mb-0 max-w-5xl mx-auto">
            Our tech consulting services are designed to drive innovation, optimize processes, and unlock new opportunities for your business. Partner with us to stay ahead in the rapidly evolving tech landscape.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800 bg-white-100 p-4 rounded-md shadow-lg">
          Our Tech Consulting Services</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: "IT Strategy & Planning",
                description: "Develop a strategic IT roadmap aligned with your business goals. Our team helps you plan for future technology needs and optimize current systems.",
                icon: <FaProjectDiagram className="w-12 h-12 text-blue-600 mb-4" />
              },
              {
                title: "Digital Transformation",
                description: "Transform your business with cutting-edge digital solutions. We guide you through adopting new technologies and improving digital capabilities.",
                icon: <AiOutlineAppstore className="w-12 h-12 text-blue-600 mb-4" />
              },
              {
                title: "Cybersecurity & Risk Management",
                description: "Protect your business from cyber threats with comprehensive security assessments and risk management strategies tailored to your needs.",
                icon: <FaShieldAlt className="w-12 h-12 text-blue-600 mb-4" />
              },
              {
                title: "Cloud Solutions",
                description: "Leverage the power of the cloud to scale your operations. We help you migrate to cloud platforms and optimize cloud resources for efficiency.",
                icon: <FaCloud className="w-12 h-12 text-blue-600 mb-4" />
              },
              {
                title: "Data Analytics & Insights",
                description: "Turn data into actionable insights with advanced analytics. We provide tools and strategies to harness the power of your data for better decision-making.",
                icon: <FaChartBar className="w-12 h-12 text-blue-600 mb-4" />
              },
              {
                title: "Technology Integration",
                description: "Seamlessly integrate new technologies into your existing systems. Our team ensures smooth transitions and minimizes disruptions during implementation.",
                icon: <FaCogs className="w-12 h-12 text-blue-600 mb-4" />
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 text-center">
                {service.icon}
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                testimonial: "The tech consulting services provided by this team have been a game-changer for our business. Their expertise helped us streamline our IT infrastructure and improve overall efficiency.",
                name: "Alex Johnson",
                position: "CTO of Tech Innovations"
              },
              {
                testimonial: "Their digital transformation strategies were spot-on. We were able to modernize our processes and stay ahead of the competition thanks to their insights and support.",
                name: "Maria Gonzalez",
                position: "CEO of Bright Solutions"
              },
              {
                testimonial: "Their approach to cybersecurity is top-notch. We feel much more secure knowing that our data is protected by their comprehensive risk management strategies.",
                name: "David Lee",
                position: "IT Manager at SecureCorp"
              }
            ].map((client, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg max-w-md">
                <p className="text-gray-600 mb-4">
                  "{client.testimonial}"
                </p>
                <p className="font-semibold text-gray-800">— {client.name}</p>
                <p className="text-gray-500">{client.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="py-5">
        <div className="container mx-auto px-4 text-center">
          
           <Link href="/contact">
           <Button variant='contained'>Get In Touch</Button>
           </Link>
        </div>
      </section>  

      <Footer />
    </div>
  );
};

export default TechConsultingPage;
