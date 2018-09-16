import React, { Component } from 'react';
import './index.css';
import DatePickerComponent from '../datepicker/DatePicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Button from '../button/Button';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.format = 'YYYY/MM/DD';
    this.state = {
      startDate: moment('2020-10-4', this.format),
      endDate: moment('2020-10-20', this.format),
    };
  }
  startDateHandler = (date) => {
    this.setState({
      startDate: date,
    });
  };
  endDateHandler = (date) => {
    this.setState({
      endDate: date,
    });
  };
  render() {
    const { startDate, endDate } = this.state;
    return (
      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
        className="search-form"
      >
        <div className="three-cols">
          <div className="col">
          <DatePickerComponent selectedDateCallBC={this.startDateHandler} date={startDate} />
          </div>
          <div className="col">
            <DatePickerComponent selectedDateCallBC={this.endDateHandler} date={endDate} />
            </div>
          <Button
            onClick={() => this.props.searchHotelCallBack(startDate, endDate)}
            classStyle={'btn-submit'}
            id={'submit'}
            text={'Submit'}
          />
        </div>
      </form>
    );
  }
}
