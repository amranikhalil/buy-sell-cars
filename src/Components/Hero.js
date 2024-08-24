import React from 'react'
import "../css/hero.css"
import heroCar from "../Images/Hero-car-.png";
import { Link } from "react-router-dom";

export const Hero = () => {
	const storedUser = JSON.parse(sessionStorage.getItem('user'));
	const storedName = storedUser?.name;
	const storedUserType = storedUser?.userType || "visiteur";
	
    return (

        <div className='big-box'>
        {storedUser ? (
                // User is logged in, render content for logged-in users
                <>
                    <div className='left-side'>
                        <div className='small-blue-text'>Bienvenue, {storedName}!</div>
                        <div className='big-text'>Découvrez des offres exclusives <br />pour nos membres.</div>
                        <div className='small-text'>Parcourez notre sélection de voitures de qualité à des prix avantageux. Des affaires exceptionnelles vous attendent!</div>
                        {/* Add other content for logged-in users */}
                        
                    </div>
                    <div className='right-side'>
                        <img className='herocar' src={heroCar} alt='Herocar' />
                    </div>
                </>
            ) : (
                // User is not logged in, render content with buttons
                <>
                    <div className='left-side'>
                        <div className='small-blue-text'>Avec CarShop</div>
                        <div className='big-text'>La voiture de vos <br />rêves au meilleur prix!</div>
                        <div className='small-text'>Large sélection de véhicules toutes marques contrôlés par nos experts avec prix imbattables et De belles affaires en perspectives !</div>
                        <div className='action-right-button'>
                            <button className="button-getstarted">
                                <Link to="/subscribe">
                                    <div className="getstarted-text">Get started</div>
                                </Link>
                            </button>
                            <button className="button-login">
                                <Link to="/login">
                                    <div className="login-text">Login</div>
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className='right-side'>
                        <img className='herocar' src={heroCar} alt='Herocar' />
                    </div>
                </>
            )}
        </div>
    );
}

