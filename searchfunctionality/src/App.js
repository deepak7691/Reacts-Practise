import React, { useEffect, useState } from 'react';

const App = () => {
  const apiUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=83e51a92af33e7b2703ea7db03f8fa11&language=en-US&page=10";
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  const handleInput = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setData(data.results);
      });
  }, []);

  // Filter movies based on search input
  const filteredMovies = data.filter(movie => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input type='text' value={search} onChange={handleInput} />
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

export default App;
