import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


export default class DatePickerComponent extends Component {
  constructor(props) {
    super(props);
    this.format = 'YYYY/MM/DD';
  }
  pickDateHandler = (date) => {
    this.props.selectedDateCallBC(date)
  };
  render() {
    const { date } = this.props;
    return (
          <div className="col">
            <DatePicker
              selected={date}
              onChange={this.pickDateHandler}
              dateFormat={this.format}
            />
          </div>
    
    );
  }
}
