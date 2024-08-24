import React, { useEffect, useState } from 'react';
import "../css/ourcars.css";
import { Link } from "react-router-dom";
import { Homecars } from "./Homecars"
import axios from 'axios';
import styled from 'styled-components';


export const Ourcars = () => {
	const storedUser = JSON.parse(sessionStorage.getItem('user'));
	const storedName = storedUser?.name;
	const storedId = storedUser?.userId;
	const storedUserType = storedUser?.userType || "visiteur";
	const [cars,setCars]=useState([])
	const get_cars= async()=>{
        try{
            const res= await axios.get("http://localhost:3002/car/get-carsinfo")
            console.log(res.data)
            setCars(res.data)
        }catch(e){
            console.log(e)
        }
	}
		
	useEffect(()=>{
       get_cars()
	},[])
	const carsImage = require.context('../Images/cars',false,/\.png$/) 
    return (
        <div>            
            <div className='big-title-boutique'>Une large sélection de véhicules</div>
            
            <div className='card-ourcars'>
                {cars.map((car)=>(
                     carsImage.keys().includes(`./${car.Brand}.png`)?
                     (
                        <Homecars 
                        Imgsrc= {carsImage(`./${car.Brand}.png`)}
                        Id = {car._id}
                        Idv = {car.idV}
                        Brand={car.Brand} 
                        couleur={car.Color} 
                        model = {car.Model}
                        motorization = {car.Motorization}  
                        Price = {car.Price}                   
                        />
                     ):

                     (<Homecars 
                     Imgsrc= {null}
                     Id = {car._id}
                     Idv = {car.idV}
                     Brand={car.Brand} 
                     couleur={car.Color} 
                     model = {car.Model}
                     motorization = {car.Motorization}
                     Price = {car.Price}
                     />)
                ))}               
            </div>
            {/* <button className="voir-annonce-button">
				<Link to="/Boutique">
					<div className="getstarted-text">Voir plus</div>
				</Link>
			</button> */}
        </div>
    )
}

