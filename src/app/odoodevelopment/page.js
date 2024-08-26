import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const OdooDevelopmentPage = () => {
  return (
   <div>
    <Header/>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Odoo Development Services</h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r  py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-extrabold mb-6 leading-tight">
            Transform Your Business with Custom Odoo Solutions
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Unlock the full potential of your business with our expert Odoo development services. We provide tailored solutions to streamline your processes, enhance productivity, and drive growth.
          </p>
          <a href="#contact" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Odoo Development Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Odoo Development Services</h2>
          <p className="text-lg mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Odoo is an all-in-one business management software that integrates various applications into a single platform. Our Odoo development services are designed to customize and enhance your Odoo experience, ensuring it meets your unique business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Custom Module Development</h3>
              <p className="text-gray-600">
                Develop custom modules to extend the functionality of your Odoo instance. We create tailored solutions to address specific business requirements and improve operational efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Odoo Implementation</h3>
              <p className="text-gray-600">
                Seamlessly implement Odoo into your business operations. Our team ensures a smooth deployment process, including data migration and system configuration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Odoo Integration</h3>
              <p className="text-gray-600">
                Integrate Odoo with other systems and applications to streamline your workflows. We ensure that Odoo works harmoniously with your existing tools and platforms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Odoo Customization</h3>
              <p className="text-gray-600">
                Customize the Odoo interface and functionality to better fit your business processes. We tailor Odoo to match your specific needs and preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Odoo Support & Maintenance</h3>
              <p className="text-gray-600">
                Receive ongoing support and maintenance for your Odoo system. We offer troubleshooting, updates, and performance enhancements to keep your system running smoothly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Odoo Training</h3>
              <p className="text-gray-600">
                Equip your team with the knowledge and skills to effectively use Odoo. We provide training sessions and resources to ensure your staff can make the most of Odoo’s features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="bg-gray-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Transform Your Business with Odoo?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact us today to learn more about our Odoo development services and how we can help optimize your business operations with customized solutions.
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

export default OdooDevelopmentPage
