import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const TechConsultingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Elevate Your Business with Expert Tech Consulting
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our tech consulting services are designed to drive innovation, optimize processes, and unlock new opportunities for your business. Partner with us to stay ahead in the rapidly evolving tech landscape.
          </p>
          <a href="#contact" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Tech Consulting Services</h2>
          <p className="text-lg mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            We offer a range of tech consulting services tailored to your needs. Whether you're looking to enhance your IT infrastructure, adopt new technologies, or streamline your operations, our expert team is here to help.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">IT Strategy & Planning</h3>
              <p className="text-gray-600">
                Develop a strategic IT roadmap aligned with your business goals. Our team helps you plan for future technology needs and optimize current systems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Digital Transformation</h3>
              <p className="text-gray-600">
                Transform your business with cutting-edge digital solutions. We guide you through adopting new technologies and improving digital capabilities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cybersecurity & Risk Management</h3>
              <p className="text-gray-600">
                Protect your business from cyber threats with comprehensive security assessments and risk management strategies tailored to your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Cloud Solutions</h3>
              <p className="text-gray-600">
                Leverage the power of the cloud to scale your operations. We help you migrate to cloud platforms and optimize cloud resources for efficiency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data Analytics & Insights</h3>
              <p className="text-gray-600">
                Turn data into actionable insights with advanced analytics. We provide tools and strategies to harness the power of your data for better decision-making.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technology Integration</h3>
              <p className="text-gray-600">
                Seamlessly integrate new technologies into your existing systems. Our team ensures smooth transitions and minimizes disruptions during implementation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">What Our Clients Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-600 mb-4">
                "The tech consulting services provided by this team have been a game-changer for our business. Their expertise helped us streamline our IT infrastructure and improve overall efficiency."
              </p>
              <p className="font-semibold text-gray-800">— Alex Johnson, CTO of Tech Innovations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-600 mb-4">
                "Their digital transformation strategies were spot-on. We were able to modernize our processes and stay ahead of the competition thanks to their insights and support."
              </p>
              <p className="font-semibold text-gray-800">— Maria Gonzalez, CEO of Bright Solutions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
              <p className="text-gray-600 mb-4">
                "Their approach to cybersecurity is top-notch. We feel much more secure knowing that our data is protected by their comprehensive risk management strategies."
              </p>
              <p className="font-semibold text-gray-800">— David Lee, IT Manager at SecureCorp</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
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

      <Footer/>
    </div>
  )
}

export default TechConsultingPage
