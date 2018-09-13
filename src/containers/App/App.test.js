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

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders without crashing', async () => {
  const  fromDate = '2020-10-15';
  const  endDate = '2020-10-20';
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setState({hotels : hotelList.hotels, hotelData :  hotelList.hotels})
  wrapper.instance().searchHotel(moment(fromDate) , moment(endDate));
  expect(wrapper.state('hotels').length).toBe(1);
});


it('renders without crashing', async () => {
  const hotelList = await fetchHotelList();  
  const wrapper = mount(<App  />);
  wrapper.setState({hotels : hotelList.hotels, hotelData :  hotelList.hotels})
  wrapper.instance().sortHotelhandler('name');
  expect(wrapper.state('hotels')[0].name).toBe(hotelList.hotels[5].name);
});
it('renders without crashing', async () => { 
  const format="YYYY/MM/DD";
  const fromDate = moment('2020-10-15', format, "America/Toronto");
  const endDate = moment('2019-10-15', format, "America/Toronto");
  expect(validDates(fromDate, endDate)).toBe(false);
});
it('renders without crashing', async () => { 
  const wrapper = mount(<App  />);
 await wrapper.instance().fetchHotels(URL);
  expect(wrapper.state('hotels').length).toBeGreaterThan(0);
});


