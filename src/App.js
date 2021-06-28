import './App.css';
import React from 'react';
import Search from './Search';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        haveSearched: false,
        searchedCity: '',
    }
  }

  handleSearch = (searchBarText) => {
    console.log('searched');
    console.log(searchBarText);
    this.setState({
        haveSearched: true,
        searchedCity: searchBarText,
    });
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
