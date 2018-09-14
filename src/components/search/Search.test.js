import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePicker from 'react-datepicker';
import moment from 'moment';
Enzyme.configure({ adapter: new Adapter() });

// it('render date input correctly with empty value', () => {
//   const props = {
//        selected: null
//       },
//       DateInputComponent = mount(<DatePicker {...props} />);
//     expect((DateInputComponent).prop('selected')).toEqual(null);
// });

it('check the StartDate State ', () => {
  const  date = '2017-01-02';
  const format="YYYY/MM/DD";
  const startDateHandlerMock = jest.fn(),
      wrapper = mount(<Search  />);
      const input = wrapper.find('input').first();  
      input.simulate('change', { target: {value: moment(date).format(format)} });
      expect(wrapper.state('startDate').format(format)).toBe(moment(date).format(format));
});

it('check the endDate State ', () => {
  const  date = '2018-01-02';
  const format="YYYY/MM/DD";
  const startDateHandlerMock = jest.fn(),
      wrapper = mount(<Search  />);
      const input = wrapper.find('input').last();  
      input.simulate('change', { target: {value: moment(date).format(format)} });
      expect(wrapper.state('endDate').format(format)).toBe(moment(date).format(format));
});

it('check the Click button handler ', () => {
  const searchHotelCallBack = jest.fn();
  const props = {
    searchHotelCallBack
  }
  const wrapper = mount(<Search {...props} />);
  const button = wrapper.find('.btn-submit') 
  button.simulate('click');
  expect(searchHotelCallBack).toHaveBeenCalled();
});

  