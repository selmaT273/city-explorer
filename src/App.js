import './App.css';
import React from 'react';
import Search from './Search';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state={
        haveSearched: false,
        searchedCity: '',
        searchBarText: '',
    }
  }

  handleText = (searchBarText) => {
    console.log(searchBarText.target.value);
    this.setState({
      searchBarText: searchBarText.target.value,
    })
  }

  handleSearch = () => {
    console.log('searched');
    console.log(this.state.searchBarText);
    this.setState({
        haveSearched: true,
        searchedCity: this.state.searchBarText,
    });
  }

  render(){
    return(
      <>
      <h1>City Explorer</h1>
      <Search handleSearch={this.handleSearch} handleText={this.handleText}/>
      </>
    )
  }
}

export default App;
