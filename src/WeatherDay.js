import React from 'react';

class WeatherDay extends React.Component {
  render(){
    return(
      <>
        <p>{this.props.weather.date}: {this.props.weather.description} </p>
      </>
    );
  }
}

export default WeatherDay;
