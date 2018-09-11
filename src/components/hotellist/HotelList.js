import React, { Component } from 'react';
import './index.css';
import Hotel from '../hotel/Hotel';

export default class HotelList extends Component {
    
  render() {
    const {hotelList} =  this.props; 
    const list = hotelList.map(hotel => <Hotel key={hotel.city} hotel={hotel}/>); 
    return (
        <ul className="card-list">
            {list}
       </ul>
    );
  }
}