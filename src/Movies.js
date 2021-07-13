import React from 'react';
import './Movies.css';
import Image from 'react-bootstrap/Image';

class Movies extends React.Component {
  render(){
    return(
      <>
        {this.props.movies === null ? '' :
          <>
            <h3>Movies:</h3>
            {this.props.movies.map(movie =>
              (<ul className="movie-list" key={movie.title}>
                <li><h4>{movie.title}</h4></li>
                <li><i>Released: {movie.released_on}</i></li>
                {movie.image_url === null
                  ? '*No Image Available*'
                  : <li><Image src={`https://image.tmdb.org/t/p/w300/${movie.image_url}`}/></li>
                }
                <li>{movie.overview}</li>
                <li><b>Avg Votes:</b> {movie.average_votes}</li>
                <li><b>Total Votes:</b> {movie.total_votes}</li>
                <li><b>Popularity Rating:</b> {movie.popularity}</li>
              </ul>)
            )}
          </>
        }
      </>
    );
  }
}

export default Movies;
