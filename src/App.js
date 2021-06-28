import './App.css'
import React from 'react';
import Search from './Search';
import axios from 'axios';
import Location from './Location';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        haveSearched: false,
        locationData: '',
    }
  }

  handleSearch = async(searchBarText) => {
    const locationKey = process.env.REACT_APP_LOCATION_KEY;
    const locationRawData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${locationKey}&q=${searchBarText}&format=json`);
    this.setState({
      haveSearched: true,
      locationData: locationRawData.data[0],
    });
  }

  render(){
    return(
      <>
      <h1>City Explorer</h1>
      <Search handleSearch={this.handleSearch} />
      {this.state.haveSearched ? 
        <Location data={this.state.locationData} key={this.locationKey} /> : 'Search for a location to see info.'}
      </>
    )
  }
}

export default App;
