import React from 'react';
import pure from 'recompose/pure';
const Hotel = (props) => {
    const { hotel } = props;
    return (
      <li>
        <span className="info">
          <span>Name:</span> {hotel.name}{' '}
        </span>
        <span className="info">
          <span>Price:</span> {`${hotel.price} AED`}{' '}
        </span>
        <span className="info">
          <span>City:</span> {hotel.city}{' '}
        </span>
      </li>
    );
}
export default pure(Hotel);
