import React from 'react';
import Image from 'react-bootstrap/Image';

class Movie extends React.Component {
  render(){
    return(
      <>
        <ul className="movie-list" key={this.props.movie.title}>
          <li><h4>{this.props.movie.title}</h4></li>
          <li><i>Released: {this.props.movie.released_on}</i></li>
          {this.props.movie.image_url === null
            ? '*No Image Available*'
            : <li><Image src={`https://image.tmdb.org/t/p/w300/${this.props.movie.image_url}`}/></li>
          }
          <li>{this.props.movie.overview}</li>
          <li><b>Avg Votes:</b> {this.props.movie.average_votes}</li>
          <li><b>Total Votes:</b> {this.props.movie.total_votes}</li>
          <li><b>Popularity Rating:</b> {this.props.movie.popularity}</li>
        </ul>
      </>
    );
  }
}

export default Movie;
