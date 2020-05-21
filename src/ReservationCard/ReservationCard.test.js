import React from 'react';
import ReservationCard from './ReservationCard.js';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Reservation Card', () => {
    it('should display name, date, time, and number of guests', () => {
        const sampleInput = {
            name: 'Kyle',
            date: '(03/05)',
            time: '7:00',
            number: '6'
        }
        const { getByText } = render(
        <ReservationCard
            data={sampleInput}
        />
        );
        expect(getByText('Kyle')).toBeInTheDocument();
        expect(getByText('(03/05)')).toBeInTheDocument();
        expect(getByText('7:00 pm')).toBeInTheDocument();
        expect(getByText('Number of guests: 6')).toBeInTheDocument();
    })
})