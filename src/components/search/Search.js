import React, { Component } from 'react';
import './index.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Search extends Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            fromDate: moment(),
            endDate : moment(),
            counter : 0,
        }; 
  }
  startDateHandler = (date) =>{
    this.setState({
        startDate: date
      });
  }
  endDateHandler = (date) =>{
    this.setState({
        endDate: date
      });
  }
  searchHotelHandler = () =>{
    this.setState({counter : 1})  
    this.props.searchHotelCallBack(this.state.startDate , this.state.endDate);
  }
  render() {
    return (
        <form action="#" className="search-form">
            <div className="three-cols">
                <div className="col">
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.startDateHandler}
                />
                </div>
                <div className="col">
                <DatePicker
                    selected={this.state.endDate}
                    onChange={this.endDateHandler}
                />
                </div>
                <button id="submit" onClick={(event) => {this.searchHotelHandler(event)}}  className="submit-btn">Submit</button>
            </div>
        </form>
    );
  }
}