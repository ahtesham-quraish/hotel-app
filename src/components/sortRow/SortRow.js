import React, { Component } from 'react';
import './index.css';

export default class SortRow extends Component {
  render() {
    return (
        <div className="sort-row">
            <span className="title">Total Nights: 5</span>
            <ul className="btn-list">
                <li><span id="nameId" onClick={() => this.props.sortHotelhandler('name')} >Sort by Name</span></li>
                <li><span id="priceId" onClick={() => this.props.sortHotelhandler('price')}>Sort by Price</span></li>
            </ul>
        </div>
    );
  }
}