import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import lang from "../utils/languageConstants";

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  const selectedlang = useSelector(store => store.appConfig.selectedLang);

  return <div className="bg-black pt-32">
    <MoviesList title={lang[selectedlang].nowPlaying} data={movies?.nowPlayingMovies} />
    <MoviesList title={lang[selectedlang].popular} data={movies?.popularMovies} />
    <MoviesList title={lang[selectedlang].topRated} data={movies?.topRatedMovies} />
    <MoviesList title={lang[selectedlang].upcoming} data={movies?.upcomingMovies} />
  </div>;
};

export default SecondaryContainer;
