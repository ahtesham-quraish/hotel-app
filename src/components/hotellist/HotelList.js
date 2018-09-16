import React from 'react';
import './index.css';
import Hotel from '../hotel/Hotel';
import pure from 'recompose/pure';
const HotelList = (props) => {
  const { hotelList } = props;
  const list = hotelList.map((hotel) => (
    <Hotel key={hotel.city} hotel={hotel} />
  ));
  return <ul className="card-list">{list}</ul>;
};
export default pure(HotelList);
