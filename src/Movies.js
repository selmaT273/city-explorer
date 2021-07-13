import React from 'react';

class Movies extends React.Component {
  render(){
    return(
      <>
        {this.props.movies === null ? '' :
          <>
            <h3>Movies:</h3>
            {this.props.movies.map(movie =>
              (<p key={movie.title}>
                Title: {movie.title}
              </p>)
            )}
          </>
        }
      </>
    );
  }
}

export default Movies;
