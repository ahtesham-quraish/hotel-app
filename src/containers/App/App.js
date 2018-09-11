import React, { Component } from 'react';
import './App.css';
import HotelList from '../../components/hotellist/HotelList';
import SortRow from '../../components/sortRow/SortRow';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
import axios from 'axios';
class App extends Component {
  constructor(props) { 
    super(props); 
    this.state = { 
        hotels: []
    }; 
  }
  componentDidMount = () =>{
    this.fetchHotels();
  }
  fetchHotels = () => {
    axios.get('https://api.myjson.com/bins/tl0bp')
    .then(response => {this.setState({hotels : response.data.hotels})})
    .catch(err => console.log("error happened"))
  }
  render() {
    const {hotels} = this.state;
    return (
      <div className="App">
      <Search/>
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
