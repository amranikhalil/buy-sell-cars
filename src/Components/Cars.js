
import React, { useState } from 'react';
import { Search, ShoppingBag } from 'react-feather'; // Import Feather Icons

const Cars = () => {
  // Sample student data (you can fetch this data from an API)
  const initialCars = [
    {
      id: 1,
      Brand: 'Mercedes',
      model : 'Class S',
      motorisation : 'Amg 220',
      Color: 'Black',
      image: 'student1.jpg', // Provide the image file path
    },
    {
        id: 2,
        Brand: 'BMW',
        model : 'Series 5',
        motorisation : 'M',
        Color: 'white',
        image: 'student1.jpg', // Provide the image file path
      },
      {
        id: 1,
      Brand: 'Mercedes',
      model : 'Class G',
      motorisation : 'Amg 63',
      Color: 'Black',
      image: 'student1.jpg', // Provide the image file path
      },
      {
        id: 1,
        Brand: 'Mercedes',
        model : 'Class S',
        motorisation : 'Amg 220',
        Color: 'Black',
        image: 'student1.jpg', // Provide the image file path
      },
      {
          id: 2,
          Brand: 'BMW',
          model : 'Series 5',
          motorisation : 'M',
          Color: 'white',
          image: 'student1.jpg', // Provide the image file path
        },
        {
          id: 1,
        Brand: 'Mercedes',
        model : 'Class G',
        motorisation : 'Amg 63',
        Color: 'Black',
        image: 'student1.jpg', // Provide the image file path
        },
        {
            id: 1,
            Brand: 'Mercedes',
            model : 'Class S',
            motorisation : 'Amg 220',
            Color: 'Black',
            image: 'student1.jpg', // Provide the image file path
          },
          {
              id: 2,
              Brand: 'BMW',
              model : 'Series 5',
              motorisation : 'M',
              Color: 'white',
              image: 'student1.jpg', // Provide the image file path
            },
            {
              id: 1,
            Brand: 'Mercedes',
            model : 'Class G',
            motorisation : 'Amg 63',
            Color: 'Black',
            image: 'student1.jpg', // Provide the image file path
            },
    // Add more car data as needed
  ];

  const [cars, setCar] = useState(initialCars);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCars = cars.filter((car) =>
    car.Brand.toLowerCase().includes(searchTerm.toLowerCase()) 
  );

  return (
        
        <div className=" mt-16 p-4">
            <h2 className="text-4xl font-semibold mb-8 text-center">Our cars</h2>
            
            <div className="flex mb-4 ml-16">
                    {/* Search bar */}
                <div className="mb-4 w-3/4 mt-4">
                    <input
                    type="text"
                    placeholder="Search cars..."
                    className="border rounded py-2 px-3 w-full "
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                {/* Add Student button */}
                <button
                    className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4 "
                >
                    <Search size={16} className="mr-2 inline" />
                    Seach
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {filteredCars.map((car) => (
                <div
                    key={car.id}
                    className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
                >
                    <img
                    src={car.image}
                    alt={car.name}
                    className="w-20 h-20 mx-auto rounded-full mb-2"
                    />
                    <p className="text-lg "> Brand : {car.Brand}</p>
                    <p className="text-lg "> Model : {car.model}</p>
                    <p className="text-lg "> Motorisation : {car.motorisation}</p>
                    <p className="text-lg "> Color : {car.Color}</p>
                    <p className="text-lg "> Color : {car.Price}</p>
                    <div className="mt-4">
                      <button
                          className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 flex"
                          onClick={() => {
                          // Implement your update student logic
                          }}
                      >
                        Add to cart
                        <ShoppingBag size={20} className="ml-2" /> {/* Edit icon */}
                      </button>
                    </div>
                </div>
                ))}
            </div>
      </div>
    
  );
};

export default Cars;
