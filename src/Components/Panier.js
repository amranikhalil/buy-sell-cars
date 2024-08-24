import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderClient from "./HeaderClient";
import { Carproduct } from "./carproduct"
import axios from 'axios';

const Panier = () => {
		const storedUser = JSON.parse(sessionStorage.getItem('user'));
		const storedName = storedUser?.name;
		const storedId = storedUser?.userId;
		const storedUserType = storedUser?.userType;
		const [cars,setCars]=useState([])		
		const navigate = useNavigate();
	
		useEffect(() => {
			if (!storedUserType) {   
			navigate('/');
			}
		}, [storedUserType, navigate]);

       
		
		const get_cars= async()=>{
        try{
            const res= await axios.get(`http://localhost:3002/car/get-Panier?id=${storedId}`)
            console.log("le panier est " + res.data)
            setCars(res.data)

        }catch(e){
            console.log(e)
        }

    }
    useEffect(()=>{
        get_cars()
    },[])

    useEffect(() => {
        console.log(cars); 
    }, [cars]);

    const carsImage = require.context('../Images/cars',false,/\.png$/) 
	
    return (
    
        <div>
            <HeaderClient />
            <div className='big-title-boutique'>
				{storedUser ? (
					<h1 className="text-3xl font-bold mb4">Ceci est votre panier, {storedName}</h1>
				) : (
					<p>Please log in</p>
				)}              
            </div>
            <div className='card-ourcars ml-24'>
                {cars.map((car)=>(
                     carsImage.keys().includes(`./${car.Brand}.png`)?
                     (
                        <Carproduct 
                        Imgsrc= {carsImage(`./${car.Brand}.png`)}
                        Id = {car._id}
                        Idv = {car.idV}
                        Brand={car.Brand} 
                        couleur={car.Color} 
                        model = {car.Model}
                        motorization = {car.Motorization}    
                        Price = {car.Price}  
                        isInPanier = {true}                 
						/>
                        
                     ):

                     (<Carproduct 
                     Imgsrc= {null}
                     Id = {car._id}
                     Idv = {car.idV}
                     Brand={car.Brand} 
                     couleur={car.Color} 
                     model = {car.Model}
                     motorization = {car.Motorization}
                     Price = {car.Price}  
                     isInPanier = {true}
                     />)
                ))}
            </div>

        </div>

    )
}
export default Panier;
