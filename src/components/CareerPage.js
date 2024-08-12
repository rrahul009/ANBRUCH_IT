'use client'
import React, { useState } from 'react';
import { jobs } from '../JobData/Job'; // Corrected path

const CareerPage = () => {
    const [search, setSearch] = useState('');
    const [selectedJob, setSelectedJob] = useState(null);

    // Filter jobs based on the search input
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase())
    );

    const handleApplyNow = (job) => {
        // Here you could redirect the user to an application form or another page
        // For demonstration purposes, we'll just alert that the application process starts
        alert(`You have applied for the position: ${job.title}`);
        setSelectedJob(null);
    };

    return (
        <div className="max-w-5xl mx-auto px-6 py-6">
            {/* Header */}
            <header className="text-center mb-4">
                <h1 className="text-4xl font-extrabold mb-3 text-gray-800">Join Our Team</h1>
                <p className="text-lg text-gray-500">We’re on the lookout for creative and driven individuals to join our innovative team.</p>
            </header>

            {/* Search Bar */}
            <section className="mb-4">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </section>

            {/* Job Listings */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-700">Current Openings</h2>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredJobs.map((job, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
                        >
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{job.title}</h3>
                            <p className="text-gray-600 mb-2">Location: <span className="font-medium">{job.location}</span></p>
                            <p className="text-gray-800 mb-2">Salary: <span className="font-medium">{job.ctc}</span></p>
                            <p className="text-gray-700 mb-4">{job.description}</p>
                            <button
                                onClick={() => setSelectedJob(job)}
                                className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </section>

            {/* Job Detail Modal */}
            {selectedJob && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
                        <h3 className="text-2xl font-bold mb-4">{selectedJob.title}</h3>
                        <p className="text-gray-600 mb-2">Location: <span className="font-medium">{selectedJob.location}</span></p>
                        <p className="text-gray-800 mb-2">Salary: <span className="font-medium">{selectedJob.ctc}</span></p>
                        <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                        <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                        <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                        <p className="text-gray-700 mb-4">{selectedJob.description}</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleApplyNow(selectedJob)}
                                className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                            >
                                Apply Now
                            </button>
                            <button
                                onClick={() => setSelectedJob(null)}
                                className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Our Culture Section */}
            <section className="mb-12">
                <h2 className="text-3xl font-semibold mb-6 text-gray-700">Our Culture</h2>
                <p className="text-gray-700 mb-4">At ANBRUCH IT, we foster a collaborative and inclusive environment where innovation thrives. Discover our values and what makes us unique.</p>
                <button className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300">Learn More</button>
            </section>

            {/* Contact Us Section */}
            <section>
                <h2 className="text-3xl font-semibold mb-6 text-gray-700">Contact Us</h2>
                <p className="text-gray-700 mb-4">Have questions about career opportunities or our hiring process? Reach out to us anytime.</p>
                <p className="text-gray-600">Email: <a href="mailto:info@wrocus.com" className="text-blue-600 hover:underline">info@wrocus.com</a></p>
            </section>
        </div>
    );
};

export default CareerPage;
