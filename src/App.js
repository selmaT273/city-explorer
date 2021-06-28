import './App.css';
import React from 'react';
import Search from './Search';
import axios from 'axios';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        haveSearched: false,
        searchedCity: '',
    }
  }

  handleSearch = async(searchBarText) => {
    console.log('searched');
    console.log(searchBarText);
    this.setState({
        haveSearched: true,
        searchedCity: searchBarText,
    });
    const locationKey = process.env.REACT_APP_LOCATION_KEY;
    let locationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${locationKey}&q=${searchBarText}&format=json`);
    console.log(locationData);
  }

  render(){
    return(
      <>
      <h1>City Explorer</h1>
      {this.state.haveSearched ? '' : <Search handleSearch={this.handleSearch} handleText={this.handleText}/>}
      </>
    )
  }
}

export default App;
