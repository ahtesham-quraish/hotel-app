import React, { Component } from 'react';
import './App.css';
import Hotel from '../../components/hotel/Hotel';
import SortRow from '../../components/sortRow/SortRow';
import Sidebar from '../../components/sidebar/Sidebar';
import Search from '../../components/search/Search';
class App extends Component {
  render() {
    return (
      <div className="App">
      <Search/>
        <div className="content-holder">
          <Sidebar/>
          <div id="content">
            <SortRow/>
            <Hotel />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
