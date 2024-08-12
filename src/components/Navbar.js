import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className="bg-white-900 text-black shadow-md mb-2">
      <div className="container mx-auto px-6 py-1 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image
              src="/websitelogo.jpeg"
              width={150}
              height={100}
            />
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-gray-400 ">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-400">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-400">Services</Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-gray-400">Contact</Link>
            </li>
            <li>
              <Link href="/careerpage" className="hover:text-gray-400">Careers</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
