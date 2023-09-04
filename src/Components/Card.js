import { React, useEffect, useState } from 'react';
import { getMovieList, searchMovie } from '../API';

const Card = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        // container movie
        <div className="max-w-sm space-y-3 border border-gray-300 shadow rounded-xl p-3 m-5" key={i}>
          <p className="text-center text-2xl font-bold h-16 min-h-min">{movie.title}</p>
          <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} />
          <p className="text-center text-gray-500 font-medium">{movie.release_date}</p>
          <p className="text-center text-gray-500 font-medium">{movie.vote_average}</p>
          <p className="text-center text-gray-500 font-medium">{movie.overview}</p>
        </div>
      );
    });
  };

  const search = async (q) => {
    const query = await searchMovie(q);
    setPopularMovies(query.results);
  };

  return (
    <>
      <input placeholder="Cari film kesayanganmu disini.." className="container mx-auto flex flex-wrap justify-center w-60 p-2 mt-5 border border-gray-300 rounded-xl shadow" onChange={({ target }) => search(target.value)} />
      <div className="container mx-auto flex flex-wrap justify-center mt-5">
        <PopularMovieList />
      </div>
    </>
  );
};
export default Card;
