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
import Loading from "./Loading";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const movies = useSelector(store => store.movies);
  const viewTrailer = movies.toggleMovieTrailer;

  return (
    <div className=" overflow-hidden">
      <Header />
      {!movies.useNowPlayingMovies ? <Loading /> : <>{
        viewTrailer ? <MovieTrailer /> :
        <>
        <PrimaryContainer />
        <SecondaryContainer />
        </>
      }</>}
    </div>
  );
};

export default Browse;
