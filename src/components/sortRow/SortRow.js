import React, { Component } from 'react';
import './index.css';

export default class SortRow extends Component {
  render() {
    return (
        <div className="sort-row">
            <span className="title">Total Nights: 5</span>
            <ul className="btn-list">
                <li><a href="javascript:void(0)">Sort by Name</a></li>
                <li><a href="javascript:void(0)">Sort by Price</a></li>
            </ul>
        </div>
    );
  }
}