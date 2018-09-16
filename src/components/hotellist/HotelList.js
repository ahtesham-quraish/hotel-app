import React, { Component } from 'react';
import './index.css';
import Hotel from '../hotel/Hotel';
import {uniqueId} from '../../utils/dataFilters';
import LazyLoad from 'react-lazyload';
class HotelList extends Component  {
  renderList = () =>{
    const { hotelList } = this.props;
    const list = hotelList.map((hotel, index) => (
      <LazyLoad  key={index} height={200} offset={[-100, 0]}>
        <Hotel key={uniqueId()} hotel={hotel} />
      </LazyLoad>
    ));
    return list;
  }
  render(){
  return( <ul className="card-list">{this.renderList()}</ul>)
  }

};
export default HotelList;
