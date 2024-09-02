'use client';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Carausel = () => {
  const containerStyle = {
    position: 'relative',
    height: '550px', // Adjust height as needed for text display
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke', // White background color
    // padding: '20px',
    marginBottom: '10px'
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '15%', // Position from the top
    left: '5%', // Position from the left edge
    transform: 'translateY(-20%)', // Adjust vertical alignment
    color: '#000000', // Black text color for contrast
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center', // Center align text
    opacity: 1, // Ensure text is visible
  };

  const headingStyle = {
    fontSize: '3.5em', // Larger font size for headings

    fontFamily: 'sans-serif',
  };

  const paragraphStyle = {
    fontSize: '1.5em', // Larger font size for paragraphs
    // fontFamily: 'sarif',
  };

  // CSS for carousel control arrows
  const arrowStyles = `
  .carousel .control-arrow {
    border: 2px solid red; /* Red border for visibility */
    background: red; /* Solid red background for the arrow button */
    color: red; /* White color for the arrow itself (assuming you use text or an icon) */
    opacity: 1; /* Fully opaque */
    border-radius: 50%; /* Round shape for the arrow buttons */
    width: 40px; /* Size of the arrow buttons */
    height: 40px; /* Size of the arrow buttons */
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for better visibility */
  
  }
   
`;


  const featureStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px',
    backgroundColor: '#f5f5f5',
  };

  const featureCardStyle = {
    width: '30%',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  return (
    <>
      <style>{arrowStyles}</style>  
      <Carousel
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        // autoPlay={true}
        interval={4000}
        showIndicators={false}
        swipeable={false}
        transitionTime={1000}
      >
        <div style={containerStyle}>
          <div style={textOverlayStyle}>
            <h2 style={headingStyle}>
              End-to-End <span style={{ color: '#3498db',marginBottom:'-10px', fontWeight: 'bold', fontFamily: 'Verdana, sans-serif' }}>Software Solutions</span>
            </h2>
            <p style={{ ...headingStyle,marginTop:'-20px' }}>
              and <span style={{ color: '#2c3e50', fontWeight: 'bold' }}>IT Recruitment</span> Services
            </p>
            <p style={paragraphStyle}>
              Transform your vision with cutting-edge technology and expert recruitment, driving growth and innovation for your business.
            </p>

            <a href="#contact" style={{
              display: 'inline-block',
              marginTop: '10px',
              padding: '15px 25px',
              backgroundColor: '#3498db',
              color: '#ffffff',
              width: 'auto',
              textDecoration: 'none',
              borderRadius: '5px',
              fontSize: '1.2em',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              textAlign: 'center',
              transition: 'background-color 0.3s, transform 0.3s',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#2980b9';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#3498db';
                e.currentTarget.style.transform = 'scale(1)';
              }}>
              Learn More <ArrowDownwardIcon />
            </a>
            <div className="flex justify-around items-center mt-10 
             p-6 bg-gradient-to-r from-gray-200
              via-gray-100 to-gray-200 rounded-lg shadow-lg">
           
              <div className="flex flex-col items-center text-center p-4 bg-white
               rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 
               hover:shadow-lg"data-aos="flip-right" style={{width:'500px'}}>
                <h2 className="text-3xl font-bold text-blue-600 mb-2">2500</h2>
                <p className="text-lg text-gray-700" style={{fontFamily:'sans-serif'}}>A robust network of skilled software engineers, rigorously vetted to ensure top-notch talent for your projects.</p>

              </div>

            
              <div className="border-l-2 border-gray-300 mx-6 h-20"></div>

              
              <div className="flex flex-col items-center text-center p-5 bg-white rounded-lg shadow-md
               transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"data-aos="flip-right">
                <h2 className="text-3xl font-bold text-blue-600 mb-2">83+</h2>
                <p className="text-lg text-gray-700" style={{fontFamily:'sans-serif'}}>Clients worldwide since 2015.</p>
              </div>
            </div>


          </div>
          <div></div>

        </div>
        {/* <div>
          <p>Premium IT Recruitment through pre-vetted Software Profiles
Deploy best Talent to Most challenging Projects
Cherry pick from 200K+ profiles of Industry Best Software professionals</p>
        </div> */}


        {/* 2nd page */}
        <div class="relative bg-gray-800 text-white p-12 rounded-lg shadow-lg">
  <div class="text-center max-w-4xl mx-auto">
    <h2 class="text-4xl font-bold mb-2 text-blue-400 shadow-md">Comprehensive Software Development</h2>
    <p class="text-xl font-normal mb-6 text-white">From Vision to Reality</p>
    <p class="text-base leading-6 text-gray-200 mx-auto px-4">
      Expert guidance and solutions from initial vision through strategic planning, development, and continuous enhancement.
    </p>
  </div>
</div>

        {/* 3rd page */}
        <div style={containerStyle}>
          <div style={textOverlayStyle}>
            <h2 style={headingStyle}>Full Cycle Software Development</h2>
            <p style={headingStyle}>From Idea To Product</p>
            <p style={paragraphStyle}>Consulting services from an idea to strategy and enhancement</p>
          </div>
        </div>
      </Carousel>

      {/* New Content Sections */}


    </>
  );
};

export default Carausel;
