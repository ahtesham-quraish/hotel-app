import React, { Component } from 'react';
import './index.css';
import Button from '../button/Button';

export default class ButtonContainer extends Component {
  render() {
    return (
     <li>
            <Button
              onClick={() => this.props.sortHotelhandler(this.props.filterType)}
              classStyle={'btn-Sort'}
              id={this.props.id}
              text={'Sort by Name'}
            />
    </li>
    );
  }
}
