import React from 'react'

const OfficeLocation = () => {
    const officeLocations = [
        { city: 'Noida', imgSrc: 'https://via.placeholder.com/400x300?text=Noida' },
        { city: 'Delhi', imgSrc: 'https://via.placeholder.com/400x300?text=Delhi' },
        { city: 'Gurugram', imgSrc: 'https://via.placeholder.com/400x300?text=Gurugram' },
        // Add more locations here
      ];
      
  return (
    <div>
       <div className="container mx-auto px-4 py-2">
        <h2 className="text-2xl font-bold mb-1">Our Office Locations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {officeLocations.map((location, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={location.imgSrc}
                alt={`${location.city} Office`}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{location.city}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OfficeLocation
