import Link from 'next/link';
import React from 'react';

const CollaborateContact = () => {
  // Inline styles for the background image
  const containerStyle = {
    backgroundImage: 'url(https://toppng.com/uploads/preview/textured-backgrounds-for-websites-11553984905o9plozryma.jpg)', // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '300px', // Full viewport height
  };

  return (
    <div className="mt-8 flex justify-around items-center" style={containerStyle}>
      <div className="text-center text-white">
        <p className="text-xl mb-4 color:white">We Carry More Than Just Good Coding Skills</p>
        <h1 className="text-4xl mb-4">Let's Collaborate for Some Good Work</h1>
      </div>
      <div className="text-center">
        <Link href="/contact">
        <button 
          type="button" 
          className="py-3 px-10 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          CONTACT
        </button>
        </Link>
      </div>
    </div>
  );
}

export default CollaborateContact;
