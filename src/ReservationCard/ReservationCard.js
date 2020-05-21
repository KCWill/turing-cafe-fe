import React from 'react';
import './ReservationCard.css';


const ReservationCard = (props) => {
    return (
        <>
            <h2>{`${props.data.name}`}</h2>
            <h3>{`${props.data.date}`}</h3>
            <h3>{`${props.data.time} pm`}</h3>
            <h3>{`Number of guests: ${props.data.number}`}</h3>
        </>
    )
}

export default ReservationCard;