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
              <Link href="/" className="hover:text-gray-500 transition-colors duration-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-500 transition-colors duration-300">About</Link>
            </li>
            <li className="relative group">
              <button onClick={handleServiceDropdownToggle} className="flex items-center hover:text-gray-500 transition-colors duration-300">
                <Link href="/services">
                  Services
                </Link>
                <FontAwesomeIcon icon={faChevronDown}
                  className={`ml-2 transition-transform duration-300`}
                  size='xs'
                />
              </button>
              <ul className={`absolute left-0  top-4 mt-2 bg-white text-black shadow-lg border border-gray-200 w-64 ${selectedService ? 'block' : 'hidden'} group-hover:block z-10 rounded-lg`}>
                <li className='text-center'>
                  <button onClick={() => setSelectedService('Custom App Development')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">
                    <Link href="/customapp">Custom App Development</Link>
                  </button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service2')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm text-center"><Link href="/salesforce">SFDC</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href='/cloudconsulting'>Cloud Consulting</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/analytics">Analytics</Link> </button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/qualityAuth">Quality Authentication</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/techconsulting">Tech Consulting</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/managedservice">Managed Services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedService('service3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/managedservice">Staff augmentation services</Link></button>
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
              <ul className={`absolute  top-4 mt-2 bg-white text-black shadow-lg border border-gray-200 w-64 ${selectedOdoo ? 'block' : 'hidden'} group-hover:block z-10 rounded-lg`}>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo1')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odoodevelopment">Odoo Development </Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo2')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"><Link href="/odoomigration">Odoo Migration services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm"> <Link href="/odooseo">Odoo SEO Services</Link></button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Consulting Services</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Custom App Development </button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo Mobile App Development</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo implementation Services</button>
                </li>
                <li>
                  <button onClick={() => setSelectedOdoo('odoo3')} className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300 text-sm">Odoo MarketPlace pioneers</button>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-500 transition-colors duration-300">Contact</Link>
            </li>
            <li>
              <Link href="/careerpage" className="hover:text-gray-500 transition-colors duration-300">Careers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
