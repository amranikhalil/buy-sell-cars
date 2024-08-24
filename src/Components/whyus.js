import React from 'react'
import "../css/whyus.css"
import prix from "../Images/whyus/money.svg";
import review from "../Images/whyus/review.svg";
import car from "../Images/whyus/car.svg";

export const Whyus = () => {
    return (
        <div className='whyus-full'>
            <div className='whyus-titles'>
                Pourquoi nous choisir ?
            </div>
            <div className='whyus-card'>
                <div className='whyus-card1'>
                    <img className='prix' src={prix} alt='prix' />
                    <div className='card1-title'>Les meilleurs prix garantis</div>
                    <div className='card1-par'>Nous vous garantissons les meilleurs prix sur tous nos véhicules. Et nous offrons également des promotions exceptionnelles tout au long de l'année.</div>
                </div>
                <div className='whyus-card1'><img className='review' src={review} alt='review' />
                    <div className='card1-title'>Un service client de qualité</div>
                    <div className='card1-par'>Notre équipe expérimentée est à l'écoute de vos besoins. Nous sommes engagés à vous offrir le meilleur service client qui soit.</div></div>
                <div className='whyus-card3'></div>
                <div className='whyus-card1'><img className='car' src={car} alt='car' />
                    <div className='card1-title'>Une large sélection de véhicules</div>
                    <div className='card1-par'>Nous disposons d'un vaste choix de véhicules neufs et d'occasion pour tous les budgets et tous les besoins. Trouvez la voiture de vos rêves chez nous !</div></div>
                <div className='whyus-card3'></div>
            </div>
        </div>

    )
}
