import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomigMovies";
import PrimaryContainer from "./PrimaryContainer";
import { useSelector } from "react-redux";
import MovieTrailer from "./MovieTrailer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const viewTrailer = useSelector(store => store.movies.toggleMovieTrailer);

  return (
    <div className=" overflow-hidden">
      <Header />
      {
        viewTrailer ? <MovieTrailer /> :
        <>
        <PrimaryContainer />
        <SecondaryContainer />
        </>
      }
    </div>
  );
};

export default Browse;
