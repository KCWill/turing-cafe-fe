import React from 'react';
import './Reservations.css';
import ReservationCard from '../ReservationCard/ReservationCard';


const Reservations = (props) => {
    return (
        <>
            {props.reservations.map(reservation => {
                return <ReservationCard data={reservation} />
            })}
        </>
    )
}

export default Reservations;