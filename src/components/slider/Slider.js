import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import CustomHandle from './Tooltip';
export default class SliderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  setValue = (e) => {
    this.setState({ value: e });
  };
  onAfterChangeHandler = () => {
    this.props.findHotelByName('price', this.state.value)
  }
  render() {
    const { min, max } = this.props.ranges;
    return (
        <div id="sidebar">
            <Slider
              id={'id-1'}
              handle={CustomHandle}
              min={min}
              max={max}
              value={this.state.value}
              onChange={this.setValue}
              onAfterChange={this.onAfterChangeHandler}
            />
        </div>
    );
  }
}
SliderComponent.defaultProps = {
  ranges: { min: 0, max: 0 },
};

