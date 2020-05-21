import React, { Component } from 'react';
import './App.css';
import Reservations from '../Reservations/Reservations.js';
import Form from '../Form/Form.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: [],
    }
  }

  submitReservation = (resyData) => {
    // const resyCopy = [...this.state.reservations];
    // resyCopy.push(resyData);
    this.setState({reservations: [...this.state.reservations, resyData]})
  }

  componentDidMount = async () => {
    const response = await fetch('http://localhost:3001/api/v1/reservations');
    const reservations = await response.json();
    this.setState({...this.state, reservations});
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form submitReservation={this.submitReservation} />
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
