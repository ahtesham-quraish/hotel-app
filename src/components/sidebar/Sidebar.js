import React, { Component } from 'react';
import './index.css';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import Button from '../button/Button';
import Tooltip from 'rc-tooltip';
const Handle = Slider.Handle;
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
    console.log(e);
  };
  searchHotelNameStateHandler = (e) => {
    this.setState({ hotelName: e.target.value });
  };
  render() {
    const { hotelName } = this.state;
    const { min, max } = this.props.ranges;
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
            <Slider
              id={'id-1'}
              handle={handle}
              min={min}
              max={max}
              value={this.state.value}
              onChange={(e) => this.setValue(e)}
              onAfterChange={() =>
                this.props.findHotelByName('price', this.state.value)
              }
            />
          </form>
        </div>
      </aside>
    );
  }
}
Sidebar.defaultProps = {
  ranges: { min: 0, max: 0 },
};

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};
