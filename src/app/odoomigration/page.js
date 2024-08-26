import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const OdooMigrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 to-indigo-600 text-white py-2">
  <div className="container mx-auto   text-center">
    <h1 className="text-3xl font-extrabold mb-6 leading-tight tracking-tight md:tracking-tighter">
      Seamless Salesforce Migration Services
    </h1>
    
  </div>
</section>


      {/* Odoo Migration Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Why Odoo Migration?</h2>
          <p className="text-lg mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Migrating to a new version of Odoo or moving from another ERP system can bring significant benefits, including improved features, better performance, and enhanced security. Our migration services are designed to make this transition as smooth and efficient as possible.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Assessment & Planning</h3>
              <p className="text-gray-600">
                We start with a thorough assessment of your current system and business needs. Our team develops a detailed migration plan to ensure a smooth transition and minimal downtime.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Data Migration</h3>
              <p className="text-gray-600">
                Our experts handle the secure migration of your data to the new Odoo system. We ensure data integrity and accuracy throughout the migration process.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">System Configuration</h3>
              <p className="text-gray-600">
                We configure your new Odoo system according to your specific business requirements, ensuring that all modules and features are tailored to your needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Customization & Integration</h3>
              <p className="text-gray-600">
                We offer customization services to adapt the new Odoo system to your unique business processes. We also integrate it with other systems to ensure seamless operation.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Testing & Quality Assurance</h3>
              <p className="text-gray-600">
                Rigorous testing is conducted to ensure that the new system operates flawlessly. We address any issues before going live to ensure a smooth transition.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Training & Support</h3>
              <p className="text-gray-600">
                We provide training for your team to get acquainted with the new system and offer ongoing support to address any questions or issues post-migration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="bg-gray-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Upgrade Your Odoo System?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact us today to learn more about our Odoo migration services and how we can facilitate a smooth transition to enhance your business operations.
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

export default OdooMigrationPage
