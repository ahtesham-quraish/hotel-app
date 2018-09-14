import React, { Component } from 'react';
import './index.css';
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css';
import Button from '../button/Button';

export default class Sidebar extends Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            hotelName: '',
            value : 0
        }; 
    }
  setValue = (e) => {
        this.setState({ value: e })
        console.log(e);
  }  
  searchHotelNameStateHandler = (e) =>{
    this.setState({hotelName : e.target.value});
  }        
  render() {
      const {hotelName} = this.state;
    return (
        <aside id="sidebar">
            <div id="sidebar">
                <form action="#" className="search-hotel">
                    <input id="searchText" type="search" value={hotelName} onChange={this.searchHotelNameStateHandler} placeholder="Search Hotel"/>
                    <Button onClick={() => this.props.findHotelByName('name', this.state.hotelName)} classStyle={'search-btn'} id={'searchByText'} text={'Search Button'}/>                    
                    <label htmlFor="price">Price Filter</label>
                    <Slider value={this.state.value} onChange={this.setValue} onAfterChange={() => this.props.findHotelByName('price', this.state.value)} />
                </form>
            </div>
        </aside>
    );
  }
}