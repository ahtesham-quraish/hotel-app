import React from 'react';
import ReactDOM from 'react-dom';
import SliderComponent from './Slider';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePicker from 'react-datepicker';
import moment from 'moment';
Enzyme.configure({ adapter: new Adapter() });
const Setup = (props) => {
  return mount(<SliderComponent {...props} />);
};
it('Check setValue', () => {
  const findHotelByNameORPrice = jest.fn();
  const onChange = jest.fn();
  const props = { findHotelByNameORPrice, onChange, value: 0 };
  const wrapper = Setup(props);
  wrapper.instance().setValue();
  wrapper.instance().onAfterChangeHandler();
  expect(findHotelByNameORPrice).toHaveBeenCalled();
  expect(onChange).toHaveBeenCalled();
});
