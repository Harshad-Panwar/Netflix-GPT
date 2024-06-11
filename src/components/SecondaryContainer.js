import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);

  return <div className="bg-black pt-32">
    <MoviesList title={"Now Playing"} data={movies?.nowPlayingMovies} />
    <MoviesList title={"Popular"} data={movies?.popularMovies} />
    <MoviesList title={"Top Rated"} data={movies?.topRatedMovies} />
    <MoviesList title={"Upcoming"} data={movies?.upcomingMovies} />
  </div>;
};

export default SecondaryContainer;
