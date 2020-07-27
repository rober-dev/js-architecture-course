// Vendor libs
import React, { useState } from 'react';
import Link from 'next/link';

// Custom components
import MovieList from '../components/movies/MovieList';
import MovieListItem from '../components/movies/MovieListItem';

// Members
const movies = [
  {
    id: 1,
    title: 'Star Wars',
    year: 1978
  },
  {
    id: 2,
    title: 'Star Trek',
    year: 1984
  },
  {
    id: 3,
    title: 'Indiana Jones',
    year: 1986
  }
];

// Component definition
const MoviesPage = () => {
  // State members
  const [selectedMovie, setSelectedMovie] = useState();

  const handleMovieSelected = movie => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Movies</h1>
      <MovieList movies={movies} onMovieSelected={handleMovieSelected} />

      <div>
        <h4>Película seleccionada</h4>
        {selectedMovie && <MovieListItem movie={selectedMovie} />}
        {!selectedMovie && <span>No hay película seleccionada</span>}
      </div>

      <Link href='/'>
        <a href='/'>Inicio</a>
      </Link>
    </div>
  );
};

// Exportation
export default MoviesPage;
