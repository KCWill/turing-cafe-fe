import React from 'react';
import './ReservationCard.css';


const ReservationCard = (props) => {
    return (
        <section className='reservation-card'>
            <h2>{`${props.data.name}`}</h2>
            <p>{`${props.data.date}`}</p>
            <p>{`${props.data.time} pm`}</p>
            <p>{`Number of guests: ${props.data.number}`}</p>
        </section>
    )
}

export default ReservationCard;