import React from 'react';

const locationKey = process.env.REACT_APP_LOCATION_KEY;
class Location extends React.Component{

  render(){
    return(
      <>
      <section className="location-output">
        <h2>Location Information:</h2>
        <h3>{this.props.data.display_name}</h3>
        <h4>{this.props.data.lat}</h4>
        <h4>{this.props.data.lon}</h4>
        <img src={`https://maps.locationiq.com/v3/staticmap?key=${locationKey}&center=${this.props.data.lat},${this.props.data.lon}`} alt='map' />
      </section> 
      </>
    );
  }
}

export default Location;