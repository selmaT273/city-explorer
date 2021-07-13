import React from 'react';
import './Movies.css';
import Movie from './Movie';
class Movies extends React.Component {
  render(){
    return(
      <>
        {this.props.movies === null ? '' :
          <>
            <h3>Movies:</h3>
            {this.props.movies.map(movie =>
              (<Movie key={movie.title} movie={movie} />)
            )}
          </>
        }
      </>
    );
  }
}

export default Movies;
