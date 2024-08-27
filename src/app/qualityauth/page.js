// pages/quality-auth-service.js
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import React from 'react';

const QualityAuthServicePage = () => {
  return (
    <>
      <Header />
      <Navbar />
     
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
        {/* Hero Section */}
        <section className="text-center mb-6 py-8 bg-blue-600 text-white rounded-lg shadow-lg w-full">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Security with Precision</h1>
          <p className="text-lg md:text-xl mb-0 max-w-3xl mx-auto">
            Discover advanced authentication solutions designed to secure your digital assets and enhance user experience. Our state-of-the-art technology delivers unmatched protection and efficiency.
          </p>
        </section>
          {/* Security Images Section */}
       <div className="w-full max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Our Security in Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18106.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1724716800&semt=ais_hybrid",
              "https://www.netrust.net/wp-content/uploads/2021/09/8683c93d-dcc5-4b11-826d-5e149774e5fe_TheImportanceof.jpg",
              "https://cioafrica.co/wp-content/uploads/2024/01/cyber-security.jpeg",
              "https://www.cgtechnologies.com/wp-content/uploads/2023/01/what-is-cyber-security.jpg"
            ].map((image, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={image} alt={`Security Image ${index + 1}`} className="w-full h-48 object-cover"/>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {[
            {
              title: "Advanced Multi-Factor Authentication (MFA)",
              description: "Strengthen user account security with our robust MFA solutions. Our system requires multiple forms of verification, ensuring that only authorized users gain access. We offer various MFA options including SMS, email, and app-based tokens.",
              icon: "🔐"
            },
            {
              title: "Secure Single Sign-On (SSO) Solutions",
              description: "Streamline user access with our SSO solutions, allowing users to enter multiple platforms with a single login. This reduces the need for multiple passwords and enhances overall security and user convenience.",
              icon: "🔑"
            },
            {
              title: "Real-time Threat Detection and Response",
              description: "Protect your systems with our real-time threat detection that uses advanced algorithms to monitor and respond to suspicious activities. Our proactive approach helps mitigate potential risks before they become serious threats.",
              icon: "🚨"
            },
            {
              title: "Seamless Integration with Existing Systems",
              description: "Achieve a smooth transition with our integration services. We ensure that our solutions fit perfectly with your existing systems, minimizing downtime and disruption while enhancing your current setup.",
              icon: "🔗"
            },
            {
              title: "User-friendly Interface and Experience",
              description: "Boost user satisfaction with interfaces designed for intuitive interaction. Our user-centric design approach ensures that your authentication system is easy to use, which improves user engagement and reduces support requests.",
              icon: "💡"
            },
            {
              title: "Advanced Encryption Standards",
              description: "Utilize top-tier encryption protocols to protect sensitive data. Our solutions use the latest encryption methods to ensure that data is securely transmitted and stored, safeguarding against unauthorized access.",
              icon: "🔒"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-4">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-white shadow-md rounded-lg p-8 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6">
            Our solutions are designed not only to secure your digital environment but also to enhance overall operational efficiency. Here's what sets us apart:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg text-gray-700">
            <li><strong>Top-tier Security:</strong> Leverage advanced technology to safeguard your digital assets against evolving threats.</li>
            <li><strong>Increased Efficiency:</strong> Streamline processes and reduce time spent on authentication tasks with our efficient solutions.</li>
            <li><strong>Lower Risk:</strong> Minimize the risk of unauthorized access through robust security measures and proactive monitoring.</li>
            <li><strong>Compliance:</strong> Ensure that your systems meet industry standards and regulatory requirements with our compliant solutions.</li>
            <li><strong>Comprehensive Support:</strong> Benefit from our 24/7 support and dedicated maintenance to keep your systems running smoothly.</li>
          </ul>
        </div>

        {/* Client Testimonials Section */}
        <div className="w-full max-w-6xl mx-auto mb-16 px-4">
  <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Clients Say</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[
      {
        name: "John Doe",
        company: "Tech Innovations Inc.",
        testimonial: "The advanced MFA solutions provided by this service have significantly enhanced our security posture. Their seamless integration and user-friendly interface made the transition effortless.",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        rating: 5
      },
      {
        name: "Jane Smith",
        company: "Secure Finance Ltd.",
        testimonial: "Their real-time threat detection and response have been a game changer for our operations. We now feel confident knowing that potential risks are identified and mitigated promptly.",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        rating: 4
      },
      {
        name: "Robert Brown",
        company: "Global Solutions Co.",
        testimonial: "The single sign-on solutions have streamlined our user management processes and improved overall efficiency. We highly recommend their services for any organization seeking robust security solutions.",
        avatar: "https://randomuser.me/api/portraits/men/45.jpg",
        rating: 5
      }
    ].map((testimonial, index) => (
      <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center border border-gray-200 transform transition-transform duration-300 hover:scale-105">
        <img src={testimonial.avatar} alt={`Avatar of ${testimonial.name}`} className="w-20 h-20 rounded-full mb-4 border-2 border-blue-600 shadow-md"/>
        <p className="text-gray-600 italic mb-4">"{testimonial.testimonial}"</p>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, starIndex) => (
            <svg key={starIndex} xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 ${starIndex < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.208 1.194-5.944 5.804 1.403 8.164-7.335-3.853-7.335 3.853 1.403-8.164-5.944-5.804 8.208-1.194z"/></svg>
          ))}
        </div>
        <p className="font-semibold text-gray-800">{testimonial.name}</p>
        <p className="text-gray-500">{testimonial.company}</p>
      </div>
    ))}
  </div>
</div>




       

        {/* Call to Action Section */}
        {/* <div className="text-center mb-16">
          <a 
            href="#contact"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg font-semibold"
          >
            Discover More
          </a>
        </div> */}
      </div>
      <div className="w-full flex justify-center mb-16 px-4">
  <Link
    href="/contact" // Change this to your actual contact section or page URL
    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-lg font-bold tracking-wider transform hover:scale-105"
  >
    Get in Touch    
  </Link>
</div>


      <Footer />
    </>
  );
};

export default QualityAuthServicePage;
