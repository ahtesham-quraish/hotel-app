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
}
it('Check setValue', () => {
    const findHotelByName = jest.fn();
    const props = {findHotelByName};
    const wrapper = Setup(props);
    expect(wrapper.state('value')).toBe(0);
    wrapper.instance().setValue(10);
    wrapper.instance().onAfterChangeHandler();
    expect(findHotelByName).toHaveBeenCalled()
  });