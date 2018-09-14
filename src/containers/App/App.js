import React, { Component } from 'react';
import './App.css';
import HotelList from '../../components/hotellist/HotelList';
import SortRow from '../../components/sortRow/SortRow';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import _ from 'underscore'
import {validDates, filterHotelsByDate} from '../../utils/dataFilters';
import {URL} from '../../uls';
import request from '../../service';
import makeCancelable from 'makecancelable';
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
    this.fetchHotels();
  }
  /**
   * This method would fetch hotel list from server.
   */
  fetchHotels = () => {
    this.cancelFetch = makeCancelable(
      request(URL),
      fetched => this.setState({hotels : fetched, hotelData : fetched}),
      error => console.error(error)
    );
  }
  componentWillUnmount = () => {
    this.cancelFetch();
  }

  /**
   * This method takes two parems, first is on which list 
   * would be filtered and second would be the value for 
   * comparision.
   */
  findHotelByName = (filterBy, value) => {
    if(value === '' || value === undefined){
      this.setState({hotels : this.state.hotelData})
      return ;
    }
    const hotels = this.state.hotelData;
    let filteredHotels = hotels.filter(hotel => hotel[filterBy] === value)
    this.setState({hotels : filteredHotels});
  }

  /**
  * This method would sort the list on the basis of given Key. 
  */
  sortHotelhandler = (sortBYKey) =>{
    const hotels = this.state.hotels;
    let sortedArr  = _.sortBy(hotels, (o) => o[sortBYKey])
    this.setState({hotels : sortedArr});
  }

  /**
   * This method would require start date and end date to filter
   * hotel list. It would first validate the start and end dates. 
   */
  searchHotel = (startDate, endDate) =>{
    let hotels = this.state.hotelData;
    let nights = endDate.diff(startDate, 'days');
    if(validDates(startDate, endDate)){
    const filteredHotels =   filterHotelsByDate(hotels, startDate, endDate, nights); 
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
