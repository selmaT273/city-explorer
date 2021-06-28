import React from 'react';

class Location extends React.Component{

    render(){
        return(
            <>
            <h2>Location Information:</h2>
            <h3>{this.props.data.display_name}</h3>
            <h4>{this.props.data.lat}</h4>
            <h4>{this.props.data.lon}</h4>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${this.props.key}&center=${this.props.lat},${this.props.lon}`} alt='map' />
            </>
        );
    }
}

export default Location;