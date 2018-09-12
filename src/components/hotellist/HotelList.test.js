import React from 'react';
import ReactDOM from 'react-dom';
import HotelList from './HotelList';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchHotelList from '../../../__mocks__/fetchHotels';
Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', async () => {
  const hotelList = await fetchHotelList();  
  const wrapper = shallow(<HotelList hotelList={hotelList.hotels} />);
  expect(wrapper).toMatchSnapshot();
});
test('render a document name', async () => {
    const hotelList = await fetchHotelList(); 
    const wrapper = mount(
        <HotelList hotelList={hotelList.hotels} />
    );
    expect(wrapper.prop('hotelList').length).toEqual(hotelList.hotels.length);
});
test('render a document name', async () => {
    const hotelList = await fetchHotelList(); 
    const wrapper = mount(
        <HotelList hotelList={hotelList.hotels} />
    );
    expect(wrapper.find('li').length).toEqual(hotelList.hotels.length);
});
test('render a document name', async () => {
    const hotelList = await fetchHotelList(); 
    const wrapper = shallow(
        <HotelList hotelList={hotelList.hotels} />
    );
    expect(wrapper.hasClass('card-list')).toEqual(true);
});



// prepareDomeNode = async (method) => {
    
//     const hotelList = await fetchHotelList(); 
//     const wrapper = method(
//         <HotelList hotelList={hotelList.hotels} />
//     );
//     return wrapper;
// }