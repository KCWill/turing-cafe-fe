import React from 'react';
import Form from './Form.js'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

describe('Form', () => {

    it('should display four form input boxes and make reservation button', () => {
        const { getByText, getByPlaceholderText } = render(
            <Form />
        );
        expect(getByPlaceholderText('Name')).toBeInTheDocument();
        expect(getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
        expect(getByPlaceholderText('Time')).toBeInTheDocument();
        expect(getByPlaceholderText('Number of guests')).toBeInTheDocument();
        expect(getByText('Make Reservation')).toBeInTheDocument();
    })
     
})