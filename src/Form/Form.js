import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
    constructor(){
        super();
        this.state = {

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
        this.setState({})
    }

    render() {
        return (
            <form>
                <input placeholder='Name' value={this.state.name} onChange={this.handleChange} name='name'/>
                <input placeholder='Date (mm/dd)' value={this.state.date} onChange={this.handleChange} name='date'/>
                <input placeholder='Time' value={this.state.time} onChange={this.handleChange} name='time'/>
                <input placeholder='Number of guests' type='number' value={this.state.number} onChange={this.handleChange} name='number'/>
            <button className='submit-button' onClick={this.handleSubmit}>Make Reservation</button>
            </form>
        )
    }

}

export default Form;