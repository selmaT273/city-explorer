import React from 'react';
import axios from 'axios';

class Weather extends React.Component {

  handleWeather = async (e) => {
    let rawWeatherData = await axios.get('http://localhost:3000/weather');
  }

  render(){
    return(
      <>
        <h2>Weather Info: </h2>
      </>
    )
  }
}

export default Weather;