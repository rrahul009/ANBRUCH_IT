import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const OdooSEOPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header/>
      <Navbar/>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold mb-6 leading-tight">
            Boost Your Online Presence with Odoo SEO Services
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Enhance your website’s visibility and drive more traffic with our specialized Odoo SEO services. We optimize your Odoo website to improve search engine rankings and attract more potential customers.
          </p>
          <a href="#contact" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-300">
            Get Started
          </a>
        </div>
      </section>

      {/* Odoo SEO Services Overview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Our Odoo SEO Services</h2>
          <p className="text-lg mb-8 text-center text-gray-600 max-w-2xl mx-auto">
            Our Odoo SEO services are designed to improve your website’s search engine performance and drive more organic traffic. From on-page optimization to comprehensive SEO strategies, we provide solutions tailored to your business needs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">On-Page SEO Optimization</h3>
              <p className="text-gray-600">
                We optimize your Odoo website’s on-page elements including meta tags, headings, and content to improve relevancy and visibility in search engine results.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Keyword Research & Strategy</h3>
              <p className="text-gray-600">
                Our team conducts in-depth keyword research to identify high-value search terms for your industry. We develop a strategic plan to target these keywords and drive qualified traffic.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Technical SEO</h3>
              <p className="text-gray-600">
                We address technical aspects of your Odoo site to ensure it meets search engine requirements. This includes optimizing site speed, mobile responsiveness, and crawlability.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Content Creation & Optimization</h3>
              <p className="text-gray-600">
                We create and optimize high-quality content that engages your audience and supports your SEO goals. From blog posts to product descriptions, we ensure your content is both valuable and search-friendly.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Link Building</h3>
              <p className="text-gray-600">
                We develop a robust link building strategy to enhance your site’s authority and improve its search engine rankings. This includes acquiring high-quality backlinks from reputable sources.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">SEO Analytics & Reporting</h3>
              <p className="text-gray-600">
                Our services include regular analytics and reporting to track your SEO performance. We provide insights and recommendations to continuously improve your strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Call to Action */}
      <section id="contact" className="bg-gray-300 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Improve Your Search Rankings?</h2>
          <p className="text-lg mb-8 text-gray-600">
            Contact us today to learn more about our Odoo SEO services and how we can help enhance your website’s visibility and attract more traffic.
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

export default OdooSEOPage
