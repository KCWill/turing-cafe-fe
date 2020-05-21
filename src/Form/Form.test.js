import React from 'react';
import Form from './Form.js'
import { render, fireEvent} from '@testing-library/react';
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
    
    it('should allow user to input reservation details', () => {
        const { getByTestId, getByPlaceholderText } = render(
            <Form />
        );
        fireEvent.change(getByPlaceholderText('Name'), {target: {value: 'Jimmy'}});
        fireEvent.change(getByPlaceholderText('Date (mm/dd)'), {target: {value: '(03/05)'}});
        fireEvent.change(getByPlaceholderText('Time'), {target: {value: '7:00'}});
        fireEvent.change(getByPlaceholderText('Number of guests'), {target: {value: 4}});
        expect(getByTestId('reservation-form')).toHaveFormValues({
            name: 'Jimmy',
            date: '(03/05)',
            time: '7:00',
            number: 4
        });
    })

})