import React from 'react';
import ReactDOM from 'react-dom';
import SortRow from './SortRow';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';
Enzyme.configure({ adapter: new Adapter() });

it('it simulate the SortRow li count', () => {
    const wrapper = mount(<SortRow />);
    expect(wrapper.find('li').length).toEqual(2);

});
it('check the Click button handler ', () => {
    const sortHotelhandler = jest.fn();
    const props = {
        sortHotelhandler
    }
    const wrapper = mount(<SortRow {...props} />);
    const span = wrapper.find('#nameId') 
    span.simulate('click');
    expect(sortHotelhandler).toHaveBeenCalled();
  });
  it('check the Click button handler ', () => {
    const sortHotelhandler = jest.fn();
    const props = {
        sortHotelhandler
    }
    const wrapper = mount(<SortRow {...props} />);
    const span = wrapper.find('#priceId') 
    span.simulate('click');
    expect(sortHotelhandler).toHaveBeenCalled();
  });
  