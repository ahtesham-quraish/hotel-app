import React, { Component } from 'react';
import './index.css';

export default class Search extends Component {
  render() {
    return (
        <form action="#" className="search-form">
            <div className="three-cols">
                <div className="col">
                    <input type="text" placeholder="12-Aug 1018"/>
                </div>
                <div className="col">
                    <input type="text" placeholder="12-Aug 1018"/>
                </div>
                <input type="submit" value="Search" className="submit-btn"/>
            </div>
        </form>
    );
  }
}