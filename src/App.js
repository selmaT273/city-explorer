import './App.css';
import React from 'react';
import Search from './Search';
import axios from 'axios';
import Location from './Location';
import Weather from './Weather';

const locationKey = process.env.REACT_APP_LOCATION_KEY;
const backendURL = process.env.REACT_APP_BACKEND_URL;
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      haveSearched: false,
      locationData: '',
      weatherData: [],
    };
  }

  handleSearch = (searchBarText) => {
    try {
      axios.get(`https://us1.locationiq.com/v1/search.php?&format=json`,
        {params: {
          key: locationKey,
          q: searchBarText,
        }})
        .then(locationRawData => {
          this.setState({
            locationData: locationRawData.data[0],
          });
          // console.log(this.state.locationData);
          this.handleWeather();
        });
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  handleWeather = () => {
    try {
      return axios.get(`${backendURL}/weather`).query({ lat: location.lat })
        .then(weatherData => {
          this.setState({
            haveSearched: true,
            weatherData: weatherData.data,
          });
          console.log(this.state.weatherData);
        });
    } catch (err) {
      this.setState({ error: err.message });
    }
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
              <Weather weather={this.state.weatherData}/>
            </section>
            : 'Search for a location to see info.'}
          {this.state.error ? <h2>{this.state.error}</h2> : ''}
        </section>
      </>
    );
  }
}

export default App;
