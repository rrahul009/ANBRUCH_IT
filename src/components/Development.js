import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import React from 'react'

const services = [
  {
    title: 'Web Development',
    description: 'We provide custom software development solutions to help you build robust and scalable applications tailored to your business needs.',
    imageUrl: 'https://t3.ftcdn.net/jpg/02/14/53/92/360_F_214539232_YnUrtuwUEt84gHuU0qG8l7OwZvH4rnPG.jpg'
  },
  {
    title: 'Mobile App Development',
    description: 'Our design services focus on creating user-friendly interfaces and experiences that align with your brand and enhance user engagement.',
    imageUrl: 'https://blog.vsoftconsulting.com/hubfs/blog-files/Comparing%20Different%20Types%20of%20Mobile%20Application%20Development.jpg'
  },
  {
    title: 'Design',
    description: 'Our design services focus on creating user-friendly interfaces and experiences that align with your brand and enhance user engagement.',
    imageUrl: 'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.webp?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg='
  },
  {
    title: 'Testing',
    description: 'We offer comprehensive testing services to ensure your applications are reliable, secure, and perform optimally across various platforms.',
    imageUrl: 'https://www.thinktank.de/wp-content/uploads/2022/12/Tests-in-Softwareentwicklung.webp'
  },
  {
    title: 'CMS Development',
    description: 'Develop a content management system to easily manage website content.',
    imageUrl: 'https://a1websolution.com/wp-content/uploads/2019/11/cms-web-development-company.png'
  },
  {
    title: 'API Development',
    description: 'Integrate with third-party applications to extend functionality.',
    imageUrl: 'https://www.shutterstock.com/image-photo/api-application-programming-interface-concept-600nw-2488695785.jpg'
  }
];

const Development = () => {
  return (
    <div>
      {/* Development */}
      <div className="relative bg-gray-900 text-white py-6 px-4">
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for better text contrast */}
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-2">Our Services</h1>
          <p className="text-lg md:text-xl mb-8">
            Discover our range of IT solutions designed to meet the needs of modern businesses.
          </p>

          <h2 className='text-start text-3xl mt-6 mb-4'>Development and Technology:</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="bg-white text-gray-900 p-4 rounded-lg shadow-lg">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-32 object-cover rounded-md mb-4" // Reduced height
                />
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2> {/* Adjusted font size */}
                <p className="text-sm mb-4">{service.description}</p> {/* Adjusted font size */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Development
