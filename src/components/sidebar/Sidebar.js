import React, { Component } from 'react';
import './index.css';
import 'rc-slider/assets/index.css';
import Button from '../button/Button';
import SliderComponent from '../slider/Slider';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelName: '',
    };
  }
  /**
   * This method is used for input state handler.
   */
  searchHotelNameStateHandler = (e) => {
    this.setState({ hotelName: e.target.value });
  };
  render() {
    const { hotelName } = this.state;
    const { ranges } = this.props;
    return (
      <aside id="sidebar">
        <div id="sidebar">
          <form
            onSubmit={(e) => e.preventDefault()}
            action="#"
            className="search-hotel"
          >
            <input
              id="searchText"
              type="search"
              value={hotelName}
              onChange={this.searchHotelNameStateHandler}
              placeholder="Search Hotel"
            />
            <Button
              onClick={() =>
                this.props.findHotelByName('name', this.state.hotelName)
              }
              classStyle={'search-btn'}
              id={'searchByText'}
              text={'Search Button'}
            />
            <label htmlFor="price">Price Filter</label>
            <SliderComponent findHotelByName={this.props.findHotelByName}  ranges={ranges} />
          </form>
        </div>
      </aside>
    );
  }
}
