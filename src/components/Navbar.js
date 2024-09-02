'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedOdoo, setSelectedOdoo] = useState(null);

  const handleServiceDropdownToggle = () => {
    setSelectedService(selectedService ? null : 'services');
  };

  const handleOdooDropdownToggle = () => {
    setSelectedOdoo(selectedOdoo ? null : 'odoo');
  };

  return (
    <header className="bg-white text-black shadow-md mb-2">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center relative">
        <div>
          <Link href="/">
            <Image
              src="/websitelogo.jpeg"
              width={150}
              height={100}
              alt="Website Logo"
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
          <li>
              <Link href="/" className="hover:text-gray-500 transition-colors duration-300 font-sans">Talent Recruitment</Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-500 transition-colors duration-300 font-sans">Services</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500 transition-colors duration-300 font-sans">Resource Center</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500 transition-colors duration-300 font-sans">About US</Link>
            </li>
            <li className="relative group">
              <button onClick={handleServiceDropdownToggle} className="flex items-center hover:text-gray-500 transition-colors duration-300 font-sans">
                <Link href="/services">
                  Solutions
                </Link>
                <FontAwesomeIcon icon={faChevronDown}
                  className={`ml-2 transition-transform duration-300`}
                  size='xs'
                />
              </button>
              <ul className={`absolute left-0 top-4 mt-2 bg-white text-black shadow-lg border border-gray-200 w-64 ${selectedService ? 'block' : 'hidden'} group-hover:block z-10 rounded-lg`}>
                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/customapp">Tailored App Solutions</Link>
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service2')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm text-center"><Link href="/salesforce">Salesforce Mastery</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href='/cloudconsulting'>Cloud Expertise</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/analytics">Insightful Analytics</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/qualityauth">Quality Assurance</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/techconsulting">Tech Strategy</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/managedservice">Managed Solutions</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/staffaugmentation">Talent Augmentation</Link></button>
                </li>
              </ul>
            </li>
            <li className="relative group">
              <button onClick={handleOdooDropdownToggle} className="flex items-center hover:text-gray-500 transition-colors duration-300">
                Odoo
                <FontAwesomeIcon icon={faChevronDown}
                  className={`ml-2 ${selectedOdoo ? 'rotate-180' : ''} transition-transform duration-300`}
                  size='xs'
                />
              </button>
              <ul className={`absolute top-4 mt-2 bg-white text-black shadow-lg border border-gray-200 w-64 ${selectedOdoo ? 'block' : 'hidden'} group-hover:block z-10 rounded-lg`}>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odoodevelopment">Odoo Innovations</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo2')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/odoomigration">Odoo Migration Mastery</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooseo">Odoo SEO Excellence</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Consulting Expertise</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Custom Solutions</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Mobile Solutions</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Implementation</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Marketplace Expertise</button>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-500 transition-colors duration-300">Contact</Link>
            </li>
            {/* <li>
              <Link href="/careerpage" className="hover:text-gray-500 transition-colors duration-300">Join Us</Link>
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
