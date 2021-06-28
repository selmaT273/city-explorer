import React from 'react';

class Location extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: this.props.data.lat,
            longitude: this.props.data.lon,
        }
    }

    render(){
        return(
            <>
            <h2>Location Information:</h2>
            <h3>{this.props.data.display_name}</h3>
            <h4>{this.state.latitude}</h4>
            <h4>{this.state.longitude}</h4>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${this.props.key}&center=${this.state.latitude},${this.state.longitude}`} alt='map' />
            </>
        );
    }
}

export default Location;