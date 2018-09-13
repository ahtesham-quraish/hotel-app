import React, { Component } from 'react';
import './index.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

export default class Search extends Component {
    constructor(props) { 
        super(props); 
        this.state = { 
            startDate: moment(),
            endDate : moment(),  
        }; 
        this.format="YYYY/MM/DD";
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
  render() {
      const {startDate , endDate} = this.state;
    return (
        <form action="#" className="search-form">
            <div className="three-cols">
                <div className="col">
                <DatePicker
                    selected={startDate}
                    onChange={this.startDateHandler}
                    dateFormat={this.format}
                />
                </div>
                <div className="col">
                <DatePicker
                    selected={endDate}
                    onChange={this.endDateHandler}
                    dateFormat={this.format}
                />
                </div>
                <button id="submit" onClick={() => this.props.searchHotelCallBack(startDate , endDate)}  className="submit-btn">Submit</button>
            </div>
        </form>
    );
  }
}