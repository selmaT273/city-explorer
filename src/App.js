import './App.css'
import React from 'react';
import Search from './Search';
import axios from 'axios';
import Location from './Location';
import Weather from './Weather';

const locationKey = process.env.REACT_APP_LOCATION_KEY;
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        haveSearched: false,
        locationData: '',
    }
  }

  handleSearch = async(searchBarText) => {
    try {
      const locationRawData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${locationKey}&q=${searchBarText}&format=json`);
      this.setState({
        haveSearched: true,
        locationData: locationRawData.data[0],
      });
    } catch (err) {
      this.setState({ error: err.message });
    }
    
    const weatherData = await axios.get('http://localhost:3000/weather');
    console.log(weatherData);
  }
  
  render(){
    return(
      <>
      <section className="search-component">
        <h1>City Explorer</h1>
        <Search handleSearch={this.handleSearch} />
        {this.state.haveSearched ? 
          <section>
            <Location data={this.state.locationData} />
            <Weather />
          </section>
          : 'Search for a location to see info.'}
        {this.state.error ? <h2>{this.state.error}</h2> : ''}
      </section>
      </>
    )
  }
}

export default App;
