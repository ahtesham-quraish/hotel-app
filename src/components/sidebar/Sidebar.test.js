import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './Sidebar';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DatePicker from 'react-datepicker';
import moment from 'moment';
Enzyme.configure({ adapter: new Adapter() });


it('it simulate the search text OnChange3', () => {
    const event = {
      target: { value: 'A' }
    };

    let startDate =  moment();
    const wrapper = mount(<Sidebar />);
    expect(wrapper.state('hotelName')).toBe('');
    wrapper.find('#searchText').simulate('change', event);
    expect(wrapper.state('hotelName')).toBe('A');
});
it('it simulate the search text OnChange', () => {
    const wrapper = mount(<Sidebar />);
    expect(wrapper.find('input').length).toEqual(1);

});

it('check the Click button handler ', () => {
    const findHotelByName = jest.fn();
    const props = {
        findHotelByName
    }
    const wrapper = mount(<Sidebar {...props} />);
    const button = wrapper.find('button').first(); 
    button.simulate('click');
    expect(findHotelByName).toHaveBeenCalled();
  });
  it('it simulate the search text OnChange 1', () => {
    let startDate =  moment();
    const wrapper = mount(<Sidebar />);
    expect(wrapper.state('value')).toBe(0);
    wrapper.instance().setValue(10);
    expect(wrapper.state('value')).toBe(10);
});
  

it('it simulate the search text OnChange 2', () => {
    const wrapper = mount(<Sidebar />);
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
});

// // https://github.com/react-component/slider/pull/256
// it('should handle mutli handle mouseEnter correctly', () => {
//     const props={ranges:{min : 0, max: 100}}
//     const wrapper = mount(<Sidebar {...props}/>);
//     const propss = { min: 0, max: 10000, value: [0.01, 10000], onChange: jest.fn() };
//     const range = wrapper.find('#id-1');
//     //const range = mount(<Range {...props} step={0.1} />);
//     range.setProps({ min: 0, max: 590 });
//     range.setProps({ min: 0, max: 500 });
//     expect(props.onChange).toHaveBeenCalledWith([0.01, 500]);
      
//   });
