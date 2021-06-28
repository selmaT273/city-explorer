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
            <h2>location info</h2>
            <h3>{this.props.data.display_name}</h3>
            </>
        );
    }
}

export default Location;