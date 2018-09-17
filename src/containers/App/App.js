import React, { Component } from 'react';
import './App.css';
import HotelList from '../../components/hotellist/HotelList';
import SortRow from '../../components/sortRow/SortRow';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import _ from 'underscore';

import {
  validDates,
  filterHotelsByDate,
  findRangeValues,
} from '../../utils/dataFilters';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      nights: 0,
      ranges: { min: 0, max: 0 },
      filteredHotels: [],
      lastFilterdBy: '',
    };
    this.filterFlag = false;
    this.filters = {};
  }

  /**
   * This method takes two parems, first is on which list
   * would be filtered and second would be the value for
   * comparision.
   */
  findHotelByNameORPrice = (filterBy, value) => {
    this.filterFlag = false;
    this.setFilter(filterBy, value);
    const filters = this.filters;
    let hotels = this.state.filteredHotels;
    [].concat(
      ...Object.entries(filters).map(([k, v]) => {
        hotels = this.applyFilters(k, v, hotels);
        return true;
      }),
    );
    this.setState({ hotels: hotels });
  };

  /**
   * Apply filter and return the output array
   */
  applyFilters = (filterBy, value, hotels) => {
    let filteredHotels = hotels.filter(
      (hotel) =>
        filterBy === 'name'
          ? value !== ''
            ? hotel[filterBy] === value
            : true
          : hotel[filterBy] <= value,
    );
    return filteredHotels;
  };

  /**
   * This method would sort the list on the basis of given Key.
   */
  sortHotelhandler = (sortBYKey) => {
    const hotels = this.state.hotels;
    let sortedArr = _.sortBy(hotels, (o) => o[sortBYKey]);
    this.setState({ hotels: sortedArr });
  };
  setFilter = (key, value) => {
    let filters = this.filters;
    filters[key] = value;
    this.filters = filters;
    //this.setState({filters : filters});
  };
  /**
   * This method would require start date and end date to filter
   * hotel list. It would first validate the start and end dates.
   */
  searchHotel = (startDate, endDate) => {
    let hotels = _.map(this.props.hotelList, _.clone);

    // this.setFilter('startDate', startDate);
    // this.setFilter('endDate', endDate);
    let nights = endDate.diff(startDate, 'days');
    if (validDates(startDate, endDate)) {
      const filteredHotels = filterHotelsByDate(
        hotels,
        startDate,
        endDate,
        nights,
      );
      const ranges = findRangeValues(filteredHotels);
      this.sidebar.clear();
      this.setState({
        filteredHotels: filteredHotels,
        hotels: filteredHotels,
        nights: nights,
        ranges: ranges,
      });
    }
  };
  render() {
    const { hotels, nights, ranges } = this.state;
    return (
      <div className="App">
        <Search searchHotelCallBack={this.searchHotel} />
        <div className="content-holder">
          <Sidebar
            ref={(ref) => {
              this.sidebar = ref;
            }}
            filterFlag={this.filterFlag}
            ranges={ranges}
            findHotelByNameORPrice={this.findHotelByNameORPrice}
          />
          <div id="content">
            <SortRow nights={nights} sortHotelhandler={this.sortHotelhandler} />
            <HotelList hotelList={hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
