import React, { Component } from 'react';
import './index.css';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
export default class Sidebar extends Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            hotelName: '',
            value : 10
        }; 
    }
  setValue = (e) => {
        this.setState({ value: e })
  }
  update = () => {
		//this.props.update(this.state)
  }  
  searchHotelNameStateHandler = (e) =>{
    this.setState({hotelName : e.target.value});
  }        
  render() {
      const {hotelName} = this.state;
    return (
        <aside id="sidebar">
            <div id="sidebar">
                {/* <form action="#" className="search-hotel"> */}
                    <input id="searchText" type="search" value={hotelName} onChange={this.searchHotelNameStateHandler} placeholder="Search Hotel"/>
                    <button id="searchByText" onClick={() => this.props.findHotelByName(this.state.hotelName)} className="search-btn">Submit</button>
                    <label htmlFor="price">Price Filter</label>
                    <Slider value={this.state.value} onChange={this.setValue} onAfterChange={this.update} />
                {/* </form> */}
            </div>
        </aside>
    );
  }
}