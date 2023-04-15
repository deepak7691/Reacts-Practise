import React from 'react';

const Home = ({ filteredMovies }) => {
  return (
    <div>
      <ul>
        {filteredMovies.map(movie => {
          return (
            <li key={movie.id}>{movie.title}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home;
