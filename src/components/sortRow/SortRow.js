import React, { Component } from 'react';
import './index.css';
import ButtonContainer from './ButtonContainer';

export default class SortRow extends Component {
  render() {
    return (
      <div className="sort-row">
        <span className="title">Total Nights: {this.props.nights}</span>
        <ul className="btn-list">
          <ButtonContainer
            classStyle={'btn-Sort'}
            id={'nameId'}
            sortHotelhandler={this.props.sortHotelhandler}
            filterType={'name'}
            text={'Sort By Name'}
          />

          <ButtonContainer
            id={'priceId'}
            sortHotelhandler={this.props.sortHotelhandler}
            filterType={'price'}
            text={'Sort By Price'}
          />
        </ul>
      </div>
    );
  }
}
