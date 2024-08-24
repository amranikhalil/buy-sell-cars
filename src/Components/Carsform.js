import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

  const storedUser = JSON.parse(sessionStorage.getItem('user'));
  const storedId = storedUser?.userId;


const Formcars = ({addCar,data,setIsAddingCar,updateCars,setSelectedCar}) => {
    const [file, setFile] = useState(null);
    const [Data, setFormData] = useState({
        Brand: data? data.Brand:'',
        Model: data? data.Model:'',
        Motorization:data? data.Motorization: '',
        Color:data? data.Color: '',
        image: data? data.image: '',
        Price: data? data.Price: ''
      });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }; 
     
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post(`http://localhost:3002/car/upload-car?id=${storedId}`, Data, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log('Form submitted:', res.data);
    addCar(res.data);  
  } catch (error) {
    console.error(error);
  }
};
const exit=()=>{
  setIsAddingCar(false)
}
const updateCar= async (e)=>{
  e.preventDefault();
  if(data!==null) {
    const id=data._id
    console.log(Data)
    try{
      const res = await axios.post(`http://localhost:3002/car/update-car?id=${id}`,Data)
      updateCars(res.data,id)
      setSelectedCar(null)
      setIsAddingCar(false)
      console.log(res.data)
    }catch(e){
      console.log(e)
    }
  }else{
    console.log('the data is not aviliable')
  }

}

      
    const handleFileChange = (e) => {
        
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        setFormData((prevData) => ({
          ...prevData,
          image: selectedFile,
        }));
      };
return (
  <div className="h-screen flex items-center justify-center relative">
    <form className="max-w-md mx-auto p-8 bg-gray-900 shadow-md rounded-md">
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Cars Form</h2>
      <div className="mb-4">
        <label htmlFor="Brand" className="block text-sm font-medium text-white">
          Brand
        </label>
        <input
          type="text"
          id="Brand"
          name="Brand"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          value={Data.Brand}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Model" className="block text-sm font-medium text-white">
          Model
        </label>
        <input
          type="text"
          id="Model"
          name="Model"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          value={Data.Model}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Motorization" className="block text-sm font-medium text-white">
          Motorization
        </label>
        <input
          id="Motorization"
          name="Motorization"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          value={Data.Motorization}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Color" className="block text-sm font-medium text-white">
          Color
        </label>
        <input
          type="text"
          id="Color"
          name="Color"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          onChange={handleChange}
          value={Data.Color}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Price" className="block text-sm font-medium text-white">
          Price
        </label>
        <input
          type="text"
          id="Price"
          name="Price"
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
          onChange={handleChange}
          value={Data.Price}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="photo" className="block text-sm font-medium text-white">
          Upload Photo
        </label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/*"
          onChange={handleFileChange}
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-indigo-500"
        />
      </div>
      {data ? (
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={updateCar}
        >
          Update Car
        </button>
      ) : (
        <button
          type="submit"
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={handleSubmit}
        >
          Add Car
        </button>
      )}
          <button
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-full absolute top-0 right-0 mt-2 mr-2 flex items-center justify-center'
          onClick={exit}

        >
          ❌
        </button>
    </form>
  </div>
);


}
export default Formcars
