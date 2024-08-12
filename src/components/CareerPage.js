import React from 'react';
import { jobs } from '../JobData/Job' // Corrected path

const CareerPage = () => {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <header className="text-center mb-6">
                <h1 className="text-3xl font-bold mb-2">Join Our Team</h1>
                <p className="text-lg text-gray-600">We're looking for talented individuals to help us grow and innovate.</p>
            </header>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-2">Current Openings</h2>
                <div className="space-y-6">
                    {jobs.map((job, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6 bg-white shadow-md">
                            <h3 className="text-2xl font-semibold mb-2">{job.title}</h3>
                            <p className="text-gray-600 mb-2">Location: {job.location}</p>
                            <p className="text-gray-800 mb-2">Salary: {job.ctc}</p>
                            <p className="text-gray-800 mb-4">{job.description}</p>
                            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Apply Now</button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mb-6">
                <h2 className="text-3xl font-semibold mb-6">Our Culture</h2>
                <p className="text-gray-800 mb-4">At [Company Name], we believe in fostering a collaborative and inclusive work environment. Learn more about our values and culture.</p>
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">Learn More</button>
            </section>

            <section>
                <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
                <p className="text-gray-800 mb-4">If you have any questions about career opportunities, feel free to reach out.</p>
                <p className="text-gray-600">Email: <a href="mailto:info@wrocus.com" className="text-blue-600 hover:underline">info@wrocus.com</a></p>
            </section>
        </div>
    );
};

export default CareerPage;
