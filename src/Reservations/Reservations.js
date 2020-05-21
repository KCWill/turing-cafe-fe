import React from 'react';
import './Reservations.css';
import ReservationCard from '../ReservationCard/ReservationCard';


const Reservations = (props) => {
    return (
        <>
            {props.reservations.map((reservation, index) => {
                return <ReservationCard data={reservation} key={index} />
            })}
        </>
    )
}

export default Reservations;