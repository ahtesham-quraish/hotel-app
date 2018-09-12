import React, { Component } from 'react';
import './App.css';
import HotelList from '../../components/hotellist/HotelList';
import SortRow from '../../components/sortRow/SortRow';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import moment from 'moment';
import axios from 'axios';
import {validDates} from '../../utils/dataFilters';
class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
        hotels: [],
        hotelData : [] 
    }; 
  }
  componentDidMount = () =>{
    this.fetchHotels();
  }
  fetchHotels = () => {
    axios.get('https://api.myjson.com/bins/tl0bp')
    .then(response => {this.setState({hotels : response.data.hotels, hotelData : response.data.hotels})})
    .catch(err => console.log("error happened"))
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
     this.setState({hotels : filteredHotels});  
    }
    
  }
  render() {
    const {hotels} = this.state;
    return (
      <div className="App">
      <Search searchHotelCallBack={this.searchHotel}/>
        <div className="content-holder">
          <Sidebar/>
          <div id="content">
            <SortRow/>
            <HotelList hotelList={hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
