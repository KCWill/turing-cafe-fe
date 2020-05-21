import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(){
        super();
        this.state = {
            name: '',
            date: '',
            time: '',
            numberOfGuests: 0,
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.submitReservation(this.state);
        this.clearInputs();
    }

    clearInputs = () => {
        this.setState({
            name: '',
            date: '',
            time: '',
            numberOfGuests: 0,
        })
    }

    render() {
        return (
            <form>
                <input placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name'/>
                <input placeholder='Date (mm/dd)' value={this.state.date} onChange={this.handleChange} name='date'/>
                <input placeholder='Time' value={this.state.time} onChange={this.handleChange} name='time'/>
                <input placeholder='Number of guests' value={this.state.numberOfGuests} onChange={this.handleChange} name='numberOfGuests'/>
            <button className='submit-button' onClick={this.handleSubmit}>Make Reservation</button>
            </form>
        )
    }

}

export default Form;