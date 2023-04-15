// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const apiUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=83e51a92af33e7b2703ea7db03f8fa11&language=en-US&page=10";
//   const [search, setSearch] = useState("");
//   const [data, setData] = useState([]);

//   const handleInput = (e) => {
//     setSearch(e.target.value);
//   }

//   useEffect(() => {
//     fetch(apiUrl)
//       .then(res => res.json())
//       .then(data => {
//         setData(data.results);
//       });
//   }, []);

//   // Filter movies based on search input
//   const filteredMovies = data.filter(movie => {
//     return movie.title.toLowerCase().includes(search.toLowerCase());
//   });

//   return (
//     <div>
//       <input type='text' value={search} onChange={handleInput} />
//       <ul>
//         {filteredMovies.map(movie => {
//           return (
//             <li key={movie.id}>{movie.title}</li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

// export default App;


// Note >>    if the search value is empty (i.e., an empty string), the data array will be filtered using data.filter() with an empty condition, which would evaluate to true for all elements in the data array. This means that all movies will be included in the filteredMovies array, and they will all be rendered in the component.

// In other words, when search is empty, the filteredMovies array will contain all movies from the data array, and they will all be rendered in the ul element as li elements. This is why initially, before any user input in the input field, all movies are rendered in the component.

//***********************************************Using different components************************************************************************
import React, { useEffect, useState } from 'react';
import Header from './Header';  //for search input field
import Home from './Home';  // for all data 

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
      {/* passing props */}
      <Header search={search} handleInput={handleInput} />  
      <Home filteredMovies={filteredMovies} />              
    </div>
  )
}

export default App;

//we can use context if we want to go more nested components
