// PredictionForm.js

import React, { useState } from 'react';
import SidebarVendeur from './SidebarVendeur';
import Sidebar from './Sidebar';


const PredictionForm = () => {

    const storedUser = JSON.parse(sessionStorage.getItem('user'));
	const storedUserType = storedUser?.userType || "Admin";

    const [formData, setFormData] = useState({
    levy: '',
    manufacturer: '',
    model: '',
    productionYear: '',
    category: '',
    leatherInterior: '',
    fuelType: '',
    engineVolume: '',
    mileage: '',
    cylinders: '',
    gearBoxType: '',
    driveWheels: '',
    wheel: '',
    airbags: '',
  });
  const [predictionResult, setPredictionResult] = useState(null);

  // Function to map manufacturer string to a number
  const mapManufacturerToNumber = (manufacturer) => {
    const manufacturerMapping = {
      'ACURA': 0, 'ALFA ROMEO': 1, 'AUDI': 2, 'BENTLEY': 3, 'BMW': 4,
      'BUICK': 5, 'CADILLAC': 6, 'CHEVROLET': 7, 'CHRYSLER': 8, 'CITROEN': 9,
      'DAEWOO': 10, 'DAIHATSU': 11, 'DODGE': 12, 'FIAT': 13, 'VOLVO': 14,
      'FORD': 15, 'GAZ': 16, 'GMC': 17, 'HAVAL': 18, 'HONDA': 19,
      'HUMMER': 20, 'HYUNDAI': 21, 'INFINITI': 22, 'ISUZU': 23, 'JAGUAR': 24,
      'RENAULT': 25, 'TOYOTA': 26, 'VOLKSWAGEN': 27
    };
    return manufacturerMapping[manufacturer] || -1; // Default to -1 if not found
  };

  // ... (previous code)

const mapModelToNumber = (model) => {
    const modelMapping = {
      // ... (previous mappings)
  
      1: '100', 2: '1000', 3: '1111', 4: '114', 5: '120', 6: '128 M tech', 7: '130',
      8: '1300', 9: '135', 10: '147', 11: '320', 12: '320 2.0', 13: '320 2.2', 14: '320 DIESEL',
      15: '320 Gran Turismo', 16: '320 M', 17: '320 i', 18: '32214', 19: '323', 20: '325',
      21: '325 CI', 22: '328', 23: '328 DIZEL', 24: '328 Xdrive', 25: '330', 26: '335',
      27: '3796', 28: '416', 29: '428', 30: '428 Sport Line', 31: '435', 32: '435 CUPE',
      33: '5.30E+62', 34: '50', 35: '500', 36: '500 Abarth', 37: '500 Sport', 38: '500 turbo',
      39: '500C', 40: '500C Lounge', 41: '500L LONG', 42: '520', 43: '520 Vanos', 44: '523',
      45: '525', 46: '525 i', 47: '528', 48: '528 i', 49: '530', 50: '535', 51: '535 M PAKET',
      '535 Twinturbo': 52, '535 i': 53, '540 I': 54, '545': 55, '550': 56, '550 F10': 57,
      '550 GT': 58, '607': 59, '616': 60, '640 GRAN-COUPE': 61, '645 CI': 62, '650': 63,
      '730 3.0': 64, '740': 65, '750': 66, '911': 67, 'A 140': 68, 'A 160': 69, 'A 170': 70,
      'A3 PREMIUM': 71, 'A4': 72, 'A4 S line': 73, 'A4 premium': 74, 'A4 premium plius': 75,
      'A5': 76, 'A6': 77, 'A7': 78, 'A7 Prestige': 79, 'A8': 80, 'Acadia': 81, 'Accent': 82,
      'Accord': 83, 'Accord CL9 type S': 84, 'Actyon': 85, 'Agila': 86, 'Airtrek': 87,
      'Allante': 88, 'Allroad': 89, 'Alphard': 90, 'Altezza': 91, 'Altima': 92, 'Aqua': 93,
      'Aqua L paketi': 94, 'Aqua S': 95, 'Aqua g soft leather sele': 96, 'Aqua s': 97,
      'Astra': 98, 'Astra 1600': 99, 'Astra BERTONE': 100, 'Astra G': 101, 'Astra H': 102,
      'Astra astra': 103, 'Astra g': 104, 'Atenza': 105, 'Auris': 106, 'Avalanche': 107,
      'Avalon': 108, 'Avalon LIMITED': 109, 'Avalon limited': 110, 'Avella': 111,
      'Avenger': 112, 'Avensis': 113, 'Aveo': 114, 'B 170': 115, 'BRZ': 116, 'Bluebird': 117,
      'C 180': 118, 'C 200': 119, 'C 200 2.0': 120, 'C 200 7G-TRONIC': 121, 'C 220': 122,
      'C 220 CDI': 123, 'C 230': 124, 'C 240': 125, 'C 250': 126, 'C 280': 127, 'C 300': 128,
      'C 320 CDI': 129, 'C 350': 130, 'C 36 AMG': 131, 'C 63 AMG': 132, 'C-MAX': 133,
      'C-MAX HYBRID': 134, 'C1': 135, 'C30 2010': 136, 'CC': 137, 'CC 2.0 T': 138,
      'CC R line': 139, 'CHR': 140, 'CHR Limited': 141, 'CHR g soft leather sele': 142,
      'CLA 250': 143, 'CLA 45 AMG': 144, 'CLK 200': 145, 'CLK 200 Kompressor': 146,
      'CLK 230': 147, 'CLK 240': 148, 'CLK 270': 149, 'CLK 320': 150, 'CLK 320 AMG': 151,
      'CLK 430': 152, 'CLK 55 AMG': 153, 'CLS 350': 154, 'CLS 350 AMG': 155, 'CLS 500': 156,
      'CLS 55 AMG': 157, 'CLS 550': 158, 'CLS 550 550': 159, 'CT 200h': 160, 'CT 200h F SPORT': 161,
      'CT 200h F-sport': 162, 'CTS': 163, 'CX-5': 164, 'CX-7': 165, 'CX-9': 166, 'Caddy': 167,
      'Cadenza': 168, 'Caldina': 169, 'Caliber': 170, 'Camaro': 171, 'Camry': 172,
      'Camry HYBRID': 173, 'Camry LE': 174, 'Camry S': 175, 'Camry SE': 176, 'Camry SPORT': 177,
      'Camry Se': 178, 'Camry XLE': 179, 'Camry se': 180, 'Camry sport': 181, 'Captiva': 182,
      'Carnival': 183, 'Carnival grand': 184, 'Cayenne': 185, 'Ceed': 186, 'Century': 187,
      'Cerato': 188, 'Cerato K3': 189, 'Challenger': 190, 'Cherokee': 191, 'Cinquecento': 192,
      'Civic': 193, 'Civic EX': 194, 'Clio': 195, 'Colt': 196, 'Colt Lancer': 197,
      'ColtPlus': 198, 'Combo': 199, 'Combo 2001': 200, 'Compass': 201, 'Continental GT': 202,
      'Cooper': 203, 'Cooper S Cabrio': 204, 'Cooper S Cabrio R56': 205, 'Corolla': 206,
      'Corolla 04': 207, 'Corolla IM': 208, 'Corolla LE': 209, 'Corolla S': 210,
      'Corolla verso': 211, 'Corsa': 212, 'Countryman': 213, 'Countryman S': 214, 'Cr-v': 215,
      'Crafter': 216, 'Cruze': 217, 'Cruze LS': 218, 'Cruze LT': 219, 'Cruze LTZ': 220,
      'Cruze Premier': 221, 'Cruze RS': 222, 'Cruze ltz': 223, 'Cruze strocna': 224,
      'Dart GT 2.4': 225, 'Dart Limited': 226, 'Defender 90 Cabrio': 227, 'Delica': 228,
      'Demio': 229, 'Demio evropuli': 230, 'Discovery': 231, 'Doblo': 232, 'Durango': 233,
      'E 200': 234, 'E 220': 235, 'E 230': 236, 'E 240': 237, 'E 240 E 240': 238, 'E 250': 239,
      'E 270': 240, 'E 270 AVANGARDI': 241, 'E 280': 242, 'E 280 CDI': 243, 'E 300': 244,
      'E 300 AVANTGARDE-LTD': 245, 'E 320': 246, 'E 350': 247, 'E 350 212': 248,
      'E 350 4 Matic AMG Package': 249, 'E 350 AMG': 250, 'E 350 w211': 251, 'E 350 ამგ': 252,
      'E 36 AMG': 253, 'E 430': 254, 'E 500': 255, 'E 500 AMG': 256, 'E 55': 257, 'E 550': 258,
      'ES 300': 259, 'ES 350': 260, 'Edge': 261, 'Elantra': 262, 'Elantra GLS / LIMITED': 263,
      'Elantra GT': 264, 'Elantra LIMITED': 265, 'Elantra Limited': 266, 'Elantra SE': 267,
      'Elantra gt': 268, 'Elantra limited': 269, 'Elantra sport limited': 270, 'Element': 271,
      'Elgrand': 272, 'Elysion': 273, 'Encore': 274, 'Equinox': 275, 'Equinox LT': 276,
      'Escalade': 277, 'Escape': 278, 'Escape 3.0': 279, 'Escape Hybrid': 280, 'Escape Titanium': 281,
      'Escort': 282, 'Estima': 283, 'Eunos 500': 284, 'Expedition': 285, 'Explorer': 286,
      'F-type': 287,
      
    };
  
    return modelMapping[model] || 0; // Default to -1 if not found
  };

  const mapfuelTypeToNumber = (fuelType) => {
    const fuelTypeMapping = {
      'CNG': 0, 'DIESEL': 1, 'HYBRID': 2, 'LPG': 3, 'PETROL': 4,
      'PLUG-IN HYBRID': 5,
    };
    return fuelTypeMapping[fuelType] || -1; // Default to -1 if not found
  };

  const mapGearboxTypeToNumber = (gearBoxType) => {
    const gearBoxTypeMapping = {
      'Automatic': 0, 'MANUAL': 1, 'TIPTRONIC': 2, 'VARIATOR': 3
    };
    return gearBoxTypeMapping[gearBoxType] || -1; // Default to -1 if not found
  };

  const mapdriveWheelsToNumber = (driveWheels) => {
    const driveWheelsMapping = {
      '4X4': 0, 'FRONT': 1, 'REAR': 2
    };
    return driveWheelsMapping[driveWheels] || -1; // Default to -1 if not found
  };

  const mapwheelToNumber = (wheel) => {
    const gearwheelMapping = {
      'LEFT': 0, 'RIGHT': 1,
    };
    return gearwheelMapping[wheel] || -1; // Default to -1 if not found
  };

  const mapleatherInteriorToNumber = (leatherInterior) => {
    const leatherInteriorMapping = {
      'NO': 0, 'YES': 1,
    };
    return leatherInteriorMapping[leatherInterior] || -1; // Default to -1 if not found
  };

  const mapcategoryToNumber = (category) => {
    const categoryMapping = {
      'CABRIOLET': 0, 'COUPE': 1, 'GOODS WAGON': 2, 'HACHBACK':3,
      'JEEP':4, 'LIMOUSINE':5, 'MICROBUS':6, 'MINIVAN':7,
        'PICKUP':8, 'SEDAN':9,
    };
    return categoryMapping[category] || -1; // Default to -1 if not found
  };
  
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the name is "manufacturer," map it to a number
    const mappedValue =
    name.toLowerCase() === 'manufacturer'
      ? mapManufacturerToNumber(value.toUpperCase())
      : name.toLowerCase() === 'model'
      ? mapModelToNumber(value.toUpperCase())
      : name.toLowerCase() === 'category'
      ? mapcategoryToNumber(value.toUpperCase())
      : name.toLowerCase() === 'fueltype'
      ? mapfuelTypeToNumber(value.toUpperCase())
      : name.toLowerCase() === 'gearboxtype'
      ? mapGearboxTypeToNumber(value.toUpperCase())
      : name.toLowerCase() === 'drivewheels'
      ? mapdriveWheelsToNumber(value.toUpperCase())
      : name.toLowerCase() === 'leatherinterior'
      ? mapleatherInteriorToNumber(value.toUpperCase())
      : name.toLowerCase() === 'wheel'
      ? mapwheelToNumber(value.toUpperCase())
      : value;    

    setFormData({
      ...formData,
      [name]: mappedValue,
    });
  };


  const handlePrediction = async (e) => {
    e.preventDefault();
  
    // Extract the relevant data from formData
    const inputData = {
      data: Object.values(formData).map(value => parseFloat(value) || value)  // Convert numeric values to float
    };
  
    try {
      // Make a POST request to the FastAPI server
      const response = await fetch('http://localhost:8000/predictPrice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });
  
      // Check if the request was successful (status code 200)
      if (response.ok) {
        // Parse the JSON response
        const result = await response.json();
  
        // Set the prediction result in the component state
        setPredictionResult(result.prediction);
       
        
      } else if (response.status === 422) {
        // Parse and handle validation error response
        const errorResponse = await response.json();
        console.error('Validation Error:', errorResponse.detail);
    }  
      else {
        // Handle error cases
        console.error('Failed to make prediction:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
    <div className="flex  bg-gray-100">
      <div style={{ display: 'grid', gridTemplateColumns: '250px auto' }}>
        {storedUserType === "seller" ? <SidebarVendeur/> : <Sidebar/>}
      </div>
        <div className="container mx-auto mt-8 ml-64 mb-8">
        <h1 className="text-3xl font-bold mb-4">Car Price Prediction</h1>
        <form onSubmit={handlePrediction} className="max-w-md">
            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="levy">
                Levy
            </label>
            <input
                type="text"
                id="levy"
                name="levy"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter levy"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="manufacturer">
                Manufacturer
            </label>
            <input
                type="text"
                id="manufacturer"
                name="manufacturer"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter manufacturer"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="model">
                Model
            </label>
            <input
                type="text"
                id="model"
                name="model"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter model"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productionYear">
                Production Year
            </label>
            <input
                type="number"
                id="productionYear"
                name="productionYear"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter production year"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
                Category
            </label>
            <input
                type="text"
                id="category"
                name="category"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter category"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="leatherInterior">
                Leather Interior
            </label>
            <input
                type="text"
                id="leatherInterior"
                name="leatherInterior"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter leather interior"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fuelType">
                Fuel Type
            </label>
            <input
                type="text"
                id="fuelType"
                name="fuelType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter fuel type"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="engineVolume">
                Engine Volume
            </label>
            <input
                type="text"
                id="engineVolume"
                name="engineVolume"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter engine volume"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mileage">
                Mileage
            </label>
            <input
                type="number"
                id="mileage"
                name="mileage"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter mileage"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cylinders">
                Cylinders
            </label>
            <input
                type="text"
                id="cylinders"
                name="cylinders"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter cylinders"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gearBoxType">
                Gear Box Type
            </label>
            <input
                type="text"
                id="gearBoxType"
                name="gearBoxType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter gear box type"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="driveWheels">
                Drive Wheels
            </label>
            <input
                type="text"
                id="driveWheels"
                name="driveWheels"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter drive wheels"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="wheel">
                Wheel
            </label>
            <input
                type="text"
                id="wheel"
                name="wheel"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter wheel"
                onChange={handleChange}
                
            />
            </div>

            <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="airbags">
                Airbags
            </label>
            <input
                type="text"
                id="airbags"
                name="airbags"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter airbags"
                onChange={handleChange}
                
            />
            </div>

            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
            Predict Price
            </button>
        </form>

        {predictionResult !== null && (
            <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Prediction Result:</h2>
            <p className="text-lg">Estimated Price: ${predictionResult}</p>
            </div>
        )}
        </div>
    </div>
  );
};

export default PredictionForm;
