import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchHotelList from '../../../__mocks__/fetchHotels';
import moment from 'moment';
import { URL } from '../../uls';
import { validDates } from '../../utils/dataFilters';
Enzyme.configure({ adapter: new Adapter() });
const format = 'YYYY/MM/DD';
import makeCancelable from 'makecancelable';
import flushPromises from 'makecancelable';

const Setup = (hotelList) => {
  const wrapper = mount(<App />);
  wrapper.setProps({ hotelList: hotelList.hotels });
  wrapper.setState({
    hotels: hotelList.hotels,
    filteredHotels: hotelList.hotels,
  });
  return wrapper;
};
const runInstanceMethod = (wrapper, method, parem1, parem2) => {
  wrapper.instance().searchHotel(parem1, parem2);
};
it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Check searchHotel by given dates', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = Setup(hotelList);
  runInstanceMethod(
    wrapper,
    'searchHotel',
    moment('2020-10-4', format, 'America/Toronto'),
    moment('2020-10-20', format, 'America/Toronto'),
  );
  expect(wrapper.state('hotels').length).toBe(4);
  wrapper.unmount();
});
it('Check searchHotel by given dates', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = Setup(hotelList);
  runInstanceMethod(
    wrapper,
    'searchHotel',
    moment('2022-10-4', format, 'America/Toronto'),
    moment('2020-10-20', format, 'America/Toronto'),
  );
  expect(wrapper.state('hotels').length).toBe(6);
  wrapper.unmount();
});

it('Check sortHotelhandler', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = Setup(hotelList);
  wrapper.instance().sortHotelhandler('name');
  expect(wrapper.state('hotels')[0].name).toBe(hotelList.hotels[5].name);
  wrapper.unmount();
});
it('Check validDates', async () => {
  const fromDate = moment('2020-10-15', format, 'America/Toronto');
  const endDate = moment('2019-10-15', format, 'America/Toronto');
  expect(validDates(fromDate, endDate)).toBe(false);
});

it('CHeck findHotelByName', async () => {
  const hotelList = await fetchHotelList();
  const wrapper = Setup(hotelList);
  wrapper.instance().findHotelByName('name', 'Media One Hotel');
  expect(wrapper.state('hotels').length).toBe(1);
  wrapper.instance().findHotelByName('name', '');
  expect(wrapper.state('hotels').length).toBe(6);
  wrapper.instance().findHotelByName('price', 1200);
  expect(wrapper.state('hotels').length).toBe(6);
  wrapper.unmount();
});
