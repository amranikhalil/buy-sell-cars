import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Trash2, Edit, Plus } from 'react-feather';
import Sidebar from './SidebarVendeur';
import Carsform from './Carsform';

const ManageCars = () => {
  const [cars, setCar] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingCar, setIsAddingCar] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const storedId = storedUser?.userId;
  
  
  useEffect(() => {
    recieve_cars();
  }, []);

  const recieve_cars = async (e) => {
    try {
      const res = await axios.get(`http://localhost:3002/car/get-carsinfoVendeur?id=${storedId}`);
      console.log(res.data);
      setCar(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteCars = async (carId) => {
    try {
      await axios.get(`http://localhost:3002/car/delete?id=${carId}`);
      setCar((prevCar) => prevCar.filter((car) => car._id !== carId));
      console.log('Car deleted successfully');
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleChangecars = async (carId) => {
    try {
      const res = await axios.get(`http://localhost:3002/car/getCarById?id=${carId}`);
      const car = await res.data[0];
      console.log(car);
      setSelectedCar(car);
      console.log(car.Brand);
      setIsAddingCar(true);
    } catch (e) {
      console.log(e, 'not working');
    }
  };

  const openAddCarForm = () => {
    setIsAddingCar(true);
  };

  const addCar = (formData) => {
    setCar((prev) => [...prev, formData]);
    setIsAddingCar(false);
  };

  const updateCar = (car, id) => {
    setCar((prev) => prev.filter((car) => car._id !== id));
    setCar((prev) => [...prev, car]);
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
          <div className="mb-4 w-3/4 mt-4">
            <input
              type="text"
              placeholder="Search cars..."
              className="border rounded py-2 px-3 w-full "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4 "
            onClick={openAddCarForm}
          >
            <Plus size={16} className="mr-2 inline" />
          </button>
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
              <p className="text-lg "> Price : {car.Price}</p>
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded mr-2 hover:bg-blue-600"
                  onClick={() => {
                    handleChangecars(car._id);
                  }}
                >
                  <Edit size={16} />
                </button>
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                  onClick={() => {
                    handleDeleteCars(car._id);
                    console.log(car._id);
                  }}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        
        {isAddingCar && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur">
            <Carsform
              addCar={addCar}
              data={selectedCar}
              setIsAddingCar={setIsAddingCar}
              updateCars={updateCar}
              setSelectedCar={setSelectedCar}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCars;
