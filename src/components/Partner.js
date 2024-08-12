'use client';
import React from 'react';
import Image from 'next/image'; // For optimized image handling (optional)

const Partner = () => {
    // Sample client logos
    const clients = [
        { src: '/carDekho.webp', alt: 'Client 1' },
        { src: '/delhivery-logo.jpg', alt: 'Client 2' },
        { src: '/Logo-bureau-veritas.png', alt: 'Client 3' },
        { src: '/hindustan-times.png', alt: 'Client 4' },
        { src: '/hungama-logo-aa-3-2.jpg', alt: 'Client 5' },
        { src: '/magicBricks.webp', alt: 'Client 6' },
        { src: '/Network18logo_K.png', alt: 'Client 7' },
        { src: '/timeInternet.jpg', alt: 'Client 8' },
    ];

    return (
        <div className="p-6">
            <div className="text-center">
                <h2 className="text-2xl font-bold inline-block mb-1">Our Clients</h2>
                <hr className="border-gray-800 mx-auto mt-0 mb-5 w-1/6" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {clients.map((client, index) => (
                    <div key={index} className="relative flex items-center justify-center p-2 bg-gray-100 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-gray-200">
                        {/* Using next/image for optimized image handling */}
                        <Image
                            src={client.src}
                            alt={client.alt}
                            width={150} // Adjust width as needed
                            height={40} // Adjust height as needed
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partner;
