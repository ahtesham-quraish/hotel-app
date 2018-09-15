import React from 'react';
import ReactDOM from 'react-dom';
import Hotel from './Hotel';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchHotelList from '../../../__mocks__/fetchHotels';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = shallow(<Hotel hotel={hotelList.hotels[0]} />);
  expect(wrapper).toMatchSnapshot();
});
test('render a document name', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = mount(<Hotel hotel={hotelList.hotels[0]} />);
  expect(wrapper.prop('hotel').name).toEqual(hotelList.hotels[0].name);
});
