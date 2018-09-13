import React, { Component } from 'react';
import './App.css';
import HotelList from '../../components/hotellist/HotelList';
import SortRow from '../../components/sortRow/SortRow';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import moment from 'moment';
import _ from 'underscore'
import {validDates} from '../../utils/dataFilters';
import {URL} from '../../uls';
import request from '../../service';
class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
        hotels: [],
        hotelData : [] ,
        nights : 0,
    }; 
  }
  componentDidMount = () =>{
    this.fetchHotels(URL);
  }
  fetchHotels = async (URL) => {
    const hotels = await request(URL);
    this.setState({hotels : hotels, hotelData : hotels});
  }
  findHotelByName = (txt) => {
    const hotels = this.state.hotelData;
    let filteredHotels = hotels.filter(hotel => hotel.name === txt)
    this.setState({hotels : filteredHotels});
  }
  sortHotelhandler = (sortBYKey) =>{
    const hotels = this.state.hotels;
    let sortedArr  = _.sortBy(hotels, (o) => o[sortBYKey])
    this.setState({hotels : sortedArr});
  }
  searchHotel = (startDate, endDate) =>{
    let filteredHotels = [];
    let hotels = this.state.hotelData;
    let nights = endDate.diff(startDate, 'days');
    if(validDates(startDate, endDate)){
      filteredHotels = hotels.filter(hotel => {
        let availability = hotel.availability;
        let yes =  availability.filter(availabilityDate => {
          let availabilityFrom = moment(availabilityDate.from, "DD-MM-YYYY");
          let availabilityTo = moment(availabilityDate.to, "DD-MM-YYYY");
          if (startDate.isBetween(availabilityFrom, availabilityTo, 'days', '[]') && endDate.isBetween(availabilityFrom, availabilityTo, 'days', '[]')) {
              return true;
          }
          return false;
         });
         hotel.price = hotel.price * nights;
         return yes.length > 0; 
      })
     this.setState({hotels : filteredHotels, nights : nights});  
    }
    
  }
  render() {
    const {hotels, nights} = this.state;
    return (
      <div className="App">
      <Search  searchHotelCallBack={this.searchHotel}/>
        <div className="content-holder">
          <Sidebar  findHotelByName={this.findHotelByName} />
          <div id="content">
            <SortRow nights={nights} sortHotelhandler={this.sortHotelhandler}/>
            <HotelList hotelList={hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
