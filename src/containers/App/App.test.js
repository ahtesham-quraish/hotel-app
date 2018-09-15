import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchHotelList from '../../../__mocks__/fetchHotels';
import moment from 'moment';
import {URL} from '../../uls';
import { validDates } from '../../utils/dataFilters';
Enzyme.configure({ adapter: new Adapter() });
const format="YYYY/MM/DD";
import makeCancelable from 'makecancelable';
import flushPromises from 'makecancelable'

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('Check searchHotel by given dates', async () => {
  const  fromDate = '2020-10-4';
  const  endDate = '2020-10-20';
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setProps({hotelList : hotelList.hotels})
  wrapper.setState({hotels : hotelList.hotels, hotelData :  hotelList.hotels})
  wrapper.instance().searchHotel(moment(fromDate, format, "America/Toronto") , moment(endDate, format, "America/Toronto"));
  expect(wrapper.state('hotels').length).toBe(4);
  wrapper.unmount()
  
});
it('Check searchHotel by given dates', async () => {
  const  fromDate = '2022-10-4';
  const  endDate = '2020-10-20';
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setProps({hotelList : hotelList.hotels})
  wrapper.setState({hotels : hotelList.hotels, hotelData :  hotelList.hotels})
  wrapper.instance().searchHotel(moment(fromDate, format, "America/Toronto") , moment(endDate, format, "America/Toronto"));
  expect(wrapper.state('hotels').length).toBe(6);
  wrapper.unmount()
  
});

it('Check sortHotelhandler', async () => {
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setProps({hotelList : hotelList.hotels})
  wrapper.setState({hotels : hotelList.hotels, hotelData :  hotelList.hotels})
  wrapper.instance().sortHotelhandler('name');
  expect(wrapper.state('hotels')[0].name).toBe(hotelList.hotels[5].name);
  wrapper.unmount()
});
it('Check validDates', async () => { 
  const fromDate = moment('2020-10-15', format, "America/Toronto");
  const endDate = moment('2019-10-15', format, "America/Toronto");
  expect(validDates(fromDate, endDate)).toBe(false);
});


it('CHeck findHotelByName', async () => {
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setProps({hotelList : hotelList.hotels})
  wrapper.setState({hotels : hotelList.hotels, filteredHotels: hotelList.hotels, hotelData :  hotelList.hotels})
  wrapper.instance().findHotelByName('name', 'Media One Hotel');
  expect(wrapper.state('hotels').length).toBe(1);
  wrapper.unmount()
});
it('Check findHotelByName When Empty string is given', async () => {
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setProps({hotelList : hotelList.hotels})
  wrapper.setState({hotels : hotelList.hotels, filteredHotels:  hotelList.hotels,  hotelData :  hotelList.hotels})
  wrapper.instance().findHotelByName('name', '');
  expect(wrapper.state('hotels').length).toBe(6);
  wrapper.unmount()
});

