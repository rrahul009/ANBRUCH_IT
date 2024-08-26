'use client';
import React from 'react';
import Image from 'next/image'; // For optimized image handling (optional)

const Partner = () => {
    // Sample client logos
    const clients = [
        { src: '/carDekho.webp', alt: 'Car Dekho' },
        { src: '/delhivery-logo.jpg', alt: 'Delhivery' },
        { src: '/Logo-bureau-veritas.png', alt: 'Bureau Veritas' },
        { src: '/hindustan-times.png', alt: 'Hindustan Times' },
        { src: '/hungama-logo-aa-3-2.jpg', alt: 'Hungama' },
        { src: '/magicBricks.webp', alt: 'Magic Bricks' },
        { src: '/Network18logo_K.png', alt: 'Network18' },
        { src: '/timeInternet.jpg', alt: 'Times Internet' },
    ];

    return (
        <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-5">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Our Esteemed Clients</h2>
                    <hr className="border-gray-300 mx-auto mt-0 mb-8 w-1/6" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
                    {clients.map((client, index) => (
                        <div key={index} className="relative flex items-center justify-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
                            {/* Using next/image for optimized image handling */}
                            <Image
                                src={client.src}
                                alt={client.alt}
                                width={150} // Adjust width as needed
                                height={60} // Adjust height as needed
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partner;
