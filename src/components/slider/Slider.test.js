import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './Slider';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePicker from 'react-datepicker';
import moment from 'moment';
Enzyme.configure({ adapter: new Adapter() });
const Setup = () => {
    return mount(<Slider />);
}
it('Check setValue', () => {
    let startDate = moment();
    const wrapper = Setup();
    expect(wrapper.state('value')).toBe(0);
    wrapper.instance().setValue(10);
    expect(wrapper.state('value')).toBe(10);
  });