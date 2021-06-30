import React from 'react';

class Weather extends React.Component {
  render(){
    return(
      <>
        {this.props.weather === null ? '' :
          <>
            <h3>Weather Forecast:</h3>
            {this.props.weather.map(day => (<p key={day.date}>{day.date}: {day.description}</p>))}
          </>
        }
      </>
    );
  }
}

export default Weather;
