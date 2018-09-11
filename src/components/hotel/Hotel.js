import React, { Component } from 'react';
export default class Hotel extends Component {

  render() {
     const {hotel} =  this.props; 
    return (
        <li>
            <span className="info"><span>Name:</span> {hotel.name} </span>
            <span className="info"><span>Price:</span>  {`${hotel.price} AED`} </span>
            <span className="info"><span>City:</span> {hotel.city} </span>
        </li>
    );
  }
}