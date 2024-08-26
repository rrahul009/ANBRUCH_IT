import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const WebDevelopmentPage = () => {
  return (
    <div>
      <Header />
      <Navbar />

      <main className="bg-gray-100 text-gray-900">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
          <div className="relative container mx-auto text-center">
            <h1 className="text-5xl font-extrabold mb-4">Web Development</h1>
            <p className="text-xl mb-8">
              Crafting high-performance websites tailored to your business needs.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">What We Offer</h2>
            <p className="text-lg mb-8">
              We specialize in creating dynamic and engaging websites that drive results. From custom web development to responsive design, our team delivers top-notch solutions.
            </p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Custom Web Development</h3>
                <p className="text-sm mb-4">
                  Tailored web solutions that fit your unique business needs. Our team builds scalable and robust applications from the ground up.
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">Responsive Design</h3>
                <p className="text-sm mb-4">
                  Ensure your website looks great on any device. Our responsive designs offer a seamless user experience across all platforms.
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white text-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">E-Commerce Solutions</h3>
                <p className="text-sm mb-4">
                  Launch your online store with ease. We provide comprehensive e-commerce solutions to help you sell products and services effectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="bg-gray-200 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Our Work</h2>
            <p className="text-lg mb-8">
              Check out some of our recent projects to see how we bring our clients' visions to life.
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
                  A brief description of the project highlighting the key aspects and technologies used.
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
                  A brief description of the project highlighting the key aspects and technologies used.
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
                  A brief description of the project highlighting the key aspects and technologies used.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-lg mb-8">
              Ready to start your project or have any questions? Contact us today!
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

      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
