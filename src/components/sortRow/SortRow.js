import React, { Component } from 'react';
import './index.css';
import Button from '../button/Button';


export default class SortRow extends Component {
  render() {
    return (
        <div className="sort-row">
            <span className="title">Total Nights: {this.props.nights}</span>
            <ul className="btn-list">
                <li>
                    <Button onClick={() => this.props.sortHotelhandler('name')} classStyle={'btn-Sort'} id={'nameId'} text={'Sort by Name'}/>
                </li>
                <li>
                    <Button onClick={() => this.props.sortHotelhandler('price')} classStyle={'btn-Sort'} id={'priceId'} text={'Sort by Price'}/>
                </li>
            </ul>
        </div>
    );
  }
}