import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import Loading from "./Loading";
import GptSearch from "./GptSearch";
import MovieTrailer from "./MovieTrailer";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpcomingMovies from "../customHooks/useUpcomigMovies";

const Browse = () => {
  // Fetch movie data using custom hooks
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  // Select relevant data from Redux store
  const movies = useSelector((store) => store.movies);
  const isTrailerVisible = movies.toggleMovieTrailer;
  const isGptVisible = useSelector((store) => store.gpt.showGptSearch);
  const isLoading = !movies.nowPlayingMovies;

  return (
    <div className="overflow-hidden bg-black">
      <Header />
      {/* Conditional rendering based on trailer visibility */}
      {isTrailerVisible ? (
        <MovieTrailer />
      ) : (
        <>
          {/* Conditional rendering based on loading state */}
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {/* Conditional rendering based on GPT search visibility */}
              {isGptVisible ? (
                <GptSearch />
              ) : (
                <>
                  <PrimaryContainer />
                  <SecondaryContainer />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Browse;
