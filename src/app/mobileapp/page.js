import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const MobileAppDevelopmentPage = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Mobile App Development</h1>
        </div>
      </header>

      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto text-center">
          <ul className="flex justify-center space-x-4">
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#benefits" className="hover:underline">Benefits</a></li>
            <li><a href="#portfolio" className="hover:underline">Portfolio</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
      </nav>

      <main className="container mx-auto py-12 px-4">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">Transform Your Ideas into Apps</h2>
          <p className="text-lg">
            Our mobile app development services help you build feature-rich applications for iOS and Android platforms, tailored to your business needs.
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Mobile App Development Services</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Custom App Development</h3>
              <p className="text-sm">
                We develop custom mobile applications from scratch, ensuring they meet your specific business requirements and user needs.
              </p>
            </div>

            {/* Service 2 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Cross-Platform Development</h3>
              <p className="text-sm">
                Reach a broader audience with our cross-platform solutions, allowing your app to run seamlessly on both iOS and Android devices.
              </p>
            </div>

            {/* Service 3 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-sm">
                Our design team crafts intuitive and visually appealing interfaces to enhance user experience and engagement.
              </p>
            </div>

            {/* Service 4 */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">App Maintenance & Support</h3>
              <p className="text-sm">
                We offer ongoing maintenance and support to ensure your app remains functional and up-to-date with the latest technology trends.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="bg-gray-100 py-12" >
          <h2 className="text-2xl font-semibold text-center mb-6">Why Choose Us?</h2>
          <div className="container mx-auto text-center">
            <p className="text-lg mb-4">
              Our team of experienced developers and designers is dedicated to delivering high-quality mobile applications that provide exceptional value to your business. Here are some benefits of working with us:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>High-quality and scalable apps</li>
              <li>Custom solutions tailored to your needs</li>
              <li>Expertise in both iOS and Android platforms</li>
              <li>Focus on user experience and interface design</li>
              <li>Comprehensive support and maintenance</li>
            </ul>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Our Work</h2>
          <div className="container mx-auto text-center">
            <p className="text-lg mb-8">
              Here are some examples of mobile apps we've developed, showcasing our expertise and the results we've delivered for our clients.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Project 1 */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Project 1'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Project One</h3>
                <p className="text-sm">
                  A description of the project, highlighting key features and the impact it had for the client.
                </p>
              </div>

              {/* Project 2 */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Project 2'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Project Two</h3>
                <p className="text-sm">
                  A description of the project, highlighting key features and the impact it had for the client.
                </p>
              </div>

              {/* Project 3 */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <img
                  src='https://via.placeholder.com/600x400'
                  alt='Project 3'
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">Project Three</h3>
                <p className="text-sm">
                  A description of the project, highlighting key features and the impact it had for the client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-gray-100 py-12">
          <h2 className="text-2xl font-semibold text-center mb-6">Contact Us</h2>
          <div className="container mx-auto text-center">
            <p className="text-lg mb-8">
              Have a project in mind or need more information? Reach out to us to discuss your mobile app development needs.
            </p>
            <form className="max-w-lg mx-auto">
              <div className="flex flex-col mb-4">
                <label htmlFor="name" className="text-left mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Your Name"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="email" className="text-left mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Your Email"
                />
              </div>
              <div className="flex flex-col mb-4">
                <label htmlFor="message" className="text-left mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="p-3 border border-gray-300 rounded-md"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

    
      <Footer/>
    </div>
  );
};

export default MobileAppDevelopmentPage;
