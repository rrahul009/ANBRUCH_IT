'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carausel = () => {
  const imageStyle = {
    height: '550px', // Fixed height for the images
    objectFit: 'cover', // Ensures the image covers the container completely
    width: '100%', // Ensures the image takes the full width of the container
  };

  const containerStyle = {
    position: 'relative',
    height: '100%',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '30%', // Position from the top
    left: '5%', // Position from the left edge
    transform: 'translateY(-20%)', // Adjust vertical alignment
    color: 'white', // Text color
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for readability
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '50%', // Adjust as needed
    textAlign: 'left', // Left align text
    opacity: 0, // Start with hidden text
    animation: 'fadeInUp 2s forwards', // Animation name and duration
  };

  const headingStyle = {
    fontSize: '4.5em', // Larger font size for headings
    marginBottom: '10px', // Space below the heading
  };

  const paragraphStyle = {
    fontSize: '1.5em', // Larger font size for paragraphs
  };

  // CSS for fade-in and slide-up animation
  const animationStyle = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(-60%);
      }
      to {
        opacity: 1;
        transform: translateY(-20%);
      }
    }
    .slide-1 { animation-delay: 0.5s; }
    .slide-2 { animation-delay: 1s; }
    .slide-3 { animation-delay: 1.5s; }
  `;

  return (
    <>
      <style>{animationStyle}</style> {/* Inject the animation CSS */}
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={4000}
        showIndicators={false}
        swipeable={false}
      >
     
        <div style={containerStyle}>
          <img style={imageStyle} src="bussinee2.jpg" alt="Slide 2" />
          <div style={{ ...textOverlayStyle, animationDelay: '1s' }}>
          <h2 className='text-white text-3xl'>Full cycle software development</h2>
            <p className='text-6xl'>From Idea To Product</p>
            <p style={paragraphStyle}>Consulting services from an idea to 
              strategy and enhancement
            </p>
          </div>
        </div>
        <div style={containerStyle}>
          <img style={imageStyle} src="Firefly bussiness image for website 1193.jpg" alt="Slide 1" />
          <div style={{ ...textOverlayStyle, animationDelay: '0.5s' }}>
            <h2 className='text-white text-3xl'>Full cycle software development</h2>
            <p className='text-6xl'>From Idea To Product</p>
            <p style={paragraphStyle}>Consulting services from an idea to 
              strategy and enhancement
            </p>
          </div>
        </div>
        <div style={containerStyle}>
          <img style={imageStyle} src="bussiness4.jpg" alt="Slide 3" />
          <div style={{ ...textOverlayStyle, animationDelay: '1.5s' }}>
          <h2 className='text-white text-3xl'>Full cycle software development</h2>
            <p className='text-6xl'>From Idea To Product</p>
            <p style={paragraphStyle}>Consulting services from an idea to 
              strategy and enhancement
            </p>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Carausel;
