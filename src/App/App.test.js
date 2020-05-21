import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


describe('App', () => {
  it('should let user to add new reservation', () => {
    const { getByText, getByPlaceholderText } = render(
      <App />
    );
    fireEvent.change(getByPlaceholderText('Name'), {target: {value: 'Jimmy'}});
    fireEvent.change(getByPlaceholderText('Date (mm/dd)'), {target: {value: '(03/05)'}});
    fireEvent.change(getByPlaceholderText('Time'), {target: {value: '7:00'}});
    fireEvent.change(getByPlaceholderText('Number of guests'), {target: {value: 4}});
    fireEvent.click(getByText('Make Reservation'));
    expect(getByText('Jimmy')).toBeInTheDocument();
    expect(getByText('(03/05)')).toBeInTheDocument();
    expect(getByText('7:00 pm')).toBeInTheDocument();
    expect(getByText('Number of guests: 4')).toBeInTheDocument();
  });
})
