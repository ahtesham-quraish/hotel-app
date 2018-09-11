import React, { Component } from 'react';
import './index.css';

export default class Sidebar extends Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            hotelName: '',
            priceRange : 0
        }; 
    }
  searchHotelNameStateHandler = (e) =>{
    this.setState({hotelName : e.target.value});
  }        
  priceRangeHandler = () =>{

  }
  render() {
      const {hotelName, priceRange} = this.state;
    return (
        <aside id="sidebar">
            <div id="sidebar">
                <form action="#" className="search-hotel">
                    <input type="search" value={hotelName} onChange={this.searchHotelNameStateHandler} placeholder="Search Hotel"/>
                    <button className="search-btn">Submit</button>
                    <label htmlFor="price">Price Filter</label>
                    <input type="range" value={priceRange} onChange={this.priceRangeHandler} id="price" name="cowbell" min="0" max="100"  step="2"/>
                </form>
            </div>
        </aside>
    );
  }
}