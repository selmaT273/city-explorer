import './App.css';
import React from 'react';
import Search from './Search';
import axios from 'axios';
import Location from './Location';
import Weather from './Weather';
import Movies from './Movies';

const locationKey = process.env.REACT_APP_LOCATION_KEY;
const backendURL = process.env.REACT_APP_BACKEND_URL;
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      haveSearched: false,
      locationData: '',
      weatherData: [],
      movieData: [],
    };
  }

  handleSearch = (searchBarText) => {
    return axios.get(`https://us1.locationiq.com/v1/search.php?&format=json`,
      {params: {
        key: locationKey,
        q: searchBarText,
      }})
      .then(locationRawData => {
        this.setState({
          locationData: locationRawData.data[0],
        });
        this.handleWeather();
        this.handleMovies();
      })
      .catch(err => {
        this.setState({ error: err.message });
      });
  }

  handleWeather = () => {
    return axios.get(`${backendURL}/weather`,
      {params: {
        lat: this.state.locationData.lat,
        lon: this.state.locationData.lon,
      }})
      .then(weatherData => {
        this.setState({
          haveSearched: true,
          weatherData: weatherData.data,
        });
      })
      .catch(err => {
        this.setState({ error: err.message});
      });
  }

  handleMovies = () => {
    const displayName = this.state.locationData.display_name;
    const queriedCity = displayName.substring(0, displayName.indexOf(','));
    return axios.get(`${backendURL}/movies`,
      {params: {
        search_query: queriedCity,
      }})
      .then(movieData => {
        this.setState({
          movieData: movieData.data,
        });
      })
      .catch(err => {
        this.setState({ error: err.message});
      });
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
              <Movies movies={this.state.movieData}/>
            </section>
            : 'Search for a location to see info.'}
          {this.state.error ? <h2>{this.state.error}</h2> : ''}
        </section>
      </>
    );
  }
}

export default App;
