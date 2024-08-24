import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Trash2 } from 'react-feather'; 
import Sidebar from './Sidebar';

const ManageCars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    receiveCars();
  }, []);

  const receiveCars = async () => {
    try {
      const res = await axios.get('http://localhost:3002/car/get-carsinfo');
      setCars(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCar = async (carId) => {
    try {
      const res = await axios.get(`http://localhost:3002/car/delete?id=${carId}`);
      setCars((prevCars) => prevCars.filter((car) => car._id !== carId));
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const carImages = require.context('../Images/cars', false, /\.png$/);

  return (
    <div className="flex h-screen bg-gray-100">
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        <Sidebar />
      </div>
      <div className="ml-6 w-3/4 p-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">Manage Cars</h2>

        <div className="flex mb-4 ">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {cars?.map((car) => (
            <div
              key={car._id}
              className="bg-white p-4 rounded shadow-md hover:shadow-lg transition duration-300"
            >
              {carImages.keys().includes(`./${car.Brand}.png`) ? (
                <img
                  src={carImages(`./${car.Brand}.png`)}
                  alt={car.name}
                  className="w-20 h-20 mx-auto rounded-full mb-2"
                />
              ) : (
                <img
                  src={null}
                  alt={car.name}
                  className="w-20 h-20 mx-auto rounded-full mb-2"
                />
              )}

              <p className="text-lg "> Brand : {car.Brand}</p>
              <p className="text-lg "> Model : {car.Model}</p>
              <p className="text-lg "> Motorization : {car.Motorization}</p>
              <p className="text-lg "> Color : {car.Color}</p>
              <p className="text-lg "> Color : {car.Price}</p>
              <div className="mt-4">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => {
                    handleDeleteCar(car._id);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCars;
