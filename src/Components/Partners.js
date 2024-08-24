import React from 'react'
import "../css/partners.css"
import Audi from "../Images/logos-mark/Audi.svg";
import Ford from "../Images/logos-mark/Ford.svg";
import Gmc from "../Images/logos-mark/GMC.svg";
import Hyundai from "../Images/logos-mark/Hyundai.svg";
import Kia from "../Images/logos-mark/Kia.svg";
import Opel from "../Images/logos-mark/Opel.svg";
import Peageot from "../Images/logos-mark/Peageot.svg";
import Seat from "../Images/logos-mark/Seat.svg";

export const Partners = () => {
    return (
        <div className='grey-box'>
            <div className='markes-partners'>
                <img className='Audi' src={Audi} alt='Audi' />
                <img className='Ford' src={Ford} alt='Ford' />
                <img className='Gmc' src={Gmc} alt='Gmc' />
                <img className='Hyundai' src={Hyundai} alt='Hyundai' />
                <img className='Kia' src={Kia} alt='Kia' />
                <img className='Opel' src={Opel} alt='Opel' />
                <img className='Peageot' src={Peageot} alt='Peageot' />
                <img className='Seat' src={Seat} alt='Seat' /></div>
        </div>
    )
}
