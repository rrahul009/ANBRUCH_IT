import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import React from 'react';

const StaffAugmentationPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Navbar />

      <main className="p-8 md:p-12 lg:p-2 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-teal-400 text-center py-8 rounded-lg mb-16">
          <h1 className="text-5xl font-bold text-white mb-0">Staff Augmentation Services</h1>
        </section>

        {/* Feature Cards Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Feature Card */}
          {[
            {
              title: "Expert Talent",
              description: "Our team of experienced professionals brings a wealth of industry knowledge to your projects. With a diverse skill set spanning multiple domains, we are equipped to tackle complex challenges and drive innovative solutions.",
              imageSrc: "https://contentstatic.timesjobs.com/photo/62277003/trending/hiring-outlook-2018-it-startups-need-multi-skilled-talent-says-expert.jpg",
              alt: "Expert Talent"
            },
            {
              title: "Flexible Solutions",
              description: "From short-term projects to long-term partnerships, we offer flexible staffing options to fit your specific needs. Whether you require temporary support for a project or a more extended collaboration, we can scale our services to match your requirements.",
              imageSrc: "https://st2.depositphotos.com/3591429/11449/i/450/depositphotos_114491296-stock-photo-man-working-with-laptop.jpg",
              alt: "Flexible Solutions"
            },
            {
              title: "Cost-Effective",
              description: "Our staff augmentation services provide high value without the overhead of full-time hires, optimizing your budget. By leveraging our flexible staffing solutions, you can avoid the costs associated with permanent employees, such as salaries, benefits, and training.",
              imageSrc: "https://www.shutterstock.com/image-photo/cost-reduction-concept-wording-on-600nw-2405339143.jpg",
              alt: "Cost-Effective"
            },
            {
              title: "Innovative Solutions",
              description: "We leverage the latest technologies and methodologies to deliver cutting-edge solutions tailored to your needs. Our team is adept at utilizing state-of-the-art tools and innovative practices to solve complex problems and drive progress.",
              imageSrc: "https://www.realitypremedia.com/blog/wp-content/uploads/2014/08/Innovative-Solutions.jpg",
              alt: "Innovative Solutions"
            },
            {
              title: "Quick Turnaround",
              description: "Our efficient processes and dedicated team ensure that we deliver high-quality results in a timely manner. We understand the importance of speed in today’s fast-paced business environment and strive to meet your deadlines without compromising on quality.",
              imageSrc: "https://thumbs.dreamstime.com/b/fast-turnaround-people-diagram-sign-illustration-design-over-white-53087574.jpg",
              alt: "Quick Turnaround"
            },
            {
              title: "24/7 Support",
              description: "Our support team is available around the clock to assist with any issues and ensure uninterrupted service. We prioritize customer satisfaction and provide continuous support to address any concerns that may arise.",
              imageSrc: "https://workingsolutions.com/wp-content/uploads/2022/03/24-7-customer-service-1.jpg",
              alt: "24/7 Support"
            },
          ].map((card, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center">
              <img src={card.imageSrc} alt={card.alt} className="w-full h-52 object-fill mb-4 rounded-lg" />
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{card.title}</h2>
              <p className="text-gray-700 text-center">{card.description}</p>
            </div>
          ))}
        </section>

        {/* Testimonials Section */}
        <section className="bg-gray-100 py-16">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">What Our Clients Say</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "“The staff augmentation services provided by [Your Company Name] were exceptional. They delivered exactly what we needed and more. Highly recommend!”",
                name: "Jane Doe",
                title: "CEO, Example Corp"
              },
              {
                quote: "“An outstanding experience with a professional team that understood our needs perfectly. The flexibility and expertise provided were invaluable.”",
                name: "John Smith",
                title: "CTO, Another Example"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Logos Section */}
        <section className="py-16 bg-gray-50">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Our Valued Clients</h2>
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-center items-center">
              {[
                { src: "/delhivery-logo.jpg", alt: "Delhivery" },
                { src: "/hindustan-times.png", alt: "Hindustan Times" },
                { src: "/carDekho.webp", alt: "CarDekho" },
                { src: "/Logo-bureau-veritas.png", alt: "Bureau Veritas" }
              ].map((client, index) => (
                <div key={index} className="flex justify-center items-center p-4 transition-transform transform hover:scale-105 hover:shadow-lg rounded-lg bg-white">
                  <img src={client.src} alt={client.alt} className="w-32 h-48 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-8xl mx-auto">
            We're committed to excellence and client satisfaction. Our top-notch staffing solutions are designed to align with your business objectives and drive success. We combine expertise, flexibility, and innovation to offer unparalleled service that meets your unique needs.
          </p>
          <a href="/contact" className="inline-block px-8 py-4 text-white bg-blue-600 rounded-lg text-xl font-semibold transition-transform transform hover:scale-105 hover:bg-blue-700">
            Get in Touch
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default StaffAugmentationPage;
