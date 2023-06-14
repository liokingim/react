import React, { useState } from 'react';
import Movie from './components/Movie';
import MovieForm from './components/MovieForm';

function App() {
  const [movies, setMovies] = useState([
    { title: 'kossie coder1', year: 2001 },
    { title: 'kossie coder2', year: 2002 },
    { title: 'kossie coder3', year: 2003 },
    { title: 'kossie coder4', year: 2004 }
  ]);

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie={movie} key={movie.title} />
    );
  });
  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ]);
  };
  return (
    <div className="App">
      <h1>Movie list</h1>
      <MovieForm addMovie={addMovie} />
      {renderMovies}
    </div>
  );
}

export default App;