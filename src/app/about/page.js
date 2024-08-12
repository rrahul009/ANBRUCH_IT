import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import OurLeader from '@/components/OurLeader';
import OurStory from '@/components/OurStory';
import OurTeam from '@/components/OurTeam';
import ServiceProvide from '@/components/ServiceProvide';
import React from 'react';


const About = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <div className="relative bg-gray-900 text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://t3.ftcdn.net/jpg/03/91/46/10/360_F_391461057_5P0BOWl4lY442Zoo9rzEeJU0S2c1WDZR.jpg"
                        alt="IT Services Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
                <div className="relative container mx-auto text-center py-20 px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Leading IT Solutions for Your Business
                    </h1>
                    <p className="text-lg md:text-xl mb-8">
                        Expert IT services to enhance your business operations with innovative technology solutions.
                    </p>
                </div>
            </div>
            <OurStory />


            {/* images section */}
            <div className="flex  gap-2">
                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <img
                        src="https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg"
                        alt="Team Collaboration"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    <p className="mt-2 text-center">Our Team Collaborating on Solutions</p>
                </div>

                <div className=" w-full sm:w-1/2 lg:w-1/3 p-4">
                    <img
                        src="https://www.greetly.com/hubfs/visitor-management-system-guide-client-meetings-in-your-office.jpeg"
                        alt="Team Collaboration"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    <p className="mt-2 text-center">Meeting with Clients to Understand Their Needs</p>
                </div>

                <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
                    <img
                        src="https://miro.medium.com/v2/resize:fit:1400/1*2hwDUIUjKwBCkoP-KuBWYQ.jpeg"
                        alt="Tech Solutions"
                        className="w-full h-auto object-cover rounded-lg shadow-lg"
                    />
                    <p className="mt-2 text-center">Delivering Cutting-Edge Tech Solutions</p>
                </div>
            </div>
            {/* overView */}
            {/* <div className="bg-gray-100  mt-5 flex items-center justify-center">
                <div className=" p-5 rounded-3xl">
                    <div className="bg-white p-8 max-w-2xl mx-auto rounded-xl">
                        <h2 className="text-3xl font-bold mb-4">Our IT Services</h2>
                        <p className="text-2lg">
                            We are a team of passionate developers who are committed to creating innovative and user-friendly web applications.
                            We believe that technology should be accessible to everyone, and we strive to make our products as easy to use as possible.

                            We are constantly learning and growing, and we are always looking for new ways to improve our products and services.
                            We are also committed to giving back to the community, and we participate in a number of open source projects.
                        </p>
                    </div>
                </div>
            </div> */}

            {/* our mission */}
            <div className="bg-blue-100 py-8 px-4 mt-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Our Mission</h2>
                    <p className="text-md mb-8">
                        At <strong>ANBRUCH IT</strong>, our mission is to empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation.
                        We are committed to providing exceptional service and building long-lasting partnerships by understanding your unique needs and delivering tailored IT solutions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                            <img
                                src='https://media.assettype.com/analyticsinsight%2F2024-07%2F275cca5c-3ac1-4f4b-8929-22ccb1e4a44d%2FTechnological_Innovation_1024x684.jpg'
                                alt="Innovation"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <p className="text-md">
                                We stay at the forefront of technology to provide innovative solutions that meet the evolving needs of businesses.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <h3 className="text-2xl font-semibold mb-4">Customer Focus</h3>
                            <img
                                src='https://www.deskera.com/blog/content/images/2021/06/customer-experience.jpg'
                                alt="Customer Focus"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <p className="text-md">
                                Our clients are at the heart of everything we do. We listen to your needs and tailor our services to exceed your expectations.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                            <h3 className="text-2xl font-semibold mb-4">Excellence</h3>
                            <img
                                src='https://c8.alamy.com/comp/TC1EF4/achieve-business-excellence-as-concept-pursuit-of-excellence-blurred-business-center-background-TC1EF4.jpg'
                                alt="Excellence"
                                className="w-full h-40 object-cover mb-4 rounded"
                            />
                            <p className="text-md">
                                We are dedicated to delivering the highest quality solutions and services with professionalism and expertise.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* /Service Provide */}
            <ServiceProvide />
            <OurLeader />
            <OurTeam />
            {/* location and employee */}
            <div className="bg-gray-100 py-12 mt-10">
                <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
    Discover the ANBRUCH IT Advantage: Excellence and Innovation at Our Core
</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-gray-700">5</h3>
                            <p className="text-lg font-semibold text-gray-600">Locations</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-gray-700">200+</h3>
                            <p className="text-lg font-semibold text-gray-600">Employees</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-gray-700">50+</h3>
                            <p className="text-lg font-semibold text-gray-600">Technologies</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                            <h3 className="text-4xl font-bold text-gray-700">24/7</h3>
                            <p className="text-lg font-semibold text-gray-600">Support</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div class="p-6 bg-gray-100 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">Certifications & Achievements</h2>
    <div class="certification-item mb-6 p-4 border border-gray-200 
    text-center rounded-lg bg-white shadow-sm">
        <h3 class="text-xl font-semibold text-gray-700 mb-2">Example Certification</h3>
        <p class="text-gray-600 mb-1"><strong>Issued by:</strong> Example Organization</p>
        <p class="text-gray-600 mb-4"><strong>Date Issued:</strong> January 2024</p>
        {/* <img src="path/to/certificate-image.jpg" alt="Example Certification" class="w-full max-w-xs mx-auto rounded-lg shadow-md"/> */}
    </div>
   <div className='text-right'>
   <a
          href="#contact"
          className="inline-block py-3 px-6 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Contact Us
        </a>
   </div>
</div>



            <Footer />
        </div>
    );
}

export default About;
