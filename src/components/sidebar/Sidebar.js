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
      value: 0,
    };
  }
  setValue = (e) => {
    this.setState({ value: e });
  };
  /**
   * This method is used for input state handler.
   */
  searchHotelNameStateHandler = (e) => {
    this.setState({ hotelName: e.target.value });
  };
  /*
   Reste Sidebar State.
  */
  clear = () => {
    this.setState({ hotelName: '', value: 0 });
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
                this.props.findHotelByNameORPrice('name', this.state.hotelName)
              }
              classStyle={'search-btn'}
              id={'searchByText'}
              text={'Search Button'}
            />
            <label htmlFor="price">Price Filter</label>
            <SliderComponent
              findHotelByNameORPrice={this.props.findHotelByNameORPrice}
              ranges={ranges}
              filters={this.props.filters}
              onChange={this.setValue}
              value={this.state.value}
            />
          </form>
        </div>
      </aside>
    );
  }
}
