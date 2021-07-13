import React from 'react';
import WeatherDay from './WeatherDay';

class Weather extends React.Component {
  render(){
    return(
      <>
        {this.props.weather === null ? '' :
          <>
            <h3>Weather Forecast:</h3>
            {this.props.weather.map(day =>
              (<WeatherDay
                key={day.date}
                weather={day}
              />)
            )}
            <WeatherDay weather={this.props.weather} />
          </>
        }
      </>
    );
  }
}

export default Weather;
