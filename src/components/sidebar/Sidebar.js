import React, { Component } from 'react';
import './index.css';

export default class Sidebar extends Component {
  render() {
    return (
        <aside id="sidebar">
            <div id="sidebar">
                <form action="#" className="search-hotel">
                    <input type="search" placeholder="Search Hotel"/>
                    <input type="submit" value="" className="search-btn"/>
                    <label htmlFor="price">Price Filter</label>
                    <input type="range" id="price" name="cowbell" min="0" max="100" value="90" step="2"/>
                </form>
            </div>
        </aside>
    );
  }
}