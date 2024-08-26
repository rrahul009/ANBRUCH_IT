import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const QualityAuthPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <Navbar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold mb-6 leading-tight">
                        Elevate Your Product Quality with Our Expert Authentication Services
                    </h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Partner with us to ensure your products meet the highest standards and gain the trust of your customers with our rigorous quality authentication services.
                    </p>
                    {/* <a href="#contact" className="bg-yellow-400 text-blue-900 py-3 px-6 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition duration-300">
                        Get Started
                    </a> */}
                </div>
            </section>

            {/* About the Service */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-800">Discover Our Quality Authentication Service</h2>
                    <p className="text-lg mb-8 text-center text-gray-600 max-w-2xl mx-auto">
                        Our Quality Authentication service ensures that your products adhere to industry standards with a thorough evaluation process that guarantees reliability and trust.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Why Choose Us?</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-3">
                                <li>Experienced professionals with industry expertise</li>
                                <li>Comprehensive testing and evaluation procedures</li>
                                <li>Timely and accurate certification processes</li>
                            </ul>
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Process</h3>
                            <ol className="list-decimal list-inside text-gray-600 space-y-3">
                                <li>Initial consultation and product review</li>
                                <li>Detailed testing and analysis</li>
                                <li>Certification and reporting</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact / Call to Action */}
            <section id="contact" className="bg-gray-200 py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Ready to Take the Next Step?</h2>
                    <p className="text-lg mb-8 text-gray-600">
                        Get in touch with us to explore how our Quality Authentication services can help you achieve excellence.
                    </p>
                    <a href="mailto:info@example.com" className="bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-lg hover:bg-blue-500 transition duration-300">
                        Contact Us
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default QualityAuthPage;
